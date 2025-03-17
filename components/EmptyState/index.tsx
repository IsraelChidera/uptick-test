'use client';

import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { NOTE_ICON } from '@/public';

interface EmptyStateUIProps {
  message: string;
}

export const EmptyStateUI = ({ message }: EmptyStateUIProps) => {
  return (
    <section
      className={clsx(
        'mx-auto mt-[150px] flex w-fit flex-col items-center justify-center gap-6',
      )}
    >
      <div className="rounded-full p-6 bg-gray-200">
        <Image src={NOTE_ICON} alt="Note Icon" />
      </div>
      <p className="max-w-[320px] font-normal text-center">{message}</p>
    </section>
  );
};
