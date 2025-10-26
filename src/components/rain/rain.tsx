import { useMemo } from "react";
import "./rain.css";

const NUM_DROPS = 50;

function generateDrops() {
  return Array.from({ length: NUM_DROPS }, (_, i) => ({
    id: i,
    isThunder: i === NUM_DROPS - 1,
    left: Math.floor(Math.random() * window.innerWidth),
    duration: 0.2 + Math.random() * 0.4,
    delay: Math.random() * 5,
  }));
}

export default function Rain() {
  const drops = useMemo(() => generateDrops(), []);

  return (
    <div className="rain-container" aria-hidden="true">
      {drops.map((drop) =>
        drop.isThunder ? (
          <div key={drop.id} className="thunder"></div>
        ) : (
          <div
            key={drop.id}
            className="raindrop"
            style={{
              left: `${drop.left}px`,
              animationDuration: `${drop.duration}s`,
              animationDelay: `${drop.delay}s`,
            }}
          ></div>
        )
      )}
    </div>
  );
}
