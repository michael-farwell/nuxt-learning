<script
    setup
    lang="ts">
const { path } = await useFirstLesson();
</script>

<template>
  <NuxtLink
      class="underline font-medium"
      :to="path">
    Go to first lesson
  </NuxtLink>
</template>