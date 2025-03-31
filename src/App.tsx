import { Hero } from "./sections/hero";
import { Team2 } from "./sections/organisor";

const App = () => {
	console.log("Kot Geter")
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="container mx-auto px-5 lg:px-30">
          <Hero />
          <Team2 />
        </div>
      </div>
    </>
  );
};

export default App;
