import CallIcon from "../../assets/icons/CallIcon";
import { Button } from "../Button/Button";
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
      <div className="absolute left-6 top-[28%] z-20 flex flex-col items-center justify-center gap-2">
        <Button
          icon={
            <CallIcon
              width={20}
              height={20}
              className="fill-blue-primary-color-400"
            />
          }
          label="981234509"
          btnType="quartinary"
          size="xsm"
        />

        <Button
          icon={
            <CallIcon
              width={20}
              height={20}
              className="fill-blue-primary-color-400"
            />
          }
          label="981234509"
          btnType="quartinary"
          size="xsm"
        />

        <Button
          icon={
            <CallIcon
              width={20}
              height={20}
              className="fill-blue-primary-color-400"
            />
          }
          label="981234509"
          btnType="quartinary"
          size="xsm"
        />
      </div>
    </div>
  );
};

export default HeroImage;
