import CallIcon from "../../assets/icons/CallIcon";
import Image from "../../assets/images/image-4.png";
import { Button } from "../Button/Button";
function ContactUs() {
  return (
    <div className="mx-14 flex items-center justify-between rounded-md border-4 border-blue-primary-color-200 bg-bluishGradient p-12">
      <img src={Image} alt="image" />
      <div className="flex flex-col">
        <h2 className="font-comfortaa text-[2.5rem]  font-semibold text-grey-primary-color-100">
          Software Problem Solution. Order Now and Save 15%
        </h2>
        <div className=" flex items-center gap-8">
          <p className="text-xl text-grey-primary-color-100/80">
            We are happy to serve you, Channakya Software
          </p>
          <Button
            icon={
              <CallIcon
                width={24}
                height={24}
                className="fill-grey-primary-color-100"
              />
            }
            className="border-transparent px-12 py-[0.8rem]"
            label="Call us"
            btnType="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
