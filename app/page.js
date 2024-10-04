import About from "./components/about";
import EventDetails from "./components/details";
import Sponsors from "./components/details";
import Divider from "./components/divider";
import Footer from "./components/footer";
import Hero from "./components/hero";
export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Hero />
        <EventDetails />
        {/* <Sponsors /> */}
        <About />
        <Divider />
        <Footer />
      </div>
    </>
  );
}
