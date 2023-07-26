import React, { useState } from 'react'
import { InputSwitch } from "primereact/inputswitch";


const PayrollSetting = () => {

  const [checked, setChecked] = useState(true);

  return (
    <div className='row mt-2'>
      <div className='col-1'></div>
      <div className='col-9'>
        <div className='row'>
          <h4 className='mb-4'>Payroll</h4>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Payroll Genration</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Run Payroll </h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Preview Paysleep</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Download paysleep</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Tax info</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Bank info</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>Payroll Document</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div>
              <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
            </div>
          </div>
          <hr></hr>
          <div className='d-flex justify-content-between'>
            <div>
              <h6>History</h6>
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

export default PayrollSetting