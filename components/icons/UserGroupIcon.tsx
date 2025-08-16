

import React from 'react';

export const UserGroupIcon = React.memo(({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.513-.96 1.887-1.634 3.4-1.634 1.513 0 2.887.674 3.4 1.634m-6.8 0L9 15.75m-3.44-3.44a9.094 9.094 0 01-3.742.479 3 3 0 014.682-2.72M12 12.75a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" />
  </svg>
));