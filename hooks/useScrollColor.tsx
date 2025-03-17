import { useEffect, useState } from 'react';

interface UseScrollColorProps {
  initialColor: boolean; // Initial color state
}

const useScrollColor = ({ initialColor }: UseScrollColorProps) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY <= 0) {
        setColor(true);
      } else {
        setColor(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor, true);

    return () => {
      window.removeEventListener('scroll', changeColor, true);
    };
  }, []);

  return { color };
};

export default useScrollColor;
