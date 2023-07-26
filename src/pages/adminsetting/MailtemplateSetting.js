import React, { useState } from 'react'
import { InputSwitch } from "primereact/inputswitch";


const MailtemplateSetting = () => {

  const [checked, setChecked] = useState(true);

  return (
    <div className='row mt-2'>
      <div className='col-1'></div>
      <div className='col-9'>
        <div className='row'>
          <h4 className='mb-4'>Mail Templates</h4>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Select Template</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>View Template</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Edit Template</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Delete</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>

        </div>
      </div>
      <div className='col-2'></div>

    </div>
  )
}

export default MailtemplateSetting