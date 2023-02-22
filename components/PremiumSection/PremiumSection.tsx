import Image from 'next/image';
import React from 'react';

function PremiumSection() {
  return (
    <section className="max-w-6xl mx-auto p-4 pt-16 flex flex-col gap-12 ">
      <h2 className="text-center font-bold text-4xl">
        Why upgrade to Premium?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 place-items-center gap-6 ">
        <article className="p-6 rounded-full  flex items-center justify-center flex-col gap-4">
          <div className="p-6 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-neutral-600 via-neutral-800 to-neutral-900 rounded-full min-w-[10rem] min-h-[10rem] max-w-[40rem] max-h-[40rem] w-full h-full flex items-center justify-center">
            <Image
              src="/icons/premium-icon1.svg"
              width={180}
              height={180}
              alt=""
            />
          </div>
          <h6 className="font-semibold text-xl">Downloading music</h6>
          <p className="-mt-2">Listen wherever you are.</p>
        </article>{' '}
        <article className="p-6 rounded-full  flex items-center justify-center flex-col gap-4">
          <div className="p-6 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-neutral-300 via-neutral-800 to-neutral-900 rounded-full min-w-[13rem] min-h-[13rem] max-w-[40rem] max-h-[40rem]  flex items-center justify-center">
            <Image
              src="/icons/premium-icon2.svg"
              width={180}
              height={180}
              alt=""
            />
          </div>
          <h6 className="font-semibold text-xl">Ad-free music</h6>
          <p className="-mt-2">Enjoy uninterrupted music</p>
        </article>{' '}
        <article className="p-6  rounded-full flex items-center justify-center flex-col gap-4">
          <div className="p-6 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-neutral-300 via-neutral-800 to-neutral-900 rounded-full min-w-[10rem] min-h-[10rem] max-w-[40rem] max-h-[40rem]  flex items-center justify-center">
            <Image
              src="/icons/premium-icon3.svg"
              width={105}
              height={105}
              alt=""
            />
          </div>
          <h6 className="font-semibold text-xl">Play any songs</h6>
          <p className="-mt-2">Even on the phone.</p>
        </article>
        <article className="p-6 rounded-full  flex items-center justify-center flex-col gap-4">
          <div className="p-6 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-neutral-300 via-neutral-800 to-neutral-900 to-neutral-900g-gray-500 rounded-full min-w-[10rem] min-h-[10rem] max-w-[40rem] max-h-[40rem]  flex items-center justify-center">
            <Image
              src="/icons/premium-icon.svg"
              width={180}
              height={180}
              alt=""
            />
          </div>
          <h6 className="font-semibold text-xl">
            Unlimited skipping
          </h6>
          <p className="-mt-2">Just hit Next.</p>
        </article>
      </div>
    </section>
  );
}

export default PremiumSection;
