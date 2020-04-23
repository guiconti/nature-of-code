export default function retrieveExample (value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(value);
    }, 2000);
  });
}
