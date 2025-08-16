import React from 'react';

export const PaperAirplaneIcon = React.memo(({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.949a.75.75 0 00.95.826L11.25 9.25l-6.507-1.299a.75.75 0 00-.95.826l1.414 4.949a.75.75 0 00.95.826l3.292-1.098a.75.75 0 00.354-1.033L9.25 10l2.409-2.676a.75.75 0 00-.354-1.033L8.003 5.023a.75.75 0 00-.95.826L8.467 9.25l-5.362-3.064a.75.75 0 00-.826-.95z" />
    <path d="M12.25 9.25a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z" />
  </svg>
));