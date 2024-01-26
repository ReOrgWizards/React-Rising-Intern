import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";
import Image3 from "../../assets/images/image-3.jpg";
import { Button } from "../Button/Button";
function Card() {
  return (
    <div>
      <div className="shadow-normal-shadow h-[422px] w-[415px] overflow-hidden rounded-md bg-white">
        <img src={Image3} alt="image" />
        <div className="flex flex-col gap-6 px-6 py-2">
          <h3 className="font-comfortaa text-3xl font-bold text-blue-primary-color-400">
            Software Development
          </h3>
          <p className="text-grey-primary-color-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            tempora magni autem consequatur ratione mollitia nostrum neque
          </p>
          <div className="flex items-center justify-between">
            <Button
              label="View Details"
              btnType="primary"
              className="flex-row-reverse gap-4 px-8 py-2 "
              icon={
                <ArrowRightIcon
                  width={20}
                  height={20}
                  className="fill-grey-primary-color-400"
                />
              }
            />
            <span>01</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
