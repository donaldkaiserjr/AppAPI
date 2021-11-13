import React from "react";
import VanillaTilt from "react-vanilla-tilt";

export default function Tilt({ children }) {
  const tiltRef = React.useRef();

  React.useEffect(() => {
    const tiltNode = tiltRef.current;
    const vanillaTiltOptions = {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5
    };
    VanillaTilt.init(tiltNode, vanillaTiltOptions);
    return () => {
      tiltNode.vanillaTilt.destroy(); // this is a cleanup function to destroy all references of the
      // dom node in Vanilla Tilt and remove all the event listeners that Vanilla tilt put on the dom node
    };
  }, []);

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  );
}

function App() {
  const [showTilt, setShowTilt] = React.useState(true);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showTilt}
          onChange={(e) => setShowTilt(e.target.checked)}
        />{" "}
        show tilt
      </label>
      {showTilt ? (
        <Tilt>
          <div className="totally-centered">vanilla-tilt.js</div>
        </Tilt>
      ) : null}
    </div>
  );
}
