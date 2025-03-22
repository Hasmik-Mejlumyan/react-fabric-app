import type { PropsWithChildren, FC } from 'react';

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="bg-background-color">
      {children}
    </main>
  );
};

export default BaseLayout;
