
const CustomFetch = (task) => {
  return new Promise(resolve=> {
    setTimeout(() => {
      resolve(task)
    }, 500)
  });
};

export default CustomFetch;
