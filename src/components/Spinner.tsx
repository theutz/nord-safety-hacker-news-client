import * as React from 'react';

export interface SpinnerProps { }

const Spinner = ({ }: SpinnerProps) => (
  <div className="columns is-centered">
    <div className="column is-narrow">
      <span className="icon has-text-info">
        <i className="fas fa-4x fa-spinner fa-pulse" />
      </span>
    </div>
  </div>
);

export default Spinner;