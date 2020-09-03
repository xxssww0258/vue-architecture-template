import dayjs from "dayjs";
import { DATE_FORMAT, RELATIVE_DATE_FORMAT } from "../config.js";

export function dateFormat(date = new Date(), pttern = DATE_FORMAT) {
  return dayjs(date).format(pttern);
}

export function relativeDate(date = new Date(), pttern = RELATIVE_DATE_FORMAT) {
  const d = dayjs(date);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 3600 * 24 * 2) {
    return d.fromNow();
  }

  return pttern ? d.format(pttern) : d;
}
