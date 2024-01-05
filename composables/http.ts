/*
 * @Author: cola
 * @Date: 2023-07-31 12:26:47
 * @LastEditors: cola
 * @Description:
 */
export function getAbortController() {
  return typeof AbortController !== "undefined"
    ? new AbortController()
    : ({} as AbortController);
}

export async function useGet<T>(url: string, params = {}, opts = {}) {
  const { data, error, pending, execute, refresh } = await useFetch(url, {
    method: "get",
    params,
    onRequest({ request, options }) {},
    onResponse({ response, options }) {},
    async onResponseError({ request, response, options }) {
      return Promise.reject(response?._data ?? null);
    },
    ...opts,
  });
  return {
    data: ref(data.value as T),
    error,
    refresh,
    pending,
    execute,
  };
}

export async function usePost<T>(url: string, body = {}, opts = {}) {
  const { data, error, pending, execute, refresh } = await useFetch(url, {
    method: "post",
    body,
    onRequest({ request, options }) {},
    onResponse({ response, options }) {},
    async onResponseError({ request, response, options }) {
      return Promise.reject(response?._data ?? null);
    },
    ...opts,
  });
  return {
    data: ref<T>(data.value as T),
    error,
    refresh,
    pending,
    execute,
  };
}

export async function usePut<T>(url: string, body = {}, opts = {}) {
  const { data, error, pending, execute, refresh } = await useFetch(url, {
    method: "put",
    onRequest({ request, options }) {},
    onResponse({ response, options }) {},
    async onResponseError({ request, response, options }) {
      return Promise.reject(response?._data ?? null);
    },
    body,
    ...opts,
  });
  return {
    data: ref<T>(data.value as T),
    error,
    refresh,
    pending,
    execute,
  };
}

export async function useDelete<T>(url: string, body = {}, opts = {}) {
  const { data, error, pending, execute, refresh } = await useFetch(url, {
    method: "delete",
    onRequest({ request, options }) {},
    onResponse({ response, options }) {},
    async onResponseError({ request, response, options }) {
      return Promise.reject(response?._data ?? null);
    },
    body,
    ...opts,
  });
  return {
    data: ref<T>(data.value as T),
    error,
    refresh,
    pending,
    execute,
  };
}
