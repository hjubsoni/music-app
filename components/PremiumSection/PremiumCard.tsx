import React from 'react';
import Image from 'next/image';
import { type ImageProps } from 'next/image';

interface delegateProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  children: React.ReactNode;
}

function PremiumCard({ children, ...delegated }: delegateProps) {
  return (
    <article className="p-6 rounded-full  flex items-center justify-center  gap-8 sm:flex-col">
      <Image {...delegated} />

      <div className="flex flex-col gap-4 items-center justify-center">
        {children}
      </div>
    </article>
  );
}

export default PremiumCard;
