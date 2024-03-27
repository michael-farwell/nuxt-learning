import useFetchWithCache from "~/composables/useFetchWithCache";
import type { LessonWithPath } from "~/types/course";

export default async (
    chapterSlug: string,
    lessonSlug: string,
): Promise<LessonWithPath> => {
  return await useFetchWithCache<LessonWithPath>(`/api/course/chapter/${ chapterSlug }/lesson/${ lessonSlug }`);
}