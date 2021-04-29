import dayjs from "dayjs";

export function formatCurrentDate(format = "YYYY-MM-DD HH-mm-ss") {
  return dayjs().format(format);
}
