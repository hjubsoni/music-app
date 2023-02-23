import Image from 'next/image';
import React from 'react';
import PremiumCard from './PremiumCard';

function PremiumSection() {
  return (
    <section className="max-w-6xl mx-auto p-4 pt-16 flex flex-col gap-8 ">
      <h2 className="text-center font-bold text-4xl">
        Why upgrade to Premium?
      </h2>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2  lg:grid-cols-4 justify-center items-baseline lg:gap-4 ">
        <PremiumCard
          src="/icons/premium-icon1.svg"
          alt="h"
          width={150}
          height={150}
        >
          <h6 className="font-semibold text-xl text-center">
            Downloading music
          </h6>
          <p className="-mt-2 text-center">
            Listen wherever you are.
          </p>
        </PremiumCard>{' '}
        <PremiumCard
          src="/icons/premium-icon3.svg"
          alt="h"
          width={150}
          height={110}
        >
          <h6 className="font-semibold text-xl text-center">
            Ad-free music
          </h6>
          <p className="-mt-2 text-center">
            Enjoy uninterrupted music
          </p>
        </PremiumCard>{' '}
        <PremiumCard
          src="/icons/premium-icon.svg"
          alt="h"
          width={150}
          height={150}
        >
          <h6 className="font-semibold text-xl text-center">
            Play any songs
          </h6>
          <p className="-mt-2 text-center">Even on the phone.</p>
        </PremiumCard>
        <PremiumCard
          src="/icons/premium-icon2.svg"
          alt="h"
          width={150}
          height={150}
        >
          <h6 className="font-semibold text-xl text-center">
            Unlimited skipping
          </h6>
          <p className="-mt-2 text-center">Just hit Next.</p>
        </PremiumCard>
      </div>
    </section>
  );
}

export default PremiumSection;
