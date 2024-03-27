import useFetchWithCache from "~/composables/useFetchWithCache";
import type { CourseMeta } from "~/types/course";

export default async () => useFetchWithCache<CourseMeta>("/api/course/meta")