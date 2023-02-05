export function formatTitle(
  title: string | null | undefined
): string | undefined {
  if (title === undefined || title === null) {
    return undefined;
  }
  return title.replace(/\n/g, "");
}
