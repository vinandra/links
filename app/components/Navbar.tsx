import png from "./profile.jpeg";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className='grid grid-rows-3 gap-2'>
      <div className='col-span-1 row-span-2 w-24'>
        <img src={png} alt='./' className='rounded-full' />
      </div>
      <h1 className='col-span-2 font-bold text-2xl'>vinandra</h1>
      <h3 className='col-span-2'>Javascript Programer // ui ux design</h3>
      <ul className='flex col-span-3'>
        <li>
          <FaTiktok />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaYoutube />
        </li>
        <li>
          <FaInstagramSquare />
        </li>
      </ul>
    </div>
  );
}
