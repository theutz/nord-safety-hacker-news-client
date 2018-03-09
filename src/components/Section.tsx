import * as React from 'react';
import * as classNames from 'classnames';

const Section = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const classes = classNames('section', className);

  return <section className={classes} {...props} />;
};

export default Section;
