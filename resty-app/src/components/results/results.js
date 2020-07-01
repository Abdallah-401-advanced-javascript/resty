import React from 'react';
import { isSpreadAssignment } from 'typescript';

const Results = (props) => {
    
  return (
    <div>
      <div>Count: {props.count}</div>
      {
        <div><pre>headers:{ JSON.stringify(props.headers, null, 2) }</pre></div>
      }

      {
        <div><pre>body: { JSON.stringify(props.results, null, 2) }</pre></div>
      }
        

    </div>
  );
};

export default Results;