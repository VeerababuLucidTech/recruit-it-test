import React from "react";
import { Skeleton } from "primereact/skeleton";

function AddressbookSkeleton({ allUsers }) {
  const skeletonArray = Array.from(
    { length: allUsers.length },
    (_, index) => index
  );
  return <>
   <div>
      {skeletonArray.map((_, index) => (
        <Skeleton key={index} width="100%" height="3rem" className="mb-2" />
      ))}
    </div>
  </>;
}

export default AddressbookSkeleton;