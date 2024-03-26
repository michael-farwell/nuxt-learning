import type { AsyncData } from "#app";
import { StorageSerializers } from "@vueuse/core";
import type { FetchError } from "ofetch";
import useFetchWithCache from "~/composables/useFetchWithCache";
import type { LessonWithPath } from "~/types/course";

export default async (
    chapterSlug: string,
    lessonSlug: string,
): Promise<LessonWithPath> => {
  const url = `/api/course/chapter/${ chapterSlug }/lesson/${ lessonSlug }`;
  return await useFetchWithCache<LessonWithPath>(url);
}