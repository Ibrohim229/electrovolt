import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import logo from "/src/assets/logo-header.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";

import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-5 px-6 py-4 gray-bg fixed right-0 left-0 shadow-md">
      <div className="flex justify-between items-center ">
        <Sheet>
          <SheetTrigger className="md:hidden">
            <RxHamburgerMenu size={35} />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader className="flex flex-col gap-5 items-start pt-10 pl-5">
              <SheetTitle className="cursor-pointer">Модели</SheetTitle>
              <SheetTitle className="cursor-pointer">Услуги</SheetTitle>
              <SheetTitle className="cursor-pointer">Неисправности</SheetTitle>
              <SheetTitle className="cursor-pointer">О нас</SheetTitle>
              <SheetTitle className="cursor-pointer">Вопросы</SheetTitle>
              <SheetTitle className="cursor-pointer">Контакты</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div>
          <img src={logo} alt="LOGO" width={150} />
        </div>

        <div className="md:hidden">
          <a href="tel:+998999999999">
            <FaPhoneAlt size={30} />
          </a>
        </div>

        <ul className="md:hidden xl:flex  gap-8 hidden justify-between items-center text-lg">
          <li className=" cursor-pointer">Модели</li>
          <li className=" cursor-pointer">Услуги</li>
          <li className=" cursor-pointer">Неисправности</li>
          <li className=" cursor-pointer">О нас</li>
          <li className=" cursor-pointer">Вопросы</li>
          <li className=" cursor-pointer">Контакты</li>
        </ul>

        <div className="md:flex hidden gap-8 items-center">
          <a href="tel:+998999999999" className="text-lg font-semibold">
            +998 99 999 99 99
          </a>
          <ul className="flex gap-3 list-none items-center">
            <li>
              <a href="">
                <AiFillInstagram size={30} />
              </a>
            </li>
            <li>
              <a href="">
                <FaTelegram size={26} />
              </a>
            </li>
            <li>
              <a href="">
                <FaYoutube size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <ul className="md:flex hidden xl:hidden justify-between items-center text-lg">
        <li className=" cursor-pointer">Модели</li>
        <li className=" cursor-pointer">Услуги</li>
        <li className=" cursor-pointer">Неисправности</li>
        <li className=" cursor-pointer">О нас</li>
        <li className=" cursor-pointer">Вопросы</li>
        <li className=" cursor-pointer">Контакты</li>
      </ul>
    </div>
  );
};

export default Navbar;
