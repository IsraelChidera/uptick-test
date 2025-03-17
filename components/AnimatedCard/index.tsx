import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface Reason {
  id: string | number;
  icon: string | StaticImageData;
  title: string;
  text: string;
}

interface AnimatedCardProps {
  reason: Reason;
  alt?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ reason, ...rest }) => {
  return (
    <div
      className="w-full md:w-[311px] md:h-[309px] flex flex-col gap-[15px] items-start p-[30px] border border-[#4D4D4D] rounded-2xl bg-[#1C1C1C] hover:shadow-lg transition-all"
      {...rest}
    >
      <Image src={reason.icon} alt={reason.title} />
      <h1 className="md:w-[232px] font-raleway  text-[24px] leading-[38.4px] text-[#DAE5FF] font-medium">
        {reason.title}
      </h1>
      <p className="md:w-[251px] font-raleway   leading-[160%] text-[#B3B3B3]">
        {reason.text}
      </p>
    </div>
  );
};
const AnimatedList: React.FC<AnimatedCardProps> = ({ reason, alt }) => {
  return (
    <div
      key={reason.id}
      className="my-10 w-full max-w-[784px] flex justify-between gap-3 md:gap-[54px]"
    >
      <div>
        <div className="w-[50px] h-[50px] md:w-[64px] md:h-[64px] rounded-full flex justify-center items-center border-[1px] bg-[#1C1C1C] border-[#828282]">
          <Image src={reason.icon} alt="right arrow" />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        <h1
          className={`${
            alt ? 'text-[#7EA3FF]' : 'text-[#111]'
          } !font-bold text-2xl leading-[38px]`}
        >
          {reason.title}
        </h1>
        <p
          className={`${
            alt ? 'text-[#fff]' : 'text-[#000]'
          } md:text-2xl md:leading-[38px]`}
        >
          {reason.text}
        </p>
      </div>
    </div>
  );
};

interface AnimatedCardListProps {
  reasons: Reason[];
  list?: boolean;
  alt?: boolean;
}

const AnimatedCardList: React.FC<AnimatedCardListProps> = ({
  reasons,
  list,
  alt,
}) => {
  const elementRef = useRef(null);

  const isInView = useInView(elementRef, { amount: 0.1, once: true });
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      className={
        !list
          ? 'w-full flex flex-col md:flex-row flex-wrap justify-around items-center gap-3 lg:gap-1'
          : ''
      }
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ staggerChildren: 0.09 }}
      ref={elementRef}
    >
      {reasons.map((reason) => (
        <motion.div key={reason.id} variants={cardVariants}>
          {list ? (
            <AnimatedList reason={reason} alt={alt} />
          ) : (
            <AnimatedCard reason={reason} />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedCardList;
