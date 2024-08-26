import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="hero-bg-image px-8 pt-28 md:pt-40 pb-20 flex flex-col gap-20 justify-center items-center text-center">
      <h1 className="text-white font-semibold text-5xl leading-[70px]">
        Крупнейший автосервис ZEEKR в Беларуси
      </h1>

      <div className="flex flex-col gap-4 items-center px-8">
        <p className="text-white font-medium text-xl">
          Гарантия на ремонт Zeekr 1 год
        </p>
        <p className="text-white font-medium text-xl">
          Специализированное оборудование Zeekr
        </p>
        <p className="text-white font-medium text-xl">
          Дешевле, чем в других автосервисах до 45%
        </p>
      </div>

      <Button className="gray-bg  hover:bg-gray-300 text-black w-80 text-xl font-normal py-7">
        Получить консультацию
      </Button>
    </section>
  );
};

export default Hero;
