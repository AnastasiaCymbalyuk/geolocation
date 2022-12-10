export default function validGeolacation(data) {
  return /\[?\d*\.\d*,\s?[-,–,—,−]?\d*\.\d*\]?/.test(data);
}
