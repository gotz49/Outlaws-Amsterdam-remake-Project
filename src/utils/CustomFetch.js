
const CustomFetch = (task) => {
  return new Promise(resolve=> {
    setTimeout(() => {
      resolve(task)
    }, 650)
  });
};
export default CustomFetch;
