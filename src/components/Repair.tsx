import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import zeekr1 from "@/assets/auto-service-zeek-001.png";
import zeekr2 from "@/assets/auto-service-zeek-x.png";
import zeekr3 from "@/assets/auto-service-zeek-007.png";
import zeekr4 from "@/assets/auto-service-zeek-009.png";
import RepairInfo from "./RepairInfo";

const Repair = () => {
  return (
    <section className="px-8 pt-28 pb-20 flex flex-col gap-10 bg-[#E4E4E4]">
      <h1 className="text-4xl font-semibold">
        Выберите свой ZEEKR с неисправностью, и мы исправим ее
      </h1>

      <Tabs defaultValue="zeekr1" className="">
        <TabsList className="h-14 flex gap-3 flex-wrap">
          <TabsTrigger value="zeekr1" className="text-xl px-8 py-2">
            Zeekr 001
          </TabsTrigger>
          <TabsTrigger value="zeekr2" className="text-xl px-8 py-2">
            Zeekr X
          </TabsTrigger>
          <TabsTrigger value="zeekr3" className="text-xl px-8 py-2">
            Zeekr 007
          </TabsTrigger>
          <TabsTrigger value="zeekr4" className="text-xl px-8 py-2">
            Zeekr 009
          </TabsTrigger>
        </TabsList>
        <TabsContent value="zeekr1">
          <img src={zeekr1} alt="" className="w-[22rem]" />
          <div className="flex flex-col gap-5 mt-8">
            <RepairInfo text="Горит ошибка по пневмоподвеске" price={100} />
            <RepairInfo text="Проблема с мультимедиа" price={100} />
            <RepairInfo text="Не открывается" price={100} />
            <RepairInfo text="Хруст/шум при движении" price={40} />
            <RepairInfo text="Стук/скрип подвески" price={40} />
            <RepairInfo text="Не дует теплый воздух" price={100} />
            <RepairInfo text="Проблемы с зарядкой" price={100} />
            <RepairInfo text="Отсутствует Интернет" price={100} />
            <RepairInfo text="Разрядился аккумулятор" price={40} />
            <RepairInfo text="Не открывается багажник" price={40} />
            <RepairInfo text="Не закрывается багажник" price={40} />
            <RepairInfo text="Не работают парктроники" price={100} />
            <RepairInfo text="Не работают камеры 360" price={100} />
            <RepairInfo text="Ошибки на приборной панели" price={100} />
          </div>
        </TabsContent>
        <TabsContent value="zeekr2">
          <img src={zeekr2} alt="" className="w-[22rem]" />
          <div className="flex flex-col gap-5 mt-8">
            <RepairInfo text="Горит ошибка по пневмоподвеске" price={100} />
            <RepairInfo text="Проблема с мультимедиа" price={100} />
            <RepairInfo text="Не открывается" price={100} />
            <RepairInfo text="Хруст/шум при движении" price={40} />
            <RepairInfo text="Стук/скрип подвески" price={40} />
            <RepairInfo text="Не дует теплый воздух" price={100} />
            <RepairInfo text="Проблемы с зарядкой" price={100} />
            <RepairInfo text="Отсутствует Интернет" price={100} />
            <RepairInfo text="Разрядился аккумулятор" price={40} />
            <RepairInfo text="Не открывается багажник" price={40} />
            <RepairInfo text="Не закрывается багажник" price={40} />
            <RepairInfo text="Не работают парктроники" price={100} />
            <RepairInfo text="Не работают камеры 360" price={100} />
            <RepairInfo text="Ошибки на приборной панели" price={100} />
          </div>
        </TabsContent>
        <TabsContent value="zeekr3">
          <img src={zeekr3} alt="" className="w-[22rem]" />
          <div className="flex flex-col gap-5 mt-8">
            <RepairInfo text="Горит ошибка по пневмоподвеске" price={100} />
            <RepairInfo text="Проблема с мультимедиа" price={100} />
            <RepairInfo text="Не открывается" price={100} />
            <RepairInfo text="Хруст/шум при движении" price={40} />
            <RepairInfo text="Стук/скрип подвески" price={40} />
            <RepairInfo text="Не дует теплый воздух" price={100} />
            <RepairInfo text="Проблемы с зарядкой" price={100} />
            <RepairInfo text="Отсутствует Интернет" price={100} />
            <RepairInfo text="Разрядился аккумулятор" price={40} />
            <RepairInfo text="Не открывается багажник" price={40} />
            <RepairInfo text="Не закрывается багажник" price={40} />
            <RepairInfo text="Не работают парктроники" price={100} />
            <RepairInfo text="Не работают камеры 360" price={100} />
            <RepairInfo text="Ошибки на приборной панели" price={100} />
          </div>
        </TabsContent>
        <TabsContent value="zeekr4">
          <img src={zeekr4} alt="" className="w-[22rem]" />
          <div className="flex flex-col gap-5 mt-8">
            <RepairInfo text="Горит ошибка по пневмоподвеске" price={100} />
            <RepairInfo text="Проблема с мультимедиа" price={100} />
            <RepairInfo text="Не открывается" price={100} />
            <RepairInfo text="Хруст/шум при движении" price={40} />
            <RepairInfo text="Стук/скрип подвески" price={40} />
            <RepairInfo text="Не дует теплый воздух" price={100} />
            <RepairInfo text="Проблемы с зарядкой" price={100} />
            <RepairInfo text="Отсутствует Интернет" price={100} />
            <RepairInfo text="Разрядился аккумулятор" price={40} />
            <RepairInfo text="Не открывается багажник" price={40} />
            <RepairInfo text="Не закрывается багажник" price={40} />
            <RepairInfo text="Не работают парктроники" price={100} />
            <RepairInfo text="Не работают камеры 360" price={100} />
            <RepairInfo text="Ошибки на приборной панели" price={100} />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Repair;
