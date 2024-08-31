import { teamInfo } from "../../index";

const Team = () => {
  return (
    <section className="px-8  pb-20 flex flex-col gap-10">
      <h1 className="text-4xl font-semibold">Команда</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
        {teamInfo.map((item) => (
          <div className="flex flex-col gap-4" key={item.id}>
            <img
              src={item.img}
              alt="tool"
              className="w-full h-[400px] object-cover object-top md:w-[500px] lg:w-[300px]"
            />
            <div className="flex flex-col ">
              <h1 className="text-xl font-semibold">{item.name}</h1>
              <p className="tex-lg font-normal">{item.job}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
