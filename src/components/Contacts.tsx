import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram, FaYoutube } from "react-icons/fa";

const Contacts = () => {
  return (
    <section className="px-8 pt-10 pb-20 flex flex-col md:justify-between md:flex-row gap-10">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-semibold">Контакты</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-x-12">
          <div className="flex flex-col">
            <h1 className="text-lg ">Адрес:</h1>
            <p className="text-xl font-semibold">
              г. Минск, ул. Могилевская 5, к.1
            </p>
          </div>

          <div className="flex flex-col">
            <h1 className="text-lg ">Номер телефона:</h1>
            <a
              className="text-xl font-semibold cursor-pointer hover:opacity-50 transition-all"
              href="tel:998999999999"
            >
              +998 99 999 99 98
            </a>
          </div>

          <div className="flex flex-col">
            <h1 className="text-lg ">Электронная почта:</h1>
            <a
              className="text-xl font-semibold cursor-pointer hover:opacity-50 transition-all"
              href="mailto:something@gmail.com"
            >
              anything@gmail.com
            </a>
          </div>
        </div>

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

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12204.732547725596!2d69.22141762063076!3d41.32072836754381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf966c999c9%3A0x4304a24c038a7868!2sTuninghouse.gulobod!5e0!3m2!1sru!2s!4v1725106205487!5m2!1sru!2s"
        className="w-full h-[300px] md:w-[500px] shadow-md rounded-xl"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default Contacts;
