import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const GSAPref = () => {
  const [duration, setDuration] = useState(2);
  const square1 = useRef();

  const move = () => {
    const anim = gsap.to(square1.current, {
      duration: duration,
      x: 300,
      ease: "bounce.out",
      onComplete: () => anim.reverse(),
    });
  };

  useEffect(() => {
    const anim = gsap.to(square1.current, {
      duration: duration,
      x: 300,
      ease: "bounce.out",
      onComplete: () => anim.reverse(),
    });
  }, [duration]);

  const slider = (event) => setDuration(parseInt(event.target.value));

  return (
    <section>
      <hr />
      <h2>GSAP in react con useRef</h2>

      <input
        type="number"
        min="1"
        max="10"
        step="1"
        value={duration}
        onChange={slider}
      />
      <button onClick={move}>Move</button>
      <div className="square2" ref={square1}></div>
    </section>
  );
};

export { GSAPref };
