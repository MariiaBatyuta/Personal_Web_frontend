import React, { ReactNode } from 'react';
import Header from '../components/Header/Header';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout ({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};