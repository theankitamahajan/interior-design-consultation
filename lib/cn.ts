type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [key: string]: any }
  | ClassValue[];

export function cn(...args: ClassValue[]): string {
  let result = "";
  for (const arg of args) {
    if (arg === null || arg === undefined || arg === false) continue;
    if (typeof arg === "string" || typeof arg === "number") {
      result += " " + arg;
    } else if (Array.isArray(arg)) {
      const inner = cn(...arg);
      if (inner) result += " " + inner;
    } else if (typeof arg === "object") {
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
          result += " " + key;
        }
      }
    }
  }
  return result.trim();
}

export function classNames(...args: ClassValue[]): string {
  return cn(...args);
}

export function joinClasses(...args: ClassValue[]): string {
  return cn(...args);
}
