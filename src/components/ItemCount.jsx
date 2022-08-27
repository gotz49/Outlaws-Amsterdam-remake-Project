import { useEffect, useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
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
        <button onClick={increment}> + </button>
        <span>{count}</span>
        <button onClick={decrement}> - </button>
      </div>

      <div className="buttonContainer">
        <button onClick={() => onAdd(count)} className="addButton">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
