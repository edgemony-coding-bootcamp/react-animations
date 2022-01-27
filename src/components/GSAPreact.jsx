import { useState } from "react";
import { Controls, PlayState, Tween } from "react-gsap";

const GSAPreact = () => {
  const [pState, setPState] = useState(PlayState.stop);

  const move = () => setPState(PlayState.play);

  return (
    <section>
      <h2>GSAP con React</h2>
      <h3>Con componente Controls</h3>
      <Controls playState={PlayState.stop}>
        <Tween
          to={{ x: "200px", rotation: 180 }}
          duration={2}
          ease="back.out(1.7)"
        >
          <div className="square2" />
        </Tween>
      </Controls>

      <h3>Fatto a "manina"</h3>

      <Tween
        to={{ x: "200px", rotation: 180 }}
        duration={2}
        ease="back.out(1.7)"
        playState={pState}
      >
        <div className="square2" />
      </Tween>

      <button onClick={move}>Muovi</button>
    </section>
  );
};

export { GSAPreact };
