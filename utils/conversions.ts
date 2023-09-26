export function toCamelCase(name: string) {
  return name.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}

export function formatName(name: string) {
  if (name.length > 12) {
    return name.slice(0, 12) + "...";
  } else {
    return name;
  }
}

export const getLowerCase = (name: string) => {
  let value;
  if (name) {
    value = name.toLowerCase().replace(/[^a-z0-9]/g, "");
    return value;
  }
  return value;
};
