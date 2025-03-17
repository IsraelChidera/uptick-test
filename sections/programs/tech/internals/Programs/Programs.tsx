import { TechCard } from '@/components/Cards/TechCard';
import { Line } from '@/components/Line/Line';
import { _programLinks, programs } from './constants';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal';

export const Programs = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <section className="bg-[#111] waves-bg relative" id="programs">
      <div className="py-[20px] md:py-[88px] w-full max-w-[1440px] mx-auto px-3 xl:px-[60px] md:px-10 flex flex-col justify-center items-center gap-3  z-[2]">
        {programs.map((program, i) => (
          <TechCard
            key={program.id}
            programId={program.id}
            image={program.image}
            title={program.title}
            profession={program.profession}
            desc={program.desc}
            desc2={program.desc2}
            tracks={program.tracks}
            btnText={program.btnText}
            reverse={i % 2 !== 0}
            setShowModal={setShowModal}
            link={_programLinks[program.identifier]}
          />
        ))}
        {showModal && (
          <Modal
            isOpen={showModal}
            message={
              'Application is currently closed. \nPlease check back later'
            }
            onClose={setShowModal}
          />
        )}
      </div>
      <Line />
    </section>
  );
};
