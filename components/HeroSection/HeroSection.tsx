import React from 'react';
import MainSong from './MainSong';
import PlaylistItems from './PlaylistItems';
import { PlayCircle, ArrowDown } from 'react-feather';

function HeroSection() {
  const [isHovered, setIsHOvered] = React.useState(false);
  return (
    <section className="max-w-7xl mx-auto flex gap-12 px-4 pt-16">
      <MainSong />
      <div className="flex flex-col justify-between">
        <div className="max-w-[28rem] mt-8">
          <h1 className="font-bold text-6xl">
            Play Your Beloved Music
          </h1>
          <p className="mt-4 text-gray-200 text-lg">
            Selected music from various genres, artists, and
            composers. Play now, completely free and convenient.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <button
            onMouseEnter={() => setIsHOvered(true)}
            onMouseLeave={() => setIsHOvered(false)}
            className="border border-primary rounded-2xl flex items-center gap-2 justify-center py-4 px-8"
          >
            <span>Show The Plans</span>
            <ArrowDown
              className={`${
                isHovered && 'motion-safe:animate-bounce'
              } mb-1`}
            />
          </button>
          <PlayCircle
            size={84}
            strokeWidth="1px"
            className="self-end text-primary shadow-lg"
          />
        </div>
        <PlaylistItems />
      </div>
    </section>
  );
}

export default HeroSection;
