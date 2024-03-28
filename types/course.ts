import type { Lesson } from "@prisma/client";

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

export type CourseMeta = {
  chapters: OutlineChapter[];
  title: string
}

export type OutlineBase = {
  number: number;
  slug: string;
  title: string;
}

export type OutlineChapter = OutlineBase & {
  lessons: OutlineLesson[];
}

export type OutlineLesson = OutlineBase & {
  path: string;
}