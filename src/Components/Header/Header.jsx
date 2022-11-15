import React, {useState} from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import Modal from './Modal'
import header from '../../images/header.svg'


const Header = () => {
    const [nav, setNav] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    const links = [
      {
        id: 1,
        link: "Home",
      },
      {
        id: 2,
        link: "Place to stay",
      },
      {
        id: 3,
        link: "NFTs",
      },
      {
        id: 4,
        link: "Community",
      },
    ];

  return (
    <>
      <div className="flex justify-between items-center w-full h-20 px-5 md:px-12 lg:px-20 text-black bg-transparent max-w-[1440px] mx-auto">
        <div>
          <a href="@">
            <img
              src={header}
              alt="logo"
              className="lg:w-[230px] lg:h-[36px] w-[200px] h-[30px]"
            />
          </a>
        </div>
        <ul className="md:flex hidden">
          {links.map((link, id) => (
            <li
              key={link.id}
              className="px-2 lg:px-4 cursor-pointer hover:scale-105 duration-200 text-[15px] lg:text-[20px]  text-[#434343]"
            >
              {link.link}
            </li>
          ))}
        </ul>
        <button
          className="hidden md:block rounded-[10px] bg-gradient-to-r from-[#A02279] to-[#A02279] text-white text-[16px] p-3 hover:opacity-6 duration-200"
          onClick={() => setOpenModal(true)}
        >
          Connect wallet
        </button>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-20 text-gray-300 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <>
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-500 ease-in-out-500 z-10">
              {/* {links.map((link, id) => (
                <li
                  key={link.id}
                  className="px-4 cursor-pointer py-6 text-4xl hover:scale-105 duration-200"
                >
                  {link.link}
                </li>
              ))} */}
              <button
                className="rounded-[10px] bg-gradient-to-r from-[#A02279] to-[#A02279] text-white text-3xl p-4 px-6 hover:opacity-6 duration-200"
                onClick={() => setOpenModal(true)}
              >
                Connect wallet
              </button>
            </ul>
          </>
        )}
      </div>
      {openModal && <Modal closeModal={() => setOpenModal(false)} />}
    </>
  );
}

export default Header