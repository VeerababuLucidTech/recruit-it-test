import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import ReusableInputField from '../../ReusableInputField';
import RequiredLabel from '../../RequiredLabel';

const validationSchema = Yup.object().shape({
  addressLabel: Yup.string(),
  address1: Yup.string().required('Address is required'),
  address2: Yup.string(),
  // countryCode: Yup.string().required('Country is required'),
  // city: Yup.string().required('City is required'),
  // state: Yup.string().required('State is required'),
  // postalCode: Yup.number().required('Zipcode is required')
});
function Address({ onPrevious, onNext }) {

  const formik = useFormik({
    initialValues: {
      addressLabel: "",
      address1: '',
      address2: '',
      countryCode: '',
      city: '',
      state: '',
      postalCode: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onNext("addCompanyDocument", values);
      console.log("Address", values)
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='flex flex-wrap gap-3 p-fluid'>
        <div className="text-center">
          <h4>Address</h4>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
        </div>

        <div className='mb-3'>
          <ReusableInputField label="Label(Specify if it is main head quarters/sales office/branch office etc.)" required
            name="addressLabel"
            value={formik.values.addressLabel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="---"
            className={formik.errors.addressLabel && formik.touched.addressLabel ? 'p-invalid' : ''}
          />
          {formik.errors.addressLabel && formik.touched.addressLabel && (
            <small className="p-error">{formik.errors.addressLabel}</small>
          )}
        </div>

        <div className='mb-3'>
          <ReusableInputField label="Address line 1" required name="address1"
            value={formik.values.address1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Address line 1"
            className={formik.errors.address1 && formik.touched.address1 ? 'p-invalid' : ''}
          />
          {formik.errors.address1 && formik.touched.address1 && (
            <small className="p-error">{formik.errors.address1}</small>
          )}
        </div>
        <div className='mb-3'>
          <ReusableInputField label="Address line 2" required name="address1"
            value={formik.values.address2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Address line 2"
            className={formik.errors.address2 && formik.touched.address2 ? 'p-invalid' : ''}
          />
          {formik.errors.address2 && formik.touched.address2 && (
            <small className="p-error">{formik.errors.address2}</small>
          )}
        </div>

        <div className='row mb-2 mb-3'>
          <div className="flex-auto col-md-3">
            <RequiredLabel label="City" required />
            <Dropdown
              id="city"
              name="city"
              value={formik.values.city}
              options={[
                { label: 'City 1', value: 'city1' },
                { label: 'City 2', value: 'city2' },
                { label: 'City 3', value: 'city3' },
              ]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.city && formik.touched.city ? 'p-invalid' : ''
              }
              placeholder="Select City"
            />
            {formik.errors.city && formik.touched.city && (
              <small className="p-error">{formik.errors.city}</small>
            )}
          </div>
          <div className="flex-auto col-md-3">
            <RequiredLabel label="State" required />
            <Dropdown
              id="state"
              name="state"
              value={formik.values.state}
              options={[
                { label: 'State 1', value: 'state1' },
                { label: 'State 2', value: 'State2' },
                { label: 'State 3', value: 'State3' },
              ]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.state && formik.touched.state ? 'p-invalid' : ''
              }
            />
            {formik.errors.state && formik.touched.state && (
              <small className="p-error">{formik.errors.state}</small>
            )}
          </div>
          <div className="flex-auto col-md-3">
            <RequiredLabel label="Country" required />
            <Dropdown
              id="countryCode"
              name="countryCode"
              value={formik.values.countryCode}
              options={[
                { label: 'countryCode 1', value: 'countryCode1' },
                { label: 'countryCode 2', value: 'countryCode2' },
                { label: 'countryCode 3', value: 'countryCode3' },
              ]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.countryCode && formik.touched.countryCode ? 'p-invalid' : ''
              }
            />
            {formik.errors.countryCode && formik.touched.countryCode && (
              <small className="p-error">{formik.errors.countryCode}</small>
            )}
          </div>
          <div className="flex-auto col-md-3">
            <ReusableInputField label="Zip" required
              name="postalCode"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="postalCode"
              className={formik.errors.postalCode && formik.touched.postalCode ? 'p-invalid' : ''}
            />
            {formik.errors.postalCode && formik.touched.postalCode && (
              <small className="p-error">{formik.errors.postalCode}</small>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div className="g-2 mt-3">
        <div className='l-color-orange l-fw-500 bg-white pt-2 pb-2  border border-1 rounded' >
          <span className='ps-2'>  + ADD A NEW ADDRESS </span>
        </div>
      </div>
      <div className='p-mt-4 form-btns' >
        <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious("contactDetails")} />
        <Button label='Next' className=' company-primary-btn' type='submit' />
      </div>
    </form>
  )
}

export default Address