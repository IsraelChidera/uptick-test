import AnimatedText from '@/components/AnimatedText';
import { Story } from '../AboutHero';
import { VALUES } from './constants';
import AnimatedCardList from '@/components/AnimatedCard';
const AboutValues = () => {
  return (
    <div className="bg-upLightBlue px-3 py-20 lg:px-32 font-raleway">
      <Story />
      <div className="flex flex-col gap-6 items-center justify-center text-center mb-[3rem] mt-[60px] md:mt-[131px]">
        <h2 className="text-4xl lg:text-6xl font-medium">
          <AnimatedText text="Our Values" />
        </h2>
        <p className="text-xl leading-[160%]">
          Our core values are the driving force behind everything we do
        </p>
      </div>
      <AnimatedCardList reasons={VALUES} />
    </div>
  );
};

export default AboutValues;
