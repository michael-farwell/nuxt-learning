export default defineEventHandler((event) => {
  const { chapterSlug, lessonSlug } = getRouterParams(event);
  return `Lesson: ${ lessonSlug } Chapter: ${ chapterSlug }`;
});