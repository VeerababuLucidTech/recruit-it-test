import React, { useContext, useEffect } from "react";
import { TitleContext } from "../../components/header/TitleContext";
import CommonTab from "../../components/reusable/CommonTab";
import UsersProfile from "./UsersProfile";

const AddressBook = () => {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("AddressBook");
  }, [setTitle]);
  const tabs = [
    {
      label: "All",
      content: (
        <div className="p-0 mt-0">
          <UsersProfile />
        </div>
      ),
    },
    { label: "Active", content: <UsersProfile /> },
    { label: "Inactive", content: <UsersProfile /> },
  ];

  return (
    <>
      <div fluid className="container-fluid p-0 m-0">
        <CommonTab tabs={tabs} />
      </div>
    </>
  );
};

export default AddressBook;
