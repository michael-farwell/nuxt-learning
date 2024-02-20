<script
    lang="ts"
    setup>
defineProps<{
  videoId: number;
}>();
</script>

<template>
  <iframe
      width="560"
      height="315"
      :src="`https://player.vimeo.com/video/${videoId}`"
      title="Video Player"
      class="border-none"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
  ></iframe>
</template>

<style scoped></style>
