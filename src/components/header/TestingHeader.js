import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Avatar } from 'primereact/avatar';
import { Dropdown } from 'react-bootstrap';
import { InputText } from 'primereact/inputtext';
import { PrimeIcons } from 'primereact/api';
import Notification from "./Notification";
import Message from './Message';
import { TitleContext } from './TitleContext';
import { useNavigate } from "react-router-dom";



function MainHeader() {
  const navigate = useNavigate();
  const { title, setSearchTerm } = useContext(TitleContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const search = (
    <div className="input-group mt-2 mb-1">
      <span className="input-group-text">
        <i className={`pi ${PrimeIcons.SEARCH}`} />
      </span>
      <InputText
        placeholder="Search"
        type="text"
        className="form-control"
        style={{ borderLeft: "none", outline: "none", boxShadow: "none", background: "inherit" }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <span className="input-group-text">
        <i className={`pi ${PrimeIcons.SLIDERS_H}`} />
      </span>
    </div>
  );

  const icon = (
    <div className='d-flex gap-4'>
      <div className='mt-3 p-2 ml-4'>
        <Notification />
      </div>
      <div className='mt-4'>
        <Message />
      </div>
      <div className='mt-4'>
      <i className="pi pi-cog" style={{ fontSize: '1.2rem' }}>
        </i>
      </div>
    </div>


  );

  const avtar1 = (
    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="small" shape="circle" />
  );

  const profileMenuItems = [
    { label: 'My Profile', icon: 'pi pi-user' },
    { label: 'Edit Profile', icon: 'pi pi-pencil' },
    { label: 'Change Password', icon: 'pi pi-lock' },
    // { label: 'Logout', icon: 'pi pi-power-off' }
    { label: (<span onClick={handleLogout}>Logout</span>), icon: 'pi pi-power-off' }
  ];

  const profile = (
    <div className="position-absolute top-0 end-0">
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{ background: 'none', border: 'none', margin: "0.5rem" }}>
          {avtar1}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {profileMenuItems.map((item) => (
            <Dropdown.Item key={item.label}>
              <i className={item.icon} style={{ marginRight: '0.5rem' }} />
              {item.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );

  return (
    <Container fluid className='border-bottom'>
      <Row className='justify-content-center align-items-center'>
        <Col md={3} lg={3} className='text-start col-4 col-sm-4 col-md-3 col-lg-3'><h5>{title}</h5></Col>
        <Col md={6} lg={6} className='text-center col-4 col-sm-4 col-md-6 col-lg-6'>{search}</Col>
        <Col md={3} lg={3} className='text-end col-4 col-sm-4 col-md-3 col-lg-3'>
          {icon}
          {profile}
        </Col>
      </Row>
    </Container>
  );
}

export default MainHeader;