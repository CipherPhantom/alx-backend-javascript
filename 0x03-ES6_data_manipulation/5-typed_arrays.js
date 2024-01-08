export default function createInt8TypedArray(length, position, value) {
  const Int8TypedArray = new Int8Array(length);
  if (position >= length) {
    throw new Error('Position outside range');
  }
  Int8TypedArray[position] = value;
  return new DataView(Int8TypedArray.buffer);
}
