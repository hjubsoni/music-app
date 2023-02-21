import Image from 'next/image';
import React from 'react';
import {
  Repeat,
  SkipBack,
  Play,
  SkipForward,
  Volume1,
  Circle,
} from 'react-feather';

function MainSong() {
  return (
    <article className="flex flex-col  shadow-lg border border-gray-500 rounded-2xl p-4 gap-4 max-w-[880px] md:max-w-[400px]">
      <Image
        src="/images/album-img.jpg"
        alt="h"
        width={880}
        height={880}
        className="rounded-2xl"
        priority={true}
      />
      <div>
        <h4 className="text-2xl font-bold">Lata Dwudzieste</h4>
        <p className="">Dawid Podsiadło</p>
      </div>
      <div className="flex justify-between items-center">
        <Repeat className="text-slate-300" />
        <SkipBack className="text-slate-300" />
        <Play size={32} fill="white" color="white" />
        <SkipForward className="text-slate-300" />
        <Volume1 className="text-slate-300" />
      </div>
      <div className="flex items-baseline gap-2">
        <span>02:10</span>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 relative">
          <div
            className="bg-primary h-1.5 rounded-full "
            style={{ width: '60%' }}
          ></div>
          <Circle
            style={{
              position: 'absolute',
              left: '60%',
              transform: 'translate(-60%, -60%)',
            }}
            fill="black"
            size={20}
          />
        </div>
        <span>03:45</span>
      </div>
    </article>
  );
}

export default MainSong;
