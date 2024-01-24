import HeroImage from "../../components/HeroSection/HeroImage";
import Overview from "../../components/HeroSection/Overview";
import Services from "../../components/Services/Services";
import WorkCount from "../../components/WorkCount/WorkCount";

const Home = () => {
  return (
    <>
      <section className="relative flex h-[80vh] w-full items-start justify-around p-16">
        <HeroImage />
        <Overview />
      </section>
      <section className="relative flex items-center justify-center">
        <WorkCount />
        <Services />
      </section>
    </>
  );
};

export default Home;
