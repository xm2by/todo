import dayjs from "dayjs";

export function formatCurrentDate(format = "YYYY-MM-DD") {
  return dayjs().format(format);
}
