import { StaticImageData } from 'next/image';
import Button from '../Button';
import Link from 'next/link';
import AnimatedText from '../AnimatedText';

export type ProgramProps = {
  id: number;
  title: string;
  desc: string;
  btn: string;
  bg: string | StaticImageData;
  path: string;
};
const ProgramHero = ({ content }: { content: ProgramProps }) => {
  return (
    <section
      className={`relative ${content.bg} pt-[120px] h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat`}
    >
      <div className=" w-full max-w-[1440px] mx-auto flex flex-col gap-6 md:gap-[46px] justify-center items-center py-[140px]   ">
        <h1 className="text-[white] text-center font-raleway text-[26px] md:text-[72px] font-bold leading-normal ">
          <AnimatedText text={content.title} hero />
        </h1>
        <p
          className={`text-[white] text-center font-raleway text-lg leading-[2]   w-full ${
            content.id === 1 ? 'max-w-[476px]' : 'max-w-[728px]'
          } px-2 md:px-0`}
        >
          {content.desc}
        </p>
        <Link href={content.path} className="">
          <Button text={content.btn} />
        </Link>
      </div>
    </section>
  );
};

export default ProgramHero;
