export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  const filtered = [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .filter((suffix) => suffix.length > 0);
  return filtered.join('-');
}
