import service1 from "@/assets/serive-img-zeekr-1.jpg";
import service2 from "@/assets/serive-img-zeekr-2.png";
import service3 from "@/assets/serive-img-zeekr-3.jpg";
import ServicesInfo from "./ServicesInfo";

const Services = () => {
  return (
    <section className="px-8 pt-24 pb-20 flex flex-col gap-10 gray-bg">
      <h1 className="text-4xl font-semibold">
        У нас самый большой перечень услуг по сервису ZEEKR
      </h1>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col justify-between gap-7">
          <div className="flex justify-center">
            <img
              src={service1}
              alt=""
              className="w-full h-full md:h-72 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
            <ServicesInfo text="Установка русского языка" price={100} />
            <ServicesInfo text="Установка русского языка" price={100} />
            <ServicesInfo text="Установка русского языка" price={100} />
            <ServicesInfo text="Установка русского языка" price={100} />
            <ServicesInfo text="Установка русского языка" price={100} />
            <ServicesInfo text="Установка русского языка" price={100} />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-7">
          <div className="flex justify-center">
            <img
              src={service2}
              alt=""
              className="w-full h-full md:h-72 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
            <ServicesInfo text="Установка русского языка" price={100} />
            <ServicesInfo text="Установка русского языка" price={100} />
            <ServicesInfo text="Установка русского языка" price={100} />
            <ServicesInfo text="Установка русского языка" price={100} />
            <ServicesInfo text="Установка русского языка" price={100} />
            <ServicesInfo text="Установка русского языка" price={100} />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-7">
          <div className="flex justify-center">
            <img
              src={service3}
              alt=""
              className="w-full h-full md:h-72 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
            <ServicesInfo text="Установка русского языка" price={100} />
            <ServicesInfo text="Установка русского языка" price={100} />
            <ServicesInfo text="Установка русского языка" price={100} />
            <ServicesInfo text="Установка русского языка" price={100} />
            <ServicesInfo text="Установка русского языка" price={100} />
            <ServicesInfo text="Установка русского языка" price={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
