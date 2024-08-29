import aboutUsImg from "@/assets/about-us-img-new-scaled.jpg";
import { aboutInfo } from "../../index";

const About = () => {
  return (
    <section className="px-8 pt-24 pb-20 flex flex-col gap-10 lg:gap-16 medium-gray-bg">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-14">
        <div className="flex flex-col gap-10 lg:gap-14">
          <h1 className="text-4xl font-semibold">Автосервис ZEEKRMINSK</h1>
          <p className="md:text-xl text-lg">
            Мы — ведущая компания в Минске, специализирующаяся на ремонте и
            обслуживании автомобилей Zeekr. Если ваш Zeekr нуждается в
            профессиональном восстановлении, вы обратились по адресу! Почему
            выбирают нас?
          </p>
        </div>
        <img
          src={aboutUsImg}
          alt="about us"
          className="w-full h-full lg:w-[500px]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aboutInfo.map((item) => (
          <div className="flex flex-col gap-3" key={item.id}>
            <img src={item.icon} alt="icon" width={50} />
            <h1 className="text-lg md:text-xl font-semibold">{item.title}</h1>
            <p className="text-base md:text-lg text-[#707171]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
