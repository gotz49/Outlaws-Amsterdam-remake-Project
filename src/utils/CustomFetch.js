
const CustomFetch = (task) => {
  return new Promise(resolve=> {
    setTimeout(() => {
      resolve(task)
    }, 450)
  });
};
export default CustomFetch;
