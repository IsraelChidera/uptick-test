import React from 'react';
import { HeadText, reasons } from './constants';
import Header from '@/components/Header';
import AnimatedCardList from '@/components/AnimatedCard';

export const Why = () => {
  return (
    <section className=" bg-[#EDF2FF] py-[50px]" id="why">
      <div
        id="why"
        className="w-full flex flex-col justify-center items-center gap-[48px]  px-3 xl:px-[60px] md:px-10 max-w-[1440px] mx-auto"
      >
        <Header title={HeadText} color="#000" />
        <AnimatedCardList reasons={reasons} />
      </div>
    </section>
  );
};
