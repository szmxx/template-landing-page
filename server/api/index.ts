/*
 * @Author: cola
 * @Date: 2023-08-06 17:42:54
 * @LastEditors: cola
 * @Description:
 */
const startAt = Date.now();
let count = 0;

export default defineEventHandler(() => ({
  pageview: count++,
  startAt,
}));
