import { PrismaClient } from "@prisma/client";
import protectRoute from "~/server/utils/protectRoute";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { chapterSlug, lessonSlug } = event.context.params as { chapterSlug: string, lessonSlug: string };
  if (chapterSlug !== "1-chapter-1") protectRoute(event);
  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
      Chapter: {
        slug: chapterSlug,
      },
    },
  });
  if (!lesson) {
    throw createError({
      statusCode: 404,
      statusMessage: "Lesson not found",
    });
  }
  return {
    ...lesson,
    path: `/api/course/chapter/${ chapterSlug }/lesson/${ lessonSlug }`,
  };
});