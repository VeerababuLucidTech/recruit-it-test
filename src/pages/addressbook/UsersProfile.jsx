import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Image } from "primereact/image";
import UserProfileDetails from "./UserProfileDetails";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import AddressbookSkeleton from "../addressbook/AddressbookSkeleton";
import { addressBookUserData } from "../../services/AddressbookServices";

function UsersProfile() {
  const [allUsers, setAllUsers] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [loadingUsers, setLoadingUsers] = useState(false);

  const handleButtonClick = (id) => {
    setSelectedCardId(id);
    if (selectedCardId === id) {
      setSelectedCardId(null);
    } else {
      setSelectedCardId(id);
    }
  };
  const getAllUserData = async () => {
    setLoadingUsers(true);
    const result = await addressBookUserData();
    setAllUsers(result);
    setFilteredUsers(result);
    setLoadingUsers(false);
  };

  useEffect(() => {
    getAllUserData();
  }, []);
  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchTerm(searchText);
    const filteredUsers = allUsers?.filter((user) =>
      user?.firstName?.toLowerCase().includes(searchText)
    );
    setFilteredUsers(filteredUsers);
  };

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    const sortedUsers = [...filteredUsers].sort((a, b) => {
      const nameA = a.firstName.toLowerCase();
      const nameB = b.firstName.toLowerCase();

      if (newSortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    setFilteredUsers(sortedUsers);
  };

  return (
    <div>
      <div className="row">
        <div className=" company-layout-bg col-4 border-end  company-layout-bg ">
          <span className="company-layout-bg p-input-icon-left w-100">
            <i className="pi pi-search" />
            <InputText
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search By Name"
              className="w-100"
            />
          </span>
          <Button
            onClick={toggleSortOrder}
            text
            value={sortOrder}
            label="Name"
            icon={sortOrder === "asc" ? "pi pi-sort-up" : "pi pi-sort-down"}
            className="no-click-border company-main-text p-1 fw-normal"
            size="small"
            iconPos="right"
          />
          {loadingUsers ? (
            <AddressbookSkeleton allUsers={allUsers} />
          ) : (
            <div>
              {filteredUsers?.map((user, i) => (
                <div
                  id={user.id}
                  onClick={() => handleButtonClick(user.id)}
                  className="profile_card border p-2 d-flex justify-content-start align-items-center gap-1"
                  key={i}
                  style={{
                    backgroundColor:
                      selectedCardId === user.id ? "#F5F6FA" : "white",
                  }}
                >
                  <div>
                    <Image
                      src={user.image}
                      zoomSrc={user.image}
                      alt="Image"
                      width="50"
                      height="50"
                      className="border rounded-circle"
                      preview
                    />
                  </div>

                  <div>
                    <p className="p-0 mb-0">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="p-0 mb-0">{user.domain}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-8 m-0 p-0">
          <UserProfileDetails
            allUsers={allUsers}
            selectedCardId={selectedCardId}
          />
        </div>
      </div>
    </div>
  );
}

export default UsersProfile;
