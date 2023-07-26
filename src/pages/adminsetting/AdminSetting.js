// import React,{ useState } from 'react';
// import { Sidebar } from "primereact/sidebar";
// import { RiUser2Line, RiBriefcaseLine, RiBuildingLine, RiFileSettingsLine } from "react-icons/ri";
// import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
// import { BiDollarCircle } from "react-icons/bi";
// import { FaFileInvoice } from "react-icons/fa"
// import { BsGift } from "react-icons/bs"
// import { HiOutlineDocumentDuplicate } from "react-icons/hi"
// import AdminSettingSidebar from "./AdminSettingSidebar";
// import ResourcesSetting from './ResourcesSetting';

// const AdminSetting = () => {
//   const [visibleRight, setVisibleRight] = useState(false);

//   const customName = (
//     <div className='col'>
//         <h4>Admin Settings</h4>
//     </div>
//   )
  
//   const renderSidebar = (title, description) => (

    
//     <Sidebar position='right' visible={visibleRight}
//     icons={customName}
//     onHide={() => setVisibleRight(false)} className="l-width-100" style={{overflow:"hidden"}}> 
//       {/* <AdminSettingSidebar/> */}
//       {/* <ResourcesSetting /> */}
      
//     </Sidebar>
//   );

//   const renderCard = (icon, title, description) => (
//     <div className="card mb-2">
//       <div onClick={() => setVisibleRight(true)} className="row">
//         <div className="col-md-1 mt-2 p-4 l-fs-18">
//           {icon}
//         </div>
//         <div className="col-md-9 mt-4">
//           <h5>{title}</h5>
//           <p>{description}</p>
//         </div>
//         <div className="row col-md-2 mt-3 pt-4 p-1">
//           <i className="pi pi-chevron-right"></i>
//         </div>
//       </div>
//       {renderSidebar(title, description)}
//     </div>
//   );

//   return (
//     <div className="row mt-2">
//       <div className="col-md-1"></div>
//       <div className="col-md-10">
//         <h3>Setting</h3>
//         <p>Manage the Setting</p>
//         <div className='row'>
//           <div className='col-md-6'>
//             {renderCard(<RiUser2Line />, 'Resources', 'Manage the resources that you will operate within')}
//             {renderCard(<AiOutlineClockCircle />, 'TimeSheets', 'Manage the TimeSheets that you will operate within')}
//             {renderCard(<HiOutlineDocumentDuplicate />, 'Documents', 'Manage the Documents that you will operate within')}
//             {renderCard(<BiDollarCircle />, 'Payroll', 'Manage the Payroll that you will operate within')}
//             {renderCard(<AiOutlineMail />, 'Mail Template', 'Manage the Mail Template')}
//           </div>
//           <div className='col-md-6'>
//             {renderCard(<RiBriefcaseLine />, 'Contracts', 'Manage the Contracts that you will operate within')}
//             {renderCard(<RiBuildingLine />, 'Companies', 'Manage the Companies that you will operate within')}
//             {renderCard(<FaFileInvoice />, 'Invoices', 'Manage the Invoices that you will operate within')}
//             {renderCard(<BsGift />, 'Benefits', 'Manage the Benefits that you will operate within')}
//             {renderCard(<RiFileSettingsLine />, 'General', 'Manage the General Settings')}
//           </div>
//         </div>
//       </div>
//       <div className="col-1"></div>
//     </div>
//   );
// }

// export default AdminSetting;
