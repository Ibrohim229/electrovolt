import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center px-10 text-center py-20 sm:flex-row sm:gap-28">
      <h1 className="text-lg font-normal">
        <span className="text-4xl font-semibold">
          более <CountUp end={12000} duration={3} />{" "}
        </span>{" "}
        <br />
        обслужено клиентов
      </h1>

      <h1 className="text-lg font-normal">
        <span className="text-4xl font-semibold">
          <CountUp end={13} duration={4} /> лет{" "}
        </span>
        <br />
        на рынке ремонта авто
      </h1>

      <h1 className="text-lg font-normal">
        <span className="text-4xl font-semibold">
          <CountUp end={8} duration={5} /> <br /> специалистов{" "}
        </span>
        <br />
        ремонта электрокаров
      </h1>
    </div>
  );
};

export default Stats;
