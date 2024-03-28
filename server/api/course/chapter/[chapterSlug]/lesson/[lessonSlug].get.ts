import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { chapterSlug, lessonSlug } = event.context.params as { chapterSlug: string, lessonSlug: string };
  return prisma.lesson.findFirst({
    where: {
      Chapter: {
        slug: chapterSlug,
      },
    },
    include: {
      Chapter: true,
    },
  });
});