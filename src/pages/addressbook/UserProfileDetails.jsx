import { Button } from "primereact/button";
import { Image } from "primereact/image";
import React from "react";

function UserProfileDetails({ allUsers, selectedCardId }) {
  const selectedUser = allUsers?.find((user) => user.id === selectedCardId);

  return (
    <>
      {selectedUser ? (
        <div>
          <div className=" border-bottom m-0   d-flex justify-content-start align-items-center gap-3 p-2   ">
            <div>
              <Image
                src={selectedUser?.image}
                zoomSrc={selectedUser?.image}
                alt="Image"
                width="70"
                height="70"
                className="border rounded-circle "
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                preview
              />
            </div>

            <div>
              <p className="company-main-text p-0 fs-6 fw-bold mb-0">
                {selectedUser?.firstName} {selectedUser?.lastName}
              </p>
              <p className="p-0 mb-0 company-secondary-text">
                {selectedUser?.domain}
              </p>
              <Button
                text
                className="
                company-main-text p-0 fw-normal"
                label="Change Roll"
                icon="pi pi-pencil"
                iconPos="right"
              />
            </div>
          </div>
          <div className="row p-4">
            <div className="col-6">
              <p className="company-secondary-text p-0 mb-0">First Name</p>
              <p className="company-main-text p-0  mb-0 fw-bold">
                {selectedUser?.firstName}
              </p>
            </div>
            {/* 2 */}
            <div className="col-6">
              <p className="company-secondary-text p-0 mb-0">Last Name</p>
              <p className="company-main-text p-0  mb-0 fw-bold">
                {selectedUser?.lastName}
              </p>
            </div>
            {/* 3 */}
            <div className="col-6 mt-4">
              <p className="company-secondary-text p-0 mb-0">Email</p>
              <p className="company-main-text p-0  mb-0 fw-bold">
                {selectedUser?.email}
              </p>
            </div>
            {/* 4 */}
            <div className="col-6 mt-4">
              <p className="company-secondary-text p-0 mb-0">Phone Number</p>
              <p className="company-main-text p-0  mb-0 fw-bold">
                {selectedUser?.phone}
              </p>
            </div>
            {/* 5 */}
            <div className="col-6 mt-4">
              <p className="company-secondary-text p-0 mb-0">Created On</p>
              <p className="company-main-text p-0  mb-0 fw-bold">
                {selectedUser?.ssn}
              </p>
            </div>
            {/* 6 */}
            <div className="col-6 mt-4">
              <p className="company-secondary-text p-0 mb-0">Roll</p>
              <p className="company-main-text p-0  mb-0 fw-bold">---</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-50 d-flex justify-content-center align-items-center">
          No Profile Selected
        </div>
      )}
    </>
  );
}

export default UserProfileDetails;
