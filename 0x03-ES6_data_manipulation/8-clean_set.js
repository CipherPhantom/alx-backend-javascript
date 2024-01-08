export default function cleanSet(set, startString) {
  const strings = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const substring = value.substring(startString.length);
      if (substring && substring !== value) {
        strings.push(substring);
      }
    }
  }
  return strings.join('-');
}
