import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className='d-flex align-items-center'>
      <label className="form-label" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input ref={ref} className="form-control ms-3" {...props.input} />
    </div>
  );
});

export default Input;
