export default function cleanSet(set, startString) {
  const strings = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const arraySet = Array.from(set);
  arraySet.forEach((value) => {
    if (typeof startString === 'string' && value.startsWith(startString)) {
      const substring = value.slice(startString.length);
      if (substring && substring !== value) {
        strings.push(substring);
      }
    }
  });
  return strings.join('-');
}
