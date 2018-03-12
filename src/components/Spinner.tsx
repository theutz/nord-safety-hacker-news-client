import * as React from 'react';

export interface SpinnerProps {
  size?: string;
}

const Spinner = ({ size = '4x' }: SpinnerProps) => (
  <div className="columns is-centered">
    <div className="column is-narrow">
      <span className="icon has-text-info">
        <i className={`fas ${!!size && `fa-${size}`} fa-spinner fa-pulse`} />
      </span>
    </div>
  </div>
);

export default Spinner;