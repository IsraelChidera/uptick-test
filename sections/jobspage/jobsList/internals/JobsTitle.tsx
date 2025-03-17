'use client';
import AnimatedText from '@/components/AnimatedText';

const JobsTitle = () => {
  return (
    <div className="px-3 lg:ml-[100px] lg:mt-[62px]  ">
      <h1 className="font-raleway text-[32px] md:text-[48px] leading-normal  font-bold">
        <AnimatedText text="Featured Jobs" hero />
      </h1>
    </div>
  );
};

export default JobsTitle;
