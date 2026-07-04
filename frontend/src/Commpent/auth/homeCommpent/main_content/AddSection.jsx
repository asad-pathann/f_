import React from "react";

const AddSection = () => {
  return (
    <>
      <div className=" p-4 overflow-y-scroll  min-h-96 hide_scroll ">
        <h2 className=" text-gray-500  font-semibold">Sponsored</h2>

        <div className="flex flex-col items-center mt-10 ">
          <div className="">
            <div className="flex items-center justify-center  w-full  gap-2 ">
              <img
                className="h-[160px] object-cover"
                src="https://scontent.fisb9-1.fna.fbcdn.net/v/t45.1600-4/676024033_122168788700949720_8536786898117905113_n.jpg?stp=cp0_dst-jpg_fr_q75_sh2.08_spS444_tt6&cstp=mx1080x1080&ctp=s960x960&_nc_cat=105&ccb=1-7&_nc_sid=f0a831&_nc_ohc=h2LUYkGo5vUQ7kNvwE2_t6x&_nc_oc=AdpGfv5tdGUi6_bM1v7Ieweia3OaESHln9UjsDlCmtqmXA5mcmRq6onRB06o9ohRM_g&_nc_zt=1&_nc_ht=scontent.fisb9-1.fna&_nc_gid=I-cNZepvHitN09IxD9xMyw&_nc_ss=7b2a8&oh=00_AQD2tTDUVAeOqLcUopy0Q0tiryBoXfnX63dCNH7I2wzgPg&oe=6A4D9DFE"
                alt=""
              />
              <div className="flex flex-col">
                <h5 className="text-[15px] font-semibold">
                  <span className="uppercase">metro</span> pakistan pvd..
                  limited
                </h5>
                <p className="tect-sm text-gray-500">metro.online.pk</p>
              </div>
            </div>
          </div>
          <hr className="h-[1px] border-0 bg-gray-600" />
          <div className="my-6 ">
            <div className="flex items-center justify-center gap-3 ">
              <div className="border border-gray-300 rounded-md w-full">
                <img
                  className="h-full object-contain  "
                  src="https://scontent.fisb9-1.fna.fbcdn.net/v/t45.1600-4/732196856_122236611980294568_4769339583005062265_n.jpg?stp=dst-jpg_tt6&cstp=mx1218x646&ctp=p296x100&_nc_cat=107&ccb=1-7&_nc_sid=526594&_nc_ohc=lFqMmZd1zqUQ7kNvwGoIpdz&_nc_oc=Adp9abEQhYAtFzlbWY3Nw-3PXc3XrsOgMc6jviL9WJ4AeeWCV6wqqUwpywpd-YfGKBg&_nc_zt=1&_nc_ht=scontent.fisb9-1.fna&_nc_gid=I-cNZepvHitN09IxD9xMyw&_nc_ss=7b2a8&oh=00_AQD-fvv1XWFr67PrQ3gmCSM8sh2_05idI3mPTS5VEYm4TQ&oe=6A4DB628"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h5 className="text-sm font-semibold ">
                  <span className="uppercase">unlock</span> your potential with
                  up PKR 18000 of ....
                </h5>
                <p className="tect-sm text-gray-500">metro.online.pk</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-0 bg-gray-600" />
      </div>
    </>
  );
};

export default AddSection;
