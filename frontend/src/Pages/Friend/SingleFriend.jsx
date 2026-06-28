import React from "react";
import { useLocation } from "react-router-dom";

const SingleFriend = ({ f_name, l_name }) => {
  // Ab aap ko saara data mil jaye ga (e.g., userDetails.name, userDetails.email)
  return (
    <>
      <div className="bg-white sm:h-[350px] w-[100%] rounded-2xl overflow-hidden sm:shadow-sm  shadow-gray-400 sm:my-3 my-1">
        <div className="flex gap-2  sm:flex-col items-center justify-content ">
          <img
            src="https://scontent.fisb6-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png&cstp=mx2048x2048&ctp=s240x240&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeEo9eTlbbd5w7pFi4OzgK7NWt9TLzuBU1Ba31MvO4FTUP241f2hTaaw4n8iTkkb8jDgm9H_tW0DGe6ok2eU-0dT&_nc_ohc=COf5-xtMqFAQ7kNvwE-6S1p&_nc_oc=AdrhBhkXJTld1q0hRYHJ7TW9B5fjFa5yl0dgUiol1Menefr_UtFqkIgFsxGPOfrzLX0&_nc_zt=24&_nc_ht=scontent.fisb6-1.fna&_nc_ss=7b2a8&oh=00_Af-xDLpBPPZ-JxJlIkVNuEdZQxdrTsaw5lGDuNFvzKcAfg&oe=6A6835FA"
            className="sm:h-[200px] h-[90px] rounded-full sm:rounded-t-2xl sm:rounded-b-none  sm:w-[100%] bg-amber-200"
            alt=""
          />
          <div className="flex flex-col items gap-1">
            <p className=" font-semibold text-sm sm:text-md">
              {f_name} {l_name}
            </p>
            <div className="flex items-center">
              <img
                className="h-[20px] w-[20px] rounded-full"
                src="https://scontent.fisb13-1.fna.fbcdn.net/v/t39.30808-1/460601890_122097616736538854_6380405638775777164_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE7VvY7NdC6VJ70vW1OlU5dLqEa-kWRhM0uoRr6RZGEzSgJJ6F6CAOw_RiD9Nf8T0rSQfbMStAfx39kB5gyVm7y&_nc_ohc=djiPgSLACUYQ7kNvwG6aPQA&_nc_oc=Adk7NVBDstBo98cWWa-cm9evephNkK9Y9xC9qTHZPbU9vhspo-39HbGf8ZrKCyTzuefmbWoXzbZjxF7jTx8M62WY&_nc_zt=24&_nc_ht=scontent.fisb13-1.fna&_nc_gid=0a7fmYICGbsliNb86jDERA&oh=00_AfEozvW-CVusI088DLpwYv0VU06XeeJqIJsbeS1sss4NFg&oe=681AFDB9"
                alt=""
              />
              <p className="text-gray-600 p-0 ">1 mutual friend</p>
            </div>
            <div className="flex sm:flex-col gap-2">
              <button className="px-7 py-1 font-bold rounded-lg w-full sm:my-1 bg-[#0866FF] text-white">
                Confirm
              </button>
              <button className=" px-8 font-bold py-1 rounded-lg w-full   bg-gray-200 ">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleFriend;
