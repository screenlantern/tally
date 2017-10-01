export const getList = (n) => {
  return fetch(`https://randomuser.me/api/?results=${n}`).then(response => response.json())
};
