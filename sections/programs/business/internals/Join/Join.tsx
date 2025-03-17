import Button from '@/components/Button';
import React from 'react';
import { join } from './constants';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';

export const Join = () => {
  return (
    <section className="bg-[#FBFBFB]">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-6 py-[100px]">
        <h1 className="font-raleway text-[32px] font-bold text-black text-center md:text-[60px] leading-normal w-full max-w-[892px] px-3">
          <AnimatedText text={join.title} />
        </h1>
        <p className="w-full max-w-[892px] font-raleway text-black text-center text-lg leading-[160%] px-2">
          {join.desc}
        </p>
        <p className="w-full max-w-[892px] font-raleway text-black text-center text-lg leading-[160%] px-2">
          {join.desc2}
        </p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfjCaxN_EkxW7Epqo8cVaRWLjNL3JEEBrggxP1clFZrjBt0PQ/viewform?usp=sf_link"
          target="_blank"
        >
          <Button text={join.btnText} />
        </Link>
      </div>
    </section>
  );
};
