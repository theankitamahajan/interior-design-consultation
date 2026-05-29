export function formatCurrency(
  value: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(value);
  } catch (e) {
    console.error("formatCurrency failed:", e);
    return String(value);
  }
}

export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export function safeJSONParse<T = unknown>(
  raw: string,
  fallback: T
): T {
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export type Maybe<T> = T | null | undefined;
export type Nullable<T> = T | null;
