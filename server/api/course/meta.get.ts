import course from "~/server/courseData";
import { Chapter } from "~/types/course";

type CourseMeta = {
  chapters: OutlineChapter[];
  title: string
}

type OutlineBase = {
  number: number;
  slug: string;
  title: string;
}

type OutlineChapter = OutlineBase & {
  lessons: OutlineLesson[];
}

type OutlineLesson = OutlineBase & {
  path: string;
}

export default defineEventHandler((event): CourseMeta => {
  const outline: OutlineChapter[] = course.chapters.reduce((prev: OutlineChapter[], next: Chapter) => {
    const lessons: OutlineLesson[] = next.lessons.map((lesson) => ({
      title: lesson.title,
      slug: lesson.slug,
      number: lesson.number,
      path: `/course/chapter/${ next.slug }/lesson/${ lesson.slug }`,
    }));
    const chapter: OutlineChapter = {
      title: next.title,
      slug: next.slug,
      number: next.number,
      lessons,
    };
    return [...prev, chapter];
  }, []);

  return {
    title: course.title,
    chapters: outline,
  };
});