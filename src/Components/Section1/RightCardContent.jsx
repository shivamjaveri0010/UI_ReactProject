import React from "react";
import { ArrowRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-black/20 p-8 flex flex-col justify-between">
      <h2 className="bg-white text-2xl font-semibold rounded-full h-14 w-14 flex shrink-0 justify-center items-center shadow-lg">
        {props.id + 1}
      </h2>

      <div className="mt-4">
        <p className="text-lg leading-tight text-white mb-6 font-medium line-clamp-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus repellat nemo, qui error ipsum modi!
        </p>
        <div className="flex gap-3">
          <button className="bg-blue-600 text-white text-sm font-semibold px-7 py-3 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shrink-0">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
