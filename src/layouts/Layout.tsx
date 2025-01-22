'use client';

import React from 'react';
import { ConsentBanner } from '../components/banner/ConsentBanner';
import { LayoutProps } from '@/interface/consent';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ConsentBanner />  {/* Calling consent banner component */}
      {children}
    </>
  );
};