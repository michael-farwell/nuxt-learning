import type { AsyncData } from "#app";
import { StorageSerializers } from "@vueuse/core";
import type { FetchError } from "ofetch";
import type { LessonWithPath } from "~/types/course";

export default async (
    chapterSlug: string,
    lessonSlug: string,
): Promise<LessonWithPath> => {
  const url = `/api/course/chapter/${ chapterSlug }/lesson/${ lessonSlug }`;
  const lesson = useSessionStorage<LessonWithPath>(url, null, { serializer: StorageSerializers.object });
  if (!lesson.value) {
    const { data, error } = await useFetch(url) as AsyncData<LessonWithPath, FetchError>;
    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch lesson ${ lessonSlug } in chapter ${ chapterSlug }`,
      });
    }
    lesson.value = data.value;
  } else {
    console.log(`Getting lesson ${ lessonSlug } in chapter ${ chapterSlug } from cache`);
  }
  return lesson.value;
}