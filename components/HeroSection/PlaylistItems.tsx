import Image from 'next/image';
import React from 'react';

function PlaylistItems() {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="font-bold text-lg">Choose Playlist</h4>
      <div className="flex gap-4">
        <figure className="bg-gray-800 p-3 rounded-xl">
          <Image
            src="/images/80s-hits.jpg"
            alt=""
            width={240}
            height={220}
            className="rounded-2xl"
          />

          <figcaption className="text-center mt-2">
            80s Hits
          </figcaption>
        </figure>
        <figure className="bg-gray-800 p-3 rounded-xl">
          <Image
            src="/images/top-50.jpg"
            alt=""
            width={240}
            height={220}
            className="rounded-2xl"
          />
          <figcaption className="text-center mt-2">
            Top 50 Global
          </figcaption>
        </figure>
        <figure className="bg-gray-800 p-3 rounded-xl">
          <Image
            src="/images/breaking-bad.jpg"
            alt=""
            width={240}
            height={220}
            className="rounded-2xl"
          />
          <figcaption className="text-center mt-2">
            Breaking Bad
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default PlaylistItems;
