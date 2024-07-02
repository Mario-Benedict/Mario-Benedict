import BaseProps from '@/types/BaseProps';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export type PageSectionProps = BaseProps &
  PropsWithChildren<{
    as?: 'section' | 'div';
  }>;

const PageSection = ({ className, id, as = 'section', children }: PageSectionProps) => {
  const Component = as;

  return (
    <Component className={clsx('mx-auto p-3 w-full max-w-7xl', className)} id={id}>
      {children}
    </Component>
  );
};

export default PageSection;
