import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-full md:w-80 rounded-3xl overflow-hidden relative">
      <img
        className="h-full w-full object-cover object-center"
        src={props.img}
        alt="card image one"
      />
      <RightCardContent id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
