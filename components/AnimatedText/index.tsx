import React, { ReactNode, useRef } from 'react';
import { motion, Variants, useInView } from 'framer-motion';

interface AnimatedTextProps {
  el?: keyof JSX.IntrinsicElements;
  once?: boolean;
  text: string;
  className?: string;
  extras?: ReactNode;
  hero?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  el: Wrapper = 'p',
  className,
  text,
  extras,
  once = true,
  hero,
}) => {
  const animationVaraints: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const elementRef = useRef(null);

  const isInView = useInView(elementRef, { amount: 0.5, once });

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: hero ? 0.1 : 0.02 }}
        ref={elementRef}
      >
        {text.split('').map((char: string, index: number) => {
          return (
            <motion.span
              aria-hidden
              key={`${index}-${char}`}
              variants={animationVaraints}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.span>
      {extras}
    </Wrapper>
  );
};

export default AnimatedText;
