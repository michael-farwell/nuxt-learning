import type { AsyncData } from "#app";
import { StorageSerializers } from "@vueuse/core";
import type { FetchError } from "ofetch";

export default async <T> (url: string): Promise<T> => {
  const cached = useSessionStorage<T>(url, null, { serializer: StorageSerializers.object });
  if (!cached.value) {
    const { data, error } = await useFetch(url) as AsyncData<T, FetchError>;
    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch data from ${ url }`,
      });
    }
    cached.value = data.value;
  } else {
    console.log(`Getting value from cache for ${ url }`);
  }
  return cached.value;
}