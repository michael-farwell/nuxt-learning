import courseData from "~/composables/courseData";

type Lesson = {
  downloadUrl: string;
  number: number;
  path: string;
  slug: string;
  sourceUrl?: string;
  text: string;
  title: string;
  videoId: number;
}

type Chapter = {
  lessons: Lesson[];
  number: number;
  slug: string;
  title: string;
}

type Course = {
  chapters: Chapter[];
  title: string;
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
