import React from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

interface UserNavProps {
  isUserNavOpen: boolean;
  setIsUserNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  profileBtnRef: React.RefObject<HTMLButtonElement>;
}

function UserNav({
  isUserNavOpen,
  setIsUserNavOpen,
  profileBtnRef,
}: UserNavProps) {
  const userNavRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileBtnRef.current?.contains(event.target as Node))
        return;
      if (
        userNavRef.current &&
        !userNavRef.current.contains(event.target as Node)
      ) {
        setIsUserNavOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserNavOpen, setIsUserNavOpen]);

  if (!isUserNavOpen) return null;
  return (
    <div
      className="bg-white absolute text-background p-4 top-10 w-full rounded-tl-xl rounded-bl-xl rounded-tr-[4px] rounded-br-xl "
      ref={userNavRef}
    >
      <div
        className="w-0 h-0 
   border-l-[12px] border-l-transparent
   border-b-[18px] border-b-white
   border-r-[12px] border-r-transparent
   absolute -top-4 right-1
   translate-x-[4px]
    "
      ></div>
      <nav className="flex flex-col gap-3 ">
        <li>
          <Link href="" className="transform-all hover:text-primary">
            Account
          </Link>
        </li>
        <li>
          <button
            onClick={() => signOut()}
            className="transform-all hover:text-primary"
          >
            Log Out
          </button>
        </li>
      </nav>
    </div>
  );
}

export default UserNav;
