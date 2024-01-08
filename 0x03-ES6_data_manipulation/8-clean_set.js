export default function cleanSet(set, startString) {
  const strings = [];
  set.forEach((value) => {
    if (value.startsWith(startString) && startString !== '') {
      strings.push(value.slice(startString.length));
    }
  });
  return strings.join('-');
}
