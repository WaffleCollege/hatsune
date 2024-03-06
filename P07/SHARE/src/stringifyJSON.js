/* exported stringifyJSON */

console.log(JSON.stringify({ x: 5, y: 6 }));
// オブジェクトを渡すと何が出力されますか？
console.log(
  JSON.stringify({ x: [10, undefined, function() {}, Symbol("")] })
);
// オブジェクトの値に「numbers」「undefined」「functions」「symbols」を渡すと何が出力されますか？

console.log(JSON.stringify([3, "false", false]));
// 「numbers」「strings」「booleans」の配列を渡すと何が出力されますか？

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// Date オブジェクトを渡すと何が表示されますか？

const stringifyJSON = (data) => {
  // YOUR CODE HERE
  if (typeof data === 'undefined') {
    return 'undefined';
  } else if (typeof data === 'string') {
    return `"${data}"`;
  } else if (typeof data === 'number' || typeof data === 'boolean' || data === null) {
    return String(data);
  } else if (Array.isArray(data)) {
    const elements = data.map(element => customStringify(element)).join(',');
    return `[${elements}]`;
  } else if (typeof data === 'object') {
    const keys = Object.keys(data);
    const keyValuePairs = keys.map(key => `"${key}":${customStringify(data[key])}`).join(',');
    return `{${keyValuePairs}}`;
  }
};

const obj = {
  name: "John",
  age: 30,
  isStudent: true,
  hobbies: ["reading", "coding", "traveling"],
  address: {
    city: "New York",
    country: "USA"
  }
};
console.log(customStringify(obj));
