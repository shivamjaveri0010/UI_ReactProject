import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div className="h-full w-full md:w-2/3 flex flex-nowrap overflow-x-auto gap-10 px-4 pb-4 items-center no-scrollbar">
      {props.users.map(function (elem, idx) {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />;
      })}
    </div>
  );
};

export default RightContent;