import useFetchWithCache from "~/composables/useFetchWithCache";
import type { CourseOutline } from "~/server/api/course/meta.get";

export default async () => useFetchWithCache<CourseOutline>("/api/course/meta")