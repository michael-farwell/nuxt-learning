<script
    setup
    lang="ts">
const user = useSupabaseUser();
const { title, chapters } = await useCourse();
const firstLesson = await useFirstLesson();
const { percentageCompleted } = storeToRefs(useCourseProgress());

const resetError = async (error: any) => {
  await navigateTo(firstLesson.path);
  error.value = null;
};
</script>

<template>
  <div>
    <div class="mb-4 flex justify-between items-center w-full">
      <h1 class="text-3xl">
        <span class="font-medium">
          Course:
          <span class="font-bold">{{title}}</span>
        </span>
      </h1>
      <UserCard />
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col">
        <h3>Chapters</h3>
        <div
            class="space-y-1 mb-4 flex flex-col"
            v-for="(chapter, index) in chapters"
            :key="chapter.slug">
          <h4 class="flex justify-between items-center">
            {{chapter.title}}
            <span
                v-if="percentageCompleted && user"
                class="text-emerald-500 text-sm">
              {{percentageCompleted.chapters[index]}}%
            </span>
          </h4>
          <NuxtLink
              v-for="(lesson, index) in chapter.lessons"
              :key="lesson.slug"
              class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
              :class="lesson.path === $route.fullPath ? 'text-blue-500 font-semibold' : ''"
              :to="lesson.path">
            <span class="text-gray-500">{{index + 1}}.</span>
            <span>{{lesson.title}}</span>
          </NuxtLink>
        </div>
        <div
            v-if="percentageCompleted"
            class="mt-8 text-sm font-medium text-gray-500 flex justify-between items-center">
          Course completion: <span>{{percentageCompleted.course}}%</span>
        </div>
      </div>

      <div class="prose p-12 bg-white rounded-md w-[65ch]">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{error}">
            <p>
              Oh no, something went wrong with the lesson!
              <code>{{error}}</code>
            </p>
            <p>
              <button
                  class="hover:cursor-pointer bg-gray-500 text-white font-bold py-1 px-3 rounded"
                  @click="resetError(error)">
                Reset
              </button>
            </p>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>
