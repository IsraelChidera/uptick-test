import React from 'react';
import { HeadText, offers } from './constants';
import Image from 'next/image';
import { WAVES } from '@/public';
import AnimatedText from '@/components/AnimatedText';
import AnimatedCardList from '@/components/AnimatedCard';

export const Offer = () => {
  return (
    <section className="bg-[#111]  ">
      <div className="py-[72px] w-full max-w-[1440px] mx-auto px-3 xl:px-[60px] md:px-10 relative">
        <h1 className="font-raleway text-white text-[36px] md:text-[42px] mb-[45px]">
          <AnimatedText text={HeadText} />
        </h1>
        <AnimatedCardList reasons={offers} list alt />
        <Image
          src={WAVES}
          alt="wavs"
          className="absolute right-0 -top-[100px] overflow-hidden overflow-y-clip"
        />
      </div>
    </section>
  );
};
