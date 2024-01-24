import CallIcon from "../../assets/icons/CallIcon";
import MailIcon from "../../assets/icons/MailIcon";
import { Button } from "../Button/Button";

const Overview = () => {
  return (
    <div className="flex h-full w-[37rem] flex-col justify-start gap-10">
      <h1 className="text-4xl font-bold uppercase text-blue-primary-color-400">
        Channakya Demo Project
      </h1>
      <h2 className="w-[36rem] text-5xl uppercase leading-[60px] text-blue-primary-color-600">
        <span className="block">Channakya Software</span>
        <span className="rounded-md py-2 pr-4">for a</span>
        <span className="rounded-md px-4 ">Better Software</span>
      </h2>
      <p className="mt-[-1rem] text-xsm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
        itaque illo soluta dolor repellendus. Esse deleniti earum voluptate
        iusto est. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eum, quidem?
      </p>
      <div className=" flex items-center gap-4">
        <Button
          icon={
            <CallIcon
              width={24}
              height={24}
              className="fill-grey-primary-color-100"
            />
          }
          label="Call us"
          btnType="primary"
        />
        <Button
          icon={
            <MailIcon
              width={24}
              height={24}
              className="fill-blue-primary-color-400"
            />
          }
          label="Mail us"
          btnType="secondary"
        />
      </div>
    </div>
  );
};

export default Overview;
