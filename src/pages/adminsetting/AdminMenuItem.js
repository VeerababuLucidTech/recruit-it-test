import {
    RiBuildingLine,
    RiUser2Line,
    RiBriefcaseLine,
    RiFileSettingsLine
} from "react-icons/ri";
import { HiOutlineDocumentDuplicate } from "react-icons/hi"
import { FaFileInvoice } from "react-icons/fa"
import { BiDollarCircle } from "react-icons/bi";
import { BsGift } from "react-icons/bs"
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";


const AdminMenuItem = [
    {
        name: "Resources",
        icon: <RiUser2Line />,
    },
    {
        name: "Contracts",
        icon: <RiBriefcaseLine />,
    },

    {
        name: "Timesheets",
        icon: <AiOutlineClockCircle />,
    },
    {
        name: "Companies",
        icon: <RiBuildingLine />,
    },
    {
        name: "Documents",
        icon: <HiOutlineDocumentDuplicate />,
    },
    {
        name: "Invoices",
        icon: <FaFileInvoice />,
    },
    {
        name: "Payroll",
        icon: <BiDollarCircle />,
    },
    {
        name: "Benefits",
        icon: <BsGift />,
    },
    {
        name: "Mail Template",
        icon: <AiOutlineMail />,
    },
    {
        name: "Genral Settings",
        icon: <RiFileSettingsLine />,
    },

];

export default AdminMenuItem;
