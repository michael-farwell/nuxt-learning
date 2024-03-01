<script
    setup
    lang="ts">
const { auth } = useSupabaseClient();
const user = useSupabaseUser();

const name = computed((): string => user.value?.user_metadata.full_name || "");
const profile = computed((): string => user.value?.user_metadata.avatar_url || "");

const logout = async () => {
  const { error } = await auth.signOut();
  if (error) {
    console.error(error);
    return;
  }
  await navigateTo("/login");
};
</script>

<template>
  <div
      v-if="user"
      class="rounded p-3 flex items-center space-x-3 bg-white">
    <img
        class="rounded-full size-12 border-2 border-blue-400"
        :src="profile"
        :alt="`${name} Profile Avatar`">
    <div class="text-right">
      <div class="font-medium">{{name}}</div>
      <button
          class="text-sm underline text-slate-500"
          @click="logout">
        Log out
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>