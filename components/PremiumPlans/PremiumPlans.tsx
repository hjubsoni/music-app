import React from 'react';
import Plan from './Plan';
import { Check } from 'react-feather';

function PremiumPlans() {
  return (
    <section className="max-w-6xl mx-auto p-4 pt-16 flex flex-col gap-8 ">
      <div>
        <h2 className="flex items-center justify-center gap-4 text-4xl font-bold text-center before:content-[''] before:inline-block before:w-[8rem] before:h-[0.25px] before:bg-gray-400  after:content-[''] after:inline-block after:w-[8rem] after:h-[0.25px] after:bg-gray-400 ">
          Choose Premium for yourself
        </h2>
        <p className="text-center mt-2">
          Listen without limits on your phone, speaker, and other
          devices.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Plan
          variant="Individual"
          price="19.99"
          ammountOfAccounts="1"
        >
          <li className="flex gap-2  mb-2 ">
            <div>
              <Check className="text-green-500 " />
            </div>
            <span className="mr-2">Listen to ad-free music</span>
          </li>
          <li className="flex gap-2  mb-2 ">
            <div>
              <Check className="text-green-500 " />
            </div>
            <span className="mr-2">
              Play wherever you want - also in offline mode
            </span>
          </li>
          <li className="flex gap-2  mb-2 ">
            <div>
              <Check className="text-green-500 " />
            </div>
            <span className="mr-2">
              Play wherever you want - also in offline mode
            </span>
          </li>
          <li className="flex gap-2  mb-2 ">
            <div>
              <Check className="text-green-500 " />
            </div>
            <span className="mr-2">On-demand playback</span>
          </li>
        </Plan>
        <Plan variant="Family" price="29.99" ammountOfAccounts="6">
          <li className="flex gap-2  mb-2 ">
            <div>
              <Check className="text-green-500 " />
            </div>

            <span className="mr-2">
              6 premium accounts for family members living at the same
              address
            </span>
          </li>
          <li className="flex gap-2  mb-2 ">
            <div>
              <Check className="text-green-500 " />
            </div>
            <span className="mr-2">Blocking indecent content</span>
          </li>
          <li className="flex gap-2  mb-2 ">
            <div>
              <Check className="text-green-500 " />
            </div>
            <span className="mr-2">
              Ad-free music, offline mode, play on demand
            </span>
          </li>
        </Plan>
        <Plan variant="Student" price="9.99" ammountOfAccounts="1">
          <li className="flex gap-2  mb-2 ">
            <div>
              <Check className="text-green-500 " />
            </div>
            <span className="mr-2">
              Special discount for students of approved universities
            </span>
          </li>
          <li className="flex gap-2  mb-2  ">
            <div>
              <Check className="text-green-500 " />
            </div>
            <span className="mr-2">Listen to ad-free music</span>
          </li>
          <li className="flex gap-2  mb-2 ">
            <div>
              <Check className="text-green-500 " />
            </div>
            <span className="mr-2">
              Play wherever you want - also in offline mode
            </span>
          </li>
          <li className="flex gap-2  mb-2 ">
            <div>
              <Check className="text-green-500 " />
            </div>
            <span className="mr-2">On-demand playback</span>
          </li>
        </Plan>
      </div>
    </section>
  );
}

export default PremiumPlans;
