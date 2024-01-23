import Image1 from "./../../assets/images/image-1.png";

const HeroImage = () => {
  return (
    <div>
      <img
        src={Image1}
        alt="Image"
        className="absolute z-10 w-[595px] translate-y-[-20]"
      />
      <div className="h-[450px] w-[520px] translate-x-[40px] translate-y-[30px] rotate-[-10deg] rounded-md bg-blue-primary-color-200"></div>
    </div>
  );
};

export default HeroImage;
