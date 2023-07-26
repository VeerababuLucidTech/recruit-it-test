import React from 'react';
import { Form } from 'react-bootstrap';


const RequiredLabel = ({ label, required }) => {
  return (

    <label htmlFor="username">
      {label}
      {required && <span style={{ color: "#e24c4c" }}> *</span>}
    </label>
    // <Form.Label>
    //   {label}
    //   {required && <span style={{ color: 'red' }}>*</span>}
    // </Form.Label>
  );
};

export default RequiredLabel;