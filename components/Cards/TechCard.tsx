'use client';
import Image, { StaticImageData } from 'next/image';
import Button from '../Button';
import Link from 'next/link';
import { UUID } from 'crypto';
import { SetStateAction } from 'react';
import AnimatedText from '../AnimatedText';

type Track = {
  id: number;
  track: string;
};

interface TechCardProps {
  programId: number | UUID | string;
  image: string | StaticImageData;
  title: string;
  profession?: string;
  desc: string;
  desc2?: string;
  tracks?: Track[];
  btnText: string;
  reverse: boolean;
  normal?: boolean;
  showModal?: boolean;
  setShowModal?: React.Dispatch<SetStateAction<boolean>>;
  link?: string;
}

export const TechCard = ({
  image,
  title,
  profession,
  desc,
  desc2,
  tracks,
  btnText,
  reverse,
  normal,
  link,
}: TechCardProps) => {
  // const [showModal, setShowModal] = useState(false);
  // const pathname = usePathname();
  // const path = pathname.split('/')[2];
  // const { isLoading, data } = useQuery({
  //   queryKey: [programId, path],
  //   queryFn: async () => {
  //     const result = await getData(`programs/${programId}`);

  //     return result;
  //   },
  // });

  return (
    <div
      className={`w-full flex flex-col lg:${
        reverse ? 'flex-row-reverse' : 'flex-row'
      } justify-between items-center gap-4 py-[50px] px-3 font-raleway z-[2]`}
    >
      <Image src={image} alt="beginner" className="w-full lg:max-w-[586px]" />
      <div className="flex flex-col gap-[16px] md:gap-[24px] w-full lg:max-w-[586px]">
        <h1
          className={`text-[#fff]  text-3xl md:text-[48px] leading-normal  font-${
            normal ? 'normal' : 'bold'
          } ${title === 'Software Engineering' ? 'lg:w-[278px]' : 'w-full'}`}
        >
          <AnimatedText text={title} />
        </h1>
        <h1 className="text-[#fff] text-2xl  font-medium w-full max-w-[350px]">
          {profession}
        </h1>
        <p className="text-[#fff]  text-lg pr-2">{desc}</p>
        <div
          className={`flex gap-3 flex-wrap ${
            title === 'Non-Technical Programs'
              ? 'w-full max-w-[545px]'
              : title === 'Design' || title === 'AI & Data'
                ? 'w-full max-w-[440px]'
                : 'w-full max-w-[270px]'
          }`}
        >
          {tracks?.map((track) => (
            <div
              className={`flex items-center justify-center px-5 py-[18px] font-raleway  bg-white text-[#2F2F2F] font-semibold tracking-[1.25px] leading-[100%] rounded-lg `}
              key={track.id}
            >
              {track.track}
            </div>
          ))}
        </div>
        <p className="text-[#fff]  text-lg pr-2"> {desc2}</p>
        <div className="relative">
          <Link href={link ?? '/'}>
            <Button text={btnText} />
          </Link>
          {/* {isLoading ? (
            <Button text="Loading ..." isLoading={isLoading} />
          ) : path === 'tech' && data?.status === 'open' ? (
            <Link href={`${path}/${programId}`} target="_blank">
              <Button text={btnText} />
            </Link>
          ) : path === 'business' || path === 'map' ? (
            <Link href={`${path}/form`}>
              <Button text={btnText} />
            </Link>
          ) : (
            <>
              <Button
                text={btnText}
                onClick={() => setShowModal!((prev) => !prev)}
              />
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};
