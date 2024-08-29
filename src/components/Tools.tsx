import { toolsInfo } from "../../index";

const Tools = () => {
  return (
    <section className="px-8 pt-20 pb-20 flex flex-col gap-20">
      <h1 className="text-2xl font-semibold leading-9 md:text-4xl md:leading-[50px] lg:text-center">
        Не откладывайте ремонт своего Zeekr на потом!{" "}
        <span className="text-[#707171] font-normal">
          Обратитесь к нам сегодня и доверьте свой автомобиль экспертам. Мы
          сделаем все возможное, чтобы ваш Zeekr снова был
        </span>{" "}
        в идеальном состоянии!
      </h1>

      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-semibold">Оборудование</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-14">
          {toolsInfo.map((item) => (
            <div className="flex flex-col gap-4" key={item.id}>
              <img
                src={item.img}
                alt="tool"
                className="w-full h-full md:w-[500px]"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <p className="tex-lg font-normal">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
