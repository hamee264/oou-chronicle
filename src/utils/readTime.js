export function calculateReadTime(content) {
  if (!content) return 1;

  const plainText = content
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const words = plainText.split(" ").filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 200));
}
