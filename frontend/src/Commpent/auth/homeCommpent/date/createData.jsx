import { HiSpeakerphone, HiUserGroup } from "react-icons/hi";
import { IoBook, IoCreateOutline, IoFlag } from "react-icons/io5";
import { TbStarFilled } from "react-icons/tb";
import { PiFilmReelDuotone } from "react-icons/pi";
import { FaLandmark } from "react-icons/fa6";
import { MdEventNote } from "react-icons/md";

export const create_data = [
  {
    id: 1,
    title: "Create",
    icons: <IoCreateOutline size={25} />,
  },
  {
    id: 2,
    title: "Store",
    icons: <IoBook size={25} />,
  },
  {
    id: 3,
    title: "Reel",
    icons: <PiFilmReelDuotone size={25} />,
  },
  {
    id: 4,
    title: "Life Event",
    icons: <TbStarFilled size={25} />,
  },
  {
    id: 5,
    title: "Page",
    icons: <IoFlag size={25} />,
  },
  {
    id: 6,
    title: "Add",
    icons: <HiSpeakerphone size={25} />,
  },
  {
    id: 7,
    title: "Group",
    icons: <HiUserGroup size={25} />,
  },
  {
    id: 8,
    title: "Enevt",
    icons: <MdEventNote size={25} />,
  },
  {
    id: 8,
    title: "Market palce ",
    icons: <FaLandmark size={25} />,
  },
];
