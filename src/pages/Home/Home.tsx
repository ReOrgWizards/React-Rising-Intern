import ContactUs from "../../components/ContactUs/ContactUs";
import HeroImage from "../../components/HeroSection/HeroImage";
import Overview from "../../components/HeroSection/Overview";
import RecentActivities from "../../components/RecentActivities/RecentActivities";
import Services from "../../components/Services/Services";
import Slider from "../../components/Slider/Slider";
import WorkCount from "../../components/WorkCount/WorkCount";
import Card from "../../components/card/Card";

const Home = () => {
  return (
    <>
      <section className="relative flex w-full items-start justify-around px-10 pb-36 pt-16">
        <HeroImage />
        <Overview />
      </section>
      <section className="relative flex flex-col items-center justify-between ">
        <WorkCount />
        <Services />
        <div className="py[34rem] absolute top-[21.5rem] flex w-full items-center justify-between px-14">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-full pt-[16rem]">
          <Slider />
        </div>
        <ContactUs />
        <RecentActivities />
      </section>
    </>
  );
};

export default Home;
