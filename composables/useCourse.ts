import courseData from "~/composables/courseData";

interface Course {
  title: string;
  chapters: Chapter[];
}

interface Chapter {
  title: string;
  slug: string;
  number: number;
  lessons: Lesson[];
}

interface Lesson {
  downloadUrl?: string;
  number: number;
  path: string;
  slug: string;
  sourceUrl?: string;
  text: string;
  title: string;
  videoId: number;
}

export const useCourse = (): Course => {
  return {
    ...courseData,
    chapters: courseData.chapters.map((chapter) => ({
      ...chapter,
      lessons: chapter.lessons.map((lesson) => ({
        ...lesson,
        path: `/course/chapter/${ chapter.slug }/lesson/${ lesson.slug }`,
      })),
    })),
  };
};
