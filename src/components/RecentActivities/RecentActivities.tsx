import Slider from "../Slider/Slider";
import Card from "../card/Card";

function RecentActivities() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center px-[30rem] py-20  text-center">
        <h2 className="mb-6 font-comfortaa text-5xl font-bold text-blue-primary-color-600">
          Our Recent Activities
        </h2>
        <p className=" font-lato text-xl leading-8 text-grey-primary-color-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          fugit tenetur numquam nemo quaerat voluptate ut cupiditate laborum.
          Atque, expedita? Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div className="flex flex-col">
        <div className="gap flex w-full items-center justify-between px-14">
          <Card />
          <Card />
          <Card />
        </div>
        <Slider />
      </div>
    </div>
  );
}

export default RecentActivities;
