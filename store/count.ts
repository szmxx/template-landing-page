/*
 * @Author: cola
 * @Date: 2023-08-04 17:40:08
 * @LastEditors: cola
 * @Description:
 */
import { acceptHMRUpdate, defineStore } from "pinia";

export const useCountStore = defineStore("count", () => {
  const count = ref(0);

  function setCount(value: number) {
    count.value = value;
  }

  return {
    count,
    setCount,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCountStore, import.meta.hot));
