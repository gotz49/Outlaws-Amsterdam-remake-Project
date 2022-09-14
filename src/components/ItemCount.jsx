import { useEffect, useState } from "react";

const ItemCount = ({ stock = 0, initial = 0, onAdd }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="quantity">
        <button onClick={decrement}> - </button>
        <span>{count}</span>
        <button onClick={increment}> + </button>
      </div>

      <div className="buttonContainer">
        {stock && count ? (
          <button onClick={() => onAdd(count)} className="addBtn">
            Add to Cart
          </button>
        ) : (
          <button disabled className="addBtnDis">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
