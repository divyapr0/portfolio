import React, { useEffect, useState } from 'react';

interface ShutterTransitionProps {
  isActive: boolean;
  label: string;
  onMidpoint: () => void;
  onComplete: () => void;
}

export const ShutterTransition: React.FC<ShutterTransitionProps> = ({
  isActive,
  label,
  onMidpoint,
  onComplete,
}) => {
  const [phase, setPhase] = useState<'idle' | 'covering' | 'uncovering'>('idle');
  const columnsCount = 12;

  useEffect(() => {
    if (isActive) {
      setPhase('covering');

      const midpointTimer = setTimeout(() => {
        onMidpoint();
        setPhase('uncovering');
      }, 450);

      const completeTimer = setTimeout(() => {
        setPhase('idle');
        onComplete();
      }, 950);

      return () => {
        clearTimeout(midpointTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isActive]);

  if (phase === 'idle') return null;

  return (
    <div className="shutter-overlay active">
      {Array.from({ length: columnsCount }).map((_, i) => {
        const delay = phase === 'covering' ? `${i * 0.03}s` : `${(columnsCount - 1 - i) * 0.025}s`;
        const origin = phase === 'covering' ? 'top' : 'bottom';
        return (
          <div
            key={i}
            className="shutter-column"
            style={{
              transitionDelay: delay,
              transformOrigin: origin,
              transform: phase === 'covering' ? 'scaleY(1)' : 'scaleY(0)',
            }}
          />
        );
      })}

      <div
        className="shutter-center-label"
        style={{
          opacity: phase === 'covering' ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      >
        {label}
        <span className="amber-dot">.</span>
      </div>
    </div>
  );
};
