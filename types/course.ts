export type Lesson = {
  downloadUrl: string;
  number: number;
  slug: string;
  sourceUrl?: string;
  text: string;
  title: string;
  videoId: number;
}

export type LessonWithPath = Lesson & {
  path: string;
}

export type Chapter = {
  lessons: Lesson[] | LessonWithPath[];
  number: number;
  slug: string;
  title: string;
}

export type Course = {
  chapters: Chapter[];
  title: string;
}