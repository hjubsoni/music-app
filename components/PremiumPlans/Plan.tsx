import React from 'react';

interface PlanProps {
  variant: 'Individual' | 'Family' | 'Student';
  price: string;
  ammountOfAccounts: string;
  children: React.ReactNode;
}

function Plan({
  variant,
  price,
  ammountOfAccounts,
  children,
}: PlanProps) {
  return (
    <article className="bg-text text-background p-6 flex flex-col gap- rounded-lg gap-4 shadow-inner">
      <h3 className="font-semibold text-3xl text-center">
        {variant}
      </h3>
      <div className="flex flex-col gap-1 items-center">
        <span>PLN {price}/month</span>
        <span>
          {variant === 'Family'
            ? `Up to ${ammountOfAccounts} accounts`
            : `${ammountOfAccounts} accounts`}
        </span>
      </div>
      <button className="bg-primary rounded-lg text-text p-2 shadow-xl hover:scale-105 transition-all text-semibold text-xl">
        Start
      </button>
      <ul className="">{children}</ul>
    </article>
  );
}

export default Plan;
