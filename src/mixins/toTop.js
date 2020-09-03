/**
 * 动画滚动body
 * @export toTop
 * @param {number} [value=0]  传false 就是到底部
 */
export default function toTop(value = 0) {
  value =
    value === false
      ? document.documentElement.scrollHeight - window.innerHeight
      : value;
  let y = Math.ceil(window.scrollY) || 1;
  if (Math.abs(y - value) < (value - y) / 8 + 6) {
    window.scrollTo(0, value - y ? 1 + y : 1 - y);
    return;
  }
  if (y !== value) {
    value < y
      ? window.scrollTo(0, y - y / 8)
      : window.scrollTo(0, y + (value - y) / 7);
    window.requestAnimationFrame(toTop.bind(null, value));
  }
}
