import React from 'react';

function FunctionComp(props) {
  console.log(props);
  console.log(
    '%c render() Function Component',
    'color: rgba(253, 5, 216, 0.917); font-size: 15px'
  );
  return (
    <div>
      <p>
        <span className="purple">Function Component : </span>
        {props.name}
      </p>
    </div>
  );
}

export default React.memo(FunctionComp);
