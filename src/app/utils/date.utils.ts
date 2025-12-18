import { patterns } from "./patterns";


export function parseDateValue(value: any): Date {


  if (value instanceof Date) {
    return value;
  }

  let yyyy: number, mm: number, dd: number;

  if (patterns.dateDash.test(value)) {
    // 2025-12-04
    const [y, m, d] = value.split('-');
    yyyy = Number(y);
    mm = Number(m);
    dd = Number(d);
    return new Date(yyyy, mm - 1, dd);
  } else if (patterns.dateSlash.test(value)) {
    // 2025/12/04
    const [y, m, d] = value.split('/');
    yyyy = Number(y);
    mm = Number(m);
    dd = Number(d);
    return new Date(yyyy, mm - 1, dd);
  } else if (patterns.dateCompact8.test(value)) {
    // 20251204
    yyyy = Number(value.slice(0, 4));
    mm = Number(value.slice(4, 6));
    dd = Number(value.slice(6, 8));
    return new Date(yyyy, mm - 1, dd);
  } else if (patterns.dateCompact6.test(value)) {
    // 251204
    yyyy = 2000 + Number(value.slice(0, 2));
    mm = Number(value.slice(2, 4));
    dd = Number(value.slice(4, 6));
    return new Date(yyyy, mm - 1, dd);
  } else {
    return new Date(value);
  }
}
