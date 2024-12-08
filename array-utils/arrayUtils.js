function unique(arr) {
  return [...new Set(arr)];
}

function flatten(arr) {
  let res = [];

  for (let i = 0; i < arr.length; ++i) {
    if (!Array.isArray(arr[i])) {
      res.push(arr[i]);
    } else {
      res = res.concat(flatten(arr[i]));
    }
  }

  return res;
}

function chunk(arr, size) {
  if (size <= 0) {
    throw new Error("Size must be greater than 0");
  }
  let res = [];

  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }

  return res;
}

module.exports = { unique, flatten, chunk };
