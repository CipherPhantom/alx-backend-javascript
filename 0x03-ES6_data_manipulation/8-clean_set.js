export default function cleanSet(set, startString) {
  const strings = [];
  const arraySet = Array.from(set);
  arraySet.forEach((value) => {
    if (value.startsWith(startString) && startString !== '') {
      strings.push(value.slice(startString.length));
    }
  });
  return strings.join('-');
}
