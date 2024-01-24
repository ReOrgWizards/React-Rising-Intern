import CallIcon from "../../assets/icons/CallIcon";
import MailIcon from "../../assets/icons/MailIcon";
import { Button } from "../Button/Button";

const Overview = () => {
  return (
    <div className="flex h-full w-[36rem] flex-col justify-evenly">
      <h1 className="text-4xl font-semibold uppercase text-blue-primary-color-400">
        Channakya Demo Project
      </h1>
      <h2 className="relative mb-2 text-6xl uppercase leading-[80px] text-blue-primary-color-600">
        <span className="block">Channakya Software</span>
        <p>
          <span className="rounded-md py-2 pr-4">for a</span>
          <span className="relative z-20 rounded-md bg-bluishGradient px-4 py-[6px] text-grey-primary-color-100">
            Better
          </span>
        </p>
        <span className="rounded-md bg-bluishGradient px-8 py-[6px] text-grey-primary-color-100">
          Software
        </span>
      </h2>
      <p className="text-xsm">
        Establishing Clean Environments, One Septic Solution at a Time. Proudly
        Serving Kathmandu, Lalitpur, and Bhaktapur Communities for Reliable
        Waste Management
      </p>
      <div className="flex items-center justify-between">
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
          labelType="secondary"
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
          labelType="primary"
        />
      </div>
    </div>
  );
};

export default Overview;
