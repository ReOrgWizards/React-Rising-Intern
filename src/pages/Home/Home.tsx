import HeroImage from "../../components/HeroSection/HeroImage";
import Overview from "../../components/HeroSection/Overview";
import Services from "../../components/Services/Services";
import WorkCount from "../../components/WorkCount/WorkCount";
import Card from "../../components/card/Card";

const Home = () => {
  return (
    <>
      <section className="relative flex w-full items-start justify-around px-16 pb-36 pt-16">
        <HeroImage />
        <Overview />
      </section>
      <section className="relative flex items-center justify-center">
        <WorkCount />
        <Services />
        <Card />
      </section>
    </>
  );
};

export default Home;
