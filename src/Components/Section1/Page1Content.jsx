import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = (props) => {
  return (
    <div className="flex-1 flex flex-col md:flex-row gap-10 items-center overflow-hidden px-6 md:px-18 py-10">
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  );
};

export default Page1Content;