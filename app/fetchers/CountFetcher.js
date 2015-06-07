export default function fetchCount() {
  // Simulate an API call that takes 500ms to return the count data
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let returnedCount = 5;
      resolve(returnedCount);
    },500);
  });
}
