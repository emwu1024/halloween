import { useMemo, useState } from "react";
import "./rain.css";

const DEFAULT_DROPS = 50;
const MOBILE_DROPS = 20;

function generateDrops(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    isThunder: i === count - 1,
    left: Math.floor(Math.random() * window.innerWidth),
    duration: 0.2 + Math.random() * 0.4,
    delay: Math.random() * 5,
  }));
}

export default function Rain() {
  const [mobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 500 : false
  );

  const dropCount = mobile ? MOBILE_DROPS : DEFAULT_DROPS;
  const drops = useMemo(() => generateDrops(dropCount), [dropCount]);

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
