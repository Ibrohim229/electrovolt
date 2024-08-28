import { Button } from "./ui/button";

const ServicesInfo = ({ text, price }: { text: string; price: number }) => {
  return (
    <div className="flex flex-col justify-between gap-7 py-4 px-6 medium-gray-bg rounded-md">
      <div className="flex flex-col">
        <p className="text-xl font-normal">{text}</p>
        <p className="text-xl font-bold">от {price} BYN</p>
      </div>

      <Button className="bg-white text-black text-lg font-medium hover:text-white w-full">
        Заказать
      </Button>
    </div>
  );
};

export default ServicesInfo;
