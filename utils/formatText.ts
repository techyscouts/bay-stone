export default function formatText(input: string): string {
  const formatted = input
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
  return formatted;
}
