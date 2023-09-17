import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from './Navigation/Navigation';
import { Section } from './Section/Section';

export const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Section>
          <Suspense>
            <Outlet />
          </Suspense>
        </Section>
      </main>
    </div>
  );
};
