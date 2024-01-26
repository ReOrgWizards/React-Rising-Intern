import ArrowLeftIcon from "../../assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";

function Slider() {
  return (
    <div className="my-6 flex w-full items-center justify-between px-20 py-8">
      <div className="flex items-center justify-center gap-4">
        <ArrowLeftIcon className="h-14 w-14 cursor-pointer rounded-full border-[3px] border-blue-primary-color-200 bg-white p-2" />
        <ArrowRightIcon className="h-14 w-14 cursor-pointer rounded-full border-[3px] border-blue-primary-color-200 bg-white p-2" />
      </div>
      <hr className="w-12 border-t-8 border-dotted border-grey-primary-color-200" />
      <a
        href="#"
        className="font-regular font-lato text-blue-primary-color-400"
      >
        View all
      </a>
    </div>
  );
}

export default Slider;
