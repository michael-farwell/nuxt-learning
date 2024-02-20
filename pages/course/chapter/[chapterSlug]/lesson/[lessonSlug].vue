<script
    setup
    lang="ts">
const $route = useRoute();
const course = useCourse();

const chapter = computed(() => course.chapters.find((chapter) => chapter.slug === $route.params.chapterSlug));
const lesson = computed(() => chapter.value!.lessons.find((lesson) => lesson.slug === $route.params.lessonSlug));
</script>

<template>
  <h2>Lesson</h2>
  <p>This is a lesson</p>
  <p>{{chapter.title}}</p>
  <p>{{lesson.title}}</p>
</template>

<style scoped>

</style>