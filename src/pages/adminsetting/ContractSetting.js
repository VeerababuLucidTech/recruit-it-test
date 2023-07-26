import React, { useState } from 'react';
import { InputSwitch } from "primereact/inputswitch";
import { Checkbox } from "primereact/checkbox";

const ContractSetting = () => {
    const [checked, setChecked] = useState(true);
    const [ingredients, setIngredients] = useState([]);

    const onIngredientsChange = (e) => {
        let _ingredients = [...ingredients];

        if (e.checked)
            _ingredients.push(e.value);
        else
            _ingredients.splice(_ingredients.indexOf(e.value), 1);

        setIngredients(_ingredients);
    }

    return (
        <div className='row mt-2'>
            <div className='col-1'></div>
            {/* <div className='col-1' style={{border:"1px solid black"}}></div> */}
            <div className='col-9'>
                <div className='row'>
                    <h4 className='mb-4'>Contract</h4>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6>Contract Details</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div>
                            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                        </div>
                    </div>
                    <hr></hr>
                    <div>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h6>Contract Category</h6>
                                <p>Select Contract Category and click add button to create new Contract Category</p>
                            </div>
                            <div>
                                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                            </div>
                        </div>
                        <div className="row d-flex mt-3">
                            <div className="start">
                                <Checkbox inputId="option1" name="Category 1"
                                    value="Category 1"
                                    onChange={onIngredientsChange}
                                    checked={ingredients.includes('Category 1')} />
                                <label htmlFor="option1" className="ml-2">Category 1</label>
                            </div>
                            <div className="center">
                                <Checkbox inputId="option2" name="Category 2" value="Category 2"
                                    onChange={onIngredientsChange} checked={ingredients.includes('Category 2')} />
                                <label htmlFor="option2" className="">Category 2</label>
                            </div>
                            <div className="end">
                                <Checkbox inputId="option3" name="Category 3" value="Category 3"
                                    onChange={onIngredientsChange} checked={ingredients.includes('Category 3')} />
                                <label htmlFor="option3" className="">Category 3</label>
                            </div>
                            <div className='mt-3'>
                                <span className='company-primary-text' style={{ fontWeight: "bold" }}>+ Create New</span>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                    <div>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h6>Contract Type</h6>
                                <p>Select Contract Type</p>
                            </div>
                            <div>
                                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                            </div>
                        </div>
                        <div className="row d-flex mt-3">
                            <div className="start">
                                <Checkbox inputId="option1" name="Contract Type 1"
                                    value="Contract Type 1"
                                    onChange={onIngredientsChange}
                                    checked={ingredients.includes('Contract Type 1')} />
                                <label htmlFor="option1" className="ml-2">Contract Type 1</label>
                            </div>
                            <div className="center">
                                <Checkbox inputId="option2" name="Contract Type 2" value="Contract Type 2"
                                    onChange={onIngredientsChange} checked={ingredients.includes('Contract Type 2')} />
                                <label htmlFor="option2" className="">Contract Type 2</label>
                            </div>
                            <div className="end">
                                <Checkbox inputId="option3" name="Contract Type 3" value="Contract Type 3"
                                    onChange={onIngredientsChange} checked={ingredients.includes('Contract Type 3')} />
                                <label htmlFor="option3" className="">Contract Type 3</label>
                            </div>
                            <div className='mt-3'>
                                <span className='company-primary-text' style={{ fontWeight: "bold" }}>+ Create New</span>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                    <div className='mt-3'>
                        <h6>Documents</h6>
                        <p>Select Documents</p>
                        <div className='justify-content-end'>
                            <span className='company-primary-text' style={{ fontWeight: "bold" }}>+ Create New</span>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6>Note</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div>
                            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6>Bill Profile</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div>
                            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6>TimeSheet</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div>
                            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6>Expenses</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div>
                            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6>Paystubs</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div>
                            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6>Payprofile</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div>
                            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6>Imeegration</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div>
                            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                        </div>
                    </div>
                    <hr></hr>

                </div>
            </div>
            <div className='col-2'></div>
        </div>
    )
}

export default ContractSetting


