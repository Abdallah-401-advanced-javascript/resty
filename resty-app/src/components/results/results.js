/* eslint-disable no-unused-vars */
import React from 'react';
import ReactJson from 'react-json-view';
import './results.scss';
const Results = (props) => {
    
  return (
    <div id="textarea">
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