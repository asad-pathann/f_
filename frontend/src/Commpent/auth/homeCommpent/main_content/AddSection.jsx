import React from "react";

const AddSection = () => {
  return (
    <>
      <div className=" p-4 overflow-y-scroll  min-h-96 hide_scroll ">
        <h2 className=" text-gray-500  font-semibold">Sponsored</h2>

        <div className="my-4 ">
          <div className="flex items-center justify-between ">
            <div>
              <h3 className="font-semibold text-sm">Ad hidden</h3>
              <p className="text-gray-600 text-sm">
                You won't see this ad and ads like it.
              </p>
            </div>
            <div className="hover:bg-gray-200 text-md   text-[15px] text-blue-600  rounded-md p-1">
              <h4>Undo</h4>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-0 bg-gray-600" />
        <div className="my-4 ">
          <div className="flex items-center justify-between ">
            <div>
              <h3 className="font-semibold text-sm">Ad hidden</h3>
              <p className="text-gray-600 text-sm">
                You won't see this ad and ads like it.
              </p>
            </div>
            <div className="hover:bg-gray-200 text-md   text-[15px] text-blue-600  rounded-md p-1">
              <h4>Undo</h4>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-0 bg-gray-600" />
      </div>
    </>
  );
};

export default AddSection;
