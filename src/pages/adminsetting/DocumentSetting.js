import React, { useState } from 'react'
import { InputSwitch } from "primereact/inputswitch";


const DocumentSetting = () => {

  const [checked, setChecked] = useState(true);

  return (
    <div className='row mt-2'>
      <div className='col-1'></div>
      <div className='col-9'>
        <div className='row'>
          <h4 className='mb-4'>Documents</h4>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>View Documents</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Edit Documents</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Change Status</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Change Date</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Change Doc Number</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Change Title</h6>
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

export default DocumentSetting