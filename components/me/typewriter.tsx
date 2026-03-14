'use client';

import { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export default function Typewriter({
  text,
  speed = 80,
  delay = 2000,
  className = '',
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout =
      index < text.length
        ? setTimeout(() => {
            setDisplayed(text.slice(0, index + 1));
            setIndex(index + 1);
          }, speed)
        : setTimeout(() => {
            setDisplayed('');
            setIndex(0);
          }, delay);

    return () => clearTimeout(timeout);
  }, [delay, index, speed, text]);

  return (
    <span className={className} aria-live="polite">
      {displayed}
      <span className="animate-pulse" aria-hidden="true">
        |
      </span>
    </span>
  );
}
