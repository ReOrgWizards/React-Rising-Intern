import { motion } from "framer-motion";
import CallIcon from "../../assets/icons/CallIcon";
import {
  animateButton1,
  animateButton2,
  animateButton3,
  initialButton1,
  initialButton2,
  initialButton3,
  transitionButton1,
  transitionButton2,
  transitionButton3,
} from "../../shared/animation";
import { Button } from "../Button/Button";
import Image1 from "./../../assets/images/image-1.png";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        initial={{ rotate: "-8deg" }}
        animate={{ rotate: "0deg" }}
        transition={{ duration: 1 }}
        src={Image1}
        alt="Image"
        className="absolute z-10 w-[595px] translate-y-[-20]"
      />
      <motion.div
        initial={{ rotate: "0deg", translateX: "45px", translateY: "10px" }}
        animate={{ rotate: "-8deg", translateX: "45px", translateY: "10px" }}
        transition={{ duration: 1 }}
        className="h-[450px] w-[520px] rotate-[-10deg] rounded-md bg-blue-primary-color-200"
      ></motion.div>
      <div className="absolute left-20 top-[32%] z-20 flex flex-col items-center justify-center gap-2">
        <Button
          initial={initialButton1}
          animate={animateButton1}
          transition={transitionButton1}
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
          initial={initialButton2}
          animate={animateButton2}
          transition={transitionButton2}
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
          initial={initialButton3}
          animate={animateButton3}
          transition={transitionButton3}
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
    </motion.div>
  );
};

export default HeroImage;
