import { IoMdHome } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsShop } from "react-icons/bs";
export const  navdata = [
    {
        id:1,
        title:"home",
        icons:<IoMdHome size={25} />,
        Link:'/home'
   
    },
    {
        id:1,
        title:"group",
        icons:<FaUserGroup  size={25} />,
        Link:'/group'
   
    },
    {
        id:1,
        title:"video",
        icons:<MdOutlineOndemandVideo  size={25} />,
        Link:'/video'
   
    },
    {
        id:1,
        title:"market",
        icons:<BsShop size={25}  />,
        Link:'/market'
   
    },
]