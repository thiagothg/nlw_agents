import lib from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

lib.locale("pt-br");
lib.extend(relativeTime);

export function formatRelativeDate(date: string) {
  return lib(date).fromNow();
}

export const dayjs = lib;
