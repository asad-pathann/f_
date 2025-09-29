import { IoMdHome } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { RiHome5Fill, RiStore2Fill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
export const navdata = [
  {
    id: 1,
    title: "home",
    icons: <RiHome5Fill size={25} color="blue" />,
    Link: "/home",
  },
  {
    id: 1,
    title: "group",
    icons: <FaUserFriends size={25} />,
    Link: "/group",
  },
  {
    id: 1,
    title: "video",
    icons: <MdOutlineOndemandVideo size={25} />,
    Link: "/video",
  },
  {
    id: 1,
    title: "market",
    icons: <RiStore2Fill size={25} />,
    Link: "/market",
  },
];
