import React from 'react';
import { X } from 'react-feather';
import { RemoveScroll } from 'react-remove-scroll';
import FocusLock from 'react-focus-lock';

function MenuNav({
  handleDismiss,
  children,
}: {
  handleDismiss: () => void;
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        handleDismiss();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleDismiss]);
  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div
          className="fixed inset-0 p-4 z-10"
          onClick={handleDismiss}
        >
          <div className="absolute inset-0 backdrop-blur-sm bg-text bg-opacity-10 animate-fadeIn" />
          <div className="absolute top-0 right-0 bottom-0 w-[65%] bg-background p-6 animate-slideIn">
            <div className="absolute top-24">{children}</div>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default MenuNav;
