export const parseList = (response) => {
  let list = response;
  if (typeof list !== 'object') {
    list = [];
  }
  return list;
};

export const parseItem = (response) => {
  let item = response;
  if (typeof item !== 'object') {
    item = undefined;
  }
  return item;
};
