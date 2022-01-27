import { useState } from "react";

const ComputedStyles = () => {
  const [hasMoved, setMoved] = useState(false);
  const [margin, setMargin] = useState(0);

  const move = () => setMoved(!hasMoved);
  const moving = (hasMoved) => (hasMoved ? "square move" : "square");

  const onSlide = (event) => {
    console.log(event.target.value);
    setMargin(parseInt(event.target.value));
  };

  return (
    <section>
      <hr />
      <h2>Computed styles</h2>

      <h3>Change class</h3>
      <button onClick={move}>Move square</button>
      <div className={moving(hasMoved)}></div>

      <h3>Change inline style</h3>
      <input type="range" min="0" max="200" step="1" onChange={onSlide} />
      <div style={{ marginLeft: margin + "px" }} className="square"></div>
    </section>
  );
};

// CSS  -> margin-left    (kebab case)
// JS   -> marginLeft     (camel case)

export { ComputedStyles };
