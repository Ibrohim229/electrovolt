import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Questions = () => {
  return (
    <section className="px-8 pb-20 flex flex-col gap-10">
      <h1 className="text-4xl font-semibold">
        Что у нас спрашивают чаще всего?
      </h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl flex gap-8 text-left">
            Что такое Мастер Аккаунт (МА) и как его получить?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Мастер Аккаунт получает первый владелец на свой китайский номер
            телефона при покупке автомобиля ZEEKR у дилера в Китае. Наличие
            Мастер Аккаунта позволяет управлять автомобилем с расширенными
            функциями в мобильном приложении ZEEKR. Владелец МА может передать
            следующему владельцу ТОЛЬКО Фэмили Аккаунт (ФА). Это аккаунт с
            ограниченными возможностями использования.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl flex gap-8 text-left">
            Что такое инженерное меню и для чего оно нужно?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Инженерное меню (меню отладки) — это открытый доступ к программному
            обеспечению автомобиля ZEEKR. Открытие инженерного меню позволяет
            устанавливать на автомобиль ZEEKR русский язык, различные
            приложения, заменить часовой пояс и т. д.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl flex gap-8 text-left">
            Какой регламент на обслуживание автомобиля ZEEKR?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Обслуживание автомобиля ZEEKR согласно рекомендаций завода
            изготовителя зависит от конкретной модели. Например, ZEEKR 001 ТО-0
            — сделать до 5000 км, ТО-1 — 20000 км, ТО-2 — 40000 км, и каждые
            последующие 20000 км. Также рекомендуем на пробеге 3 000 км и
            последующие 10 000 км проверять или производить замену масла в
            редукторах автомобилей ZEEKR.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl flex gap-8 text-left">
            Как можно обновить автомобиль до актуальной версии прошивки?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Существует два способа: 1. Осуществляется при помощи дилерского
            оборудования. 2. «По воздуху» при использовании Интернета в самом
            автомобиле.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl flex gap-8 text-left">
            Существует ли гарантия на автомобили ZEEKR в Республике Беларусь?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            На сегодняшний день на территории РБ гарантия на автомобили ZEEKR не
            осуществляется в связи с отсутствием официального дилера ZEEKR. В
            связи с этим некоторые компании-поставщики предлагают гарантию на
            автомобили от своего юридического лица.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Questions;
