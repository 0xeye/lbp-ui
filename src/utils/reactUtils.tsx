import { FC, ReactNode } from 'react';

export const nestChildren = (children: ReactNode = null, ...components: FC<any>[]): ReactNode => {
  if (!components.length) return children;
  const [Component, ...rest] = components;
  return <Component>{nestChildren(children, ...rest)}</Component>;
};

export const nestComponents = (...components: FC<any>[]) =>
  (({ children }: { children?: ReactNode }) => nestChildren(children, ...components)) as FC;
