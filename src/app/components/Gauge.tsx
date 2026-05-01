"use client";

interface GaugeProps {
  value: number;
  color?: string;
  showLabels?: boolean;
  min?: string;
  max?: string;
}

export default function Gauge({ value, color = "#ef4d23", showLabels, min, max }: GaugeProps) {
  const totalTicks = 40;
  const activeTicks = Math.round((value / 100) * totalTicks);
  const centerX = 100;
  const centerY = 100;
  const outerR = 80;
  const innerR = outerR - 10;

  const ticks: Array<{ x1: number; y1: number; x2: number; y2: number; active: boolean }> = [];

  for (let i = 0; i < totalTicks; i++) {
    const startAngle = Math.PI;
    const endAngle = 2 * Math.PI;
    const angleStep = (endAngle - startAngle) / (totalTicks - 1);
    const angle = startAngle + i * angleStep;

    const x1 = centerX + innerR * Math.cos(angle);
    const y1 = centerY + innerR * Math.sin(angle);
    const x2 = centerX + outerR * Math.cos(angle);
    const y2 = centerY + outerR * Math.sin(angle);

    ticks.push({ x1, y1, x2, y2, active: i < activeTicks });
  }

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 200 120"
        className="max-w-[260px] w-full"
        style={{ overflow: "visible" }}
      >
        {ticks.map((tick, i) => (
          <line
            key={i}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke={tick.active ? color : "#d4d4d8"}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        ))}
        <text
          x={centerX}
          y={105}
          textAnchor="middle"
          fontSize={22}
          fontWeight={600}
          fill="#0b0f1a"
          fontFamily="Inter, sans-serif"
        >
          {value}%
        </text>
      </svg>
      {showLabels && min && max && (
        <div className="flex justify-between w-full max-w-[260px] text-[11px] text-neutral-500 px-1 -mt-1">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}
