import React from 'react';
import MainSong from './MainSong';
import PlaylistItems from './PlaylistItems';
import { PlayCircle, ArrowDown } from 'react-feather';

function HeroSection() {
  const [isHovered, setIsHOvered] = React.useState(false);
  return (
    <section className="pt-16 px-4 flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
      <MainSong />
      <div className="flex flex-col justify-between">
        <div className="mt-8 flex flex-col gap-4">
          <h1 className="font-bold text-4xl lg:text-6xl">
            Play Your Beloved Music
          </h1>
          <p className=" text-gray-200 text-lg">
            Selected music from various genres, artists, and
            composers. Play now, completely free and convenient.
          </p>
        </div>
        <div className="flex justify-between items-center">
          <button
            onMouseEnter={() => setIsHOvered(true)}
            onMouseLeave={() => setIsHOvered(false)}
            className="border hover:scale-105 border-primary rounded-2xl flex items-center gap-2 justify-center py-4 px-8"
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
