import type { LessonWithPath } from "~/types/course";

export default async (): Promise<LessonWithPath> => {
  const { chapters } = await useCourse();
  return chapters[0].lessons[0] as LessonWithPath;
}