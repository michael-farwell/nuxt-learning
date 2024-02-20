<script
    setup
    lang="ts">
defineEmits(["update:modelValue"]);
defineProps<{
  modelValue: boolean;
}>();
</script>

<template>
  <label
      class="rounded text-white font-bold py-2 px-4 cursor-pointer"
      :class="modelValue ? 'bg-green-500' : 'bg-gray-500'">
    <input
        type="checkbox"
        :value="modelValue"
        @input="() => $emit('update:modelValue', !modelValue)"
        class="hidden">
    {{modelValue ? "Completed!" : "Mark as complete"}}
  </label>
</template>

<style scoped>
::selection {
  display: none;
}
</style>