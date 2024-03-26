import type { LessonWithPath } from "~/types/course";

export default (): LessonWithPath => {
  const { chapters } = useCourse();
  return chapters[0].lessons[0] as LessonWithPath;
}