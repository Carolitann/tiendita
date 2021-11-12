import { useState } from "react";

const ClickableComponent = () => {
  const [count, setCount] = useState (0);
  const [timestamp, setTimesTamps] = useState (new Date());


  function updateCount () {
    setCount(count + 1);
    setTimesTamps(new Date());
  }

  function downdateCount () {
    setCount(count - 1);
    setTimesTamps(new Date());
  }

  return (
    <div>
      <span >Clicks: {count}. Ultimo click: {timestamp.toString()}</span>
      <button type='button' onClick={updateCount}>Increment Count</button>
      <button type='button' onClick={downdateCount}>decrease Count</button>

    </div>
  )
}

export default ClickableComponent;