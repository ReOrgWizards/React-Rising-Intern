import HeroImage from "../../components/HeroSection/HeroImage";
import Overview from "../../components/HeroSection/Overview";

const Home = () => {
  return (
    <section className="relative flex h-[70vh] w-full items-start justify-around">
      <HeroImage />
      <Overview />
    </section>
  );
};

export default Home;
