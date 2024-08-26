import { FaArrowRight } from "react-icons/fa";
import { Button } from "./ui/button";

const RepairInfo = ({ text, price }: { text: string; price: number }) => {
  return (
    <div className="flex items-center justify-between border border-b-gray-400 pb-4">
      <div className="flex flex-col">
        <p className="text-lg font-normal">{text}</p>
        <p className="text-lg font-bold">от {price} BYN</p>
      </div>
      <Button className="w-20 h-12 bg-black">
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default RepairInfo;
