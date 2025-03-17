import React from 'react';
import { HeadText, reasons } from './constants';
import AnimatedCardList from '@/components/AnimatedCard';
import AnimatedText from '@/components/AnimatedText';

export const Why = () => {
  return (
    <section className="bg-[#EDF2FF]">
      <div className="py-[58px] w-full max-w-[1440px] mx-auto px-3 xl:px-[60px] md:px-10">
        <h1 className="font-raleway text-[#000] text-[36px] mb:text-[42px] mb-[45px] font-bold">
          <AnimatedText text={HeadText} />
        </h1>
        <AnimatedCardList reasons={reasons} list />
      </div>
    </section>
  );
};
