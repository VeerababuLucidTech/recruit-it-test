import React, { useState, useEffect } from 'react';
import { InputSwitch } from "primereact/inputswitch";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { PrimeIcons } from 'primereact/api';
import { getResourcesSetting } from '../../services/AdminPanelSetting';


const ResourcesSetting = () => {
    const [checked, setChecked] = useState(true);
    const [ingredients, setIngredients] = useState([]);

    const [showDialog, setShowDialog] = useState(false);

    const [doctype, setDoctype] = useState(null);

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const [resourceData, setResourceData] = useState([])


    useEffect(() => {
        const getData = async () => {
            try {
                const rData = await getResourcesSetting();
                console.log(rData)
                setResourceData(rData)
            } catch (error) {
                console.error(error)
            }
        };
        getData();
    }, [])

    const type = [
        { name: 'Monitor' },
        { name: 'Signiture' },
        { name: 'Upload' },
    ];

    const showDialogBox = () => {
        setShowDialog(true);
    };

    const hideDialogBox = () => {
        setShowDialog(false);
    };

    const onUpload = (event) => {
        setUploadedFiles([...event.files]);
    };


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
                    <h4 className='mb-4'>Resources</h4>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6>Employee Profile</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="justify-content-end">
                            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="custom-inputswitch-checked" />
                        </div>
                    </div>
                    <hr></hr>
                    <div>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h6>Role</h6>
                                <p>Select Roll and clid add button to create new Roll</p>
                            </div>
                            <div className="flex justify-content-end">
                                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                            </div>
                        </div>
                        <div className="row d-flex mt-3">
                            <div className="start">
                                <Checkbox inputId="option1" name="W2 Employee"
                                    value="W2 Employee"
                                    onChange={onIngredientsChange}
                                    checked={ingredients.includes('W2 Employee')} />
                                <label htmlFor="option1" className="ml-2">W2 Employee</label>
                            </div>
                            <div className="center">
                                <Checkbox inputId="option2" name="W2 Employee" value="C2C Employee"
                                    onChange={onIngredientsChange} checked={ingredients.includes('C2C Employee')} />
                                <label htmlFor="option2" className="">C2C Employee</label>
                            </div>
                            <div className="end">
                                <Checkbox inputId="option3" name="W2 Employee" value="1099 Employee"
                                    onChange={onIngredientsChange} checked={ingredients.includes('1099 Employee')} />
                                <label htmlFor="option3" className="">1099 Employee</label>
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
                                <h6>Internal Employee</h6>
                                <p>Select Internal Employees</p>
                            </div>
                            <div>
                                <div className="flex justify-content-end">
                                    <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex mt-3">
                            <div className="start">
                                <Checkbox inputId="option1" name="Manager"
                                    value="Manager"
                                    onChange={onIngredientsChange}
                                    checked={ingredients.includes('Manager')} />
                                <label htmlFor="option1" className="ml-2">Manager</label>
                            </div>
                            <div className="center">
                                <Checkbox inputId="option2" name="Recruiter" value="Recruiter"
                                    onChange={onIngredientsChange} checked={ingredients.includes('Recruiter')} />
                                <label htmlFor="option2" className="">Recruiter</label>
                            </div>
                            <div className="end">
                                <Checkbox inputId="option3" name="Accountant" value="Accountant"
                                    onChange={onIngredientsChange} checked={ingredients.includes('Accountant')} />
                                <label htmlFor="option3" className="">Accountant</label>
                            </div>
                        </div>
                        <div className="row d-flex mt-4">
                            <div className="start">
                                <Checkbox inputId="option1" name="Management"
                                    value="Management"
                                    onChange={onIngredientsChange}
                                    checked={ingredients.includes('Management')} />
                                <label htmlFor="option1" className="ml-2">Management</label>
                            </div>
                            <div className="center">
                                <Checkbox inputId="option2" name="HT" value="HT"
                                    onChange={onIngredientsChange} checked={ingredients.includes('HT')} />
                                <label htmlFor="option2" className="mr-3">HT</label>
                            </div>
                            <div className="end">
                                <Checkbox inputId="option3" name="Intern" value="Intern"
                                    onChange={onIngredientsChange} checked={ingredients.includes('Intern')} />
                                <label htmlFor="option3" className="">Intern</label>
                            </div>
                            <div className='mt-3'>
                                <span className='company-primary-text' style={{ fontWeight: "bold" }}>+ Create New</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <hr></hr>
                    </div>

                    <div className='mt-3'>
                        <h6>Documents</h6>
                        <p>Select Documents</p>
                        <div className='justify-content-end'>
                            <span className='company-primary-text' onClick={showDialogBox}>+ Create New</span>
                        </div>
                        <Dialog
                            header="Create New Document"
                            visible={showDialog}
                            onHide={hideDialogBox}
                        >
                            <div className=''>
                                <div className=''>
                                    <label htmlFor="DocumentName">Document Name</label>
                                    <InputText id="DocumentName" aria-describedby="username-help" style={{ marginLeft: "20px" }} />
                                </div>
                                <div className='mt-2'>
                                    <label htmlFor="Doctype">Document Type</label>
                                    <Dropdown value={doctype} onChange={(e) => setDoctype(e.value)} options={type} optionLabel="name"
                                        placeholder="Select Doctype" className="w-full md:w-14rem" style={{ marginLeft: "30px", width: "12rem" }} />
                                </div>
                                <div className='mt-4' style={{ border: "1px dotted black", height: "100px" }}>
                                    <div className='justify-content-center p-4'>
                                        <FileUpload
                                            mode="basic"
                                            name="demo[]"
                                            url="./uploadHandler"
                                            onUpload={onUpload}
                                            multiple
                                            accept="*"
                                            chooseLabel="Upload Document"
                                            className="p-mt-2"
                                            emptyTemplate={<p className="p-m-0">No files uploaded</p>}
                                            fileTemplate={(file, props) => (
                                                <div className="p-d-flex p-ai-center p-mb-2">
                                                    <span className="p-mr-2">{file.name}</span>
                                                    <Button
                                                        icon={PrimeIcons.ARROW_UP}
                                                        className="p-button-success p-button-rounded p-button-text"
                                                        onClick={() => {
                                                            // Perform the desired action for the uploaded file
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='justify-content-end mt-3'>
                                <Button label="Cancel" className="company-secondary-btn" onClick={hideDialogBox} />
                                <Button label="Save" className="company-primary-btn" onClick={hideDialogBox} />
                            </div>

                        </Dialog>
                    </div>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6>Contact Details</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div>
                            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
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
                            <h6>Bill Profile (WO) </h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div>
                            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6>Timesheets</h6>
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
                            <h6>Payprofile(PO)</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div>
                            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
                        </div>
                    </div>
                    <hr></hr>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h6>Immegration</h6>
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

export default ResourcesSetting


