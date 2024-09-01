import logo from "@/assets/footer-logo.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="px-8 pt-10 pb-20 flex flex-col md:flex-row gap-8 sm:justify-between items-start dark-bg text-white">
      <img src={logo} alt="logo" width={150} className="object-contain" />
      <div className="flex flex-col gap-3">
        <h1 className="text-lg text-gray-400">О компании</h1>
        <ul className="list-none flex flex-col gap-3">
          <li>
            <a href="">Услуги</a>
          </li>
          <li>
            <a href="">Неисправности</a>
          </li>
          <li>
            <a href="">Контакты</a>
          </li>
          <li>
            <a href="">Вопросы</a>
          </li>
          <li>
            <a href="">О нас</a>
          </li>
        </ul>
      </div>
      <div className=" flex flex-col gap-3">
        <h1 className="text-lg text-gray-400">Контакты</h1>
        <ul className="list-none flex flex-col gap-3">
          <li>г. Минск, ул. Могилевская 5, к.1</li>
          <li>
            <a href="tel:998999999999">+998 99 999 99 99</a>
          </li>
          <li>
            <a href="mailto:something@gmail.com">something@gmail.com</a>
          </li>
          <li>
            <ul className="flex gap-3 list-none items-center">
              <li>
                <a href="">
                  <AiFillInstagram size={25} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTelegram size={24} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaYoutube size={25} />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <p className="text-lg text-gray-400">© Все права защищены, {date}</p>
    </footer>
  );
};

export default Footer;
