import { Button } from "../Button/Button";
import CallIcon from "./../../assets/icons/Call.svg";
import MailIcon from "./../../assets/icons/Mail.svg";

const Overview = () => {
  return (
    <div className="flex h-full w-[36rem] flex-col justify-evenly">
      <h1 className="text-4xl font-semibold uppercase text-blue-primary-color-400">
        Channakya Demo Project
      </h1>
      <h2 className="relative text-6xl uppercase leading-[80px] text-blue-primary-color-600">
        <span className="block">Septic solutions</span>
        <p>
          <span className="rounded-md py-2 pr-4">for a</span>
          <span className="rounded-md bg-bluishGradient px-4 py-[6px] text-grey-primary-color-100">
            Healthy
          </span>
        </p>
        <span className="rounded-md bg-bluishGradient px-4 py-[6px] text-grey-primary-color-100">
          Nepal
        </span>
      </h2>
      <p className="text-xsm">
        Establishing Clean Environments, One Septic Solution at a Time. Proudly
        Serving Kathmandu, Lalitpur, and Bhaktapur Communities for Reliable
        Waste Management
      </p>
      <div className="flex items-center justify-between">
        <Button
          icon={CallIcon}
          label="Call us"
          btnType="primary"
          labelType="secondary"
        />
        <Button
          icon={MailIcon}
          label="Mail us"
          btnType="secondary"
          labelType="primary"
        />
      </div>
    </div>
  );
};

export default Overview;
