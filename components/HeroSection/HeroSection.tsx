import React from 'react';
import MainSong from './MainSong';
import PlaylistItems from './PlaylistItems';
import { PlayCircle } from 'react-feather';

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto flex gap-12 px-4 pt-16">
      <MainSong />
      <div className="flex flex-col justify-between">
        <div className="max-w-[28rem] mt-8">
          <h1 className="font-bold text-6xl">
            Play Your Beloved Music
          </h1>
          <p className="mt-4 text-gray-200">
            Selected music from various genres, artists, and
            composers. Play now, completely free and convenient.
          </p>
        </div>
        <PlayCircle
          size={84}
          strokeWidth="1px"
          className="self-end text-primary shadow-lg"
        />
        <PlaylistItems />
      </div>
    </section>
  );
}

export default HeroSection;
