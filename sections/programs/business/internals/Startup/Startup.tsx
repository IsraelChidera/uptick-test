import React from 'react';
import { HeadText, SubText, SubText2 } from './constants';
import { PARTNERS_BUSINESS } from '@/public';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';

export const Startup = () => {
  return (
    <section className="bg-[#E6E6E6]">
      <div className="w-full max-w-[1350px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 py-10 md:py-[60px] px-3 md:px-6 lg:px-3 font-raleway">
        <Image
          src={PARTNERS_BUSINESS}
          alt="partners"
          className="w-full lg:max-w-[586px]"
        />
        <div className="flex flex-col gap-[16px] md:gap-[30px] w-full lg:max-w-[586px]">
          <h1 className="text-[#000]  text-[32px] md:text-[48px] font-bold">
            <AnimatedText text={HeadText} />
          </h1>

          <p className="text-[#000]  text-lg">{SubText}</p>
          <p className="text-[#000] text-lg"> {SubText2}</p>
        </div>
      </div>
    </section>
  );
};
