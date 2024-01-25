import ArrowDownIcon from "../../assets/icons/ArrowDown";
import Image3 from "../../assets/images/image-3.jpg";
import { Button } from "../Button/Button";

function Card() {
  return (
    <div className="absolute">
      <div className="shadow-normal-shadow h-[422px] w-[415px] rounded-md bg-white">
        <img src={Image3} alt="image" />
        <div className="px-6 py-2">
          <h3>Septic Tank Pumping</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            tempora magni autem consequatur ratione mollitia nostrum neque
            quisquam. Ipsa natus fuga corporis nam impedit
          </p>
          <div>
            <Button
              label="View Details"
              btnType="primary"
              className="flex-row-reverse gap-4 px-8 py-2 "
              icon={
                <ArrowDownIcon
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
