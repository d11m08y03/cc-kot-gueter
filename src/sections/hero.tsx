import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-2">
          <div className="flex justify-center items-center">
            <img
              src="/CC-logo.png"
              alt="Hero section demo image showing interface components"
              className="w-full max-w-[100px] sm:max-w-[200px] rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
              Get Ready for the 2025 laser tag
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Welcome to the official website of the UoM Appcup 2024. This year,
              it's going to be bigger, and packed with more amazing prizes and
              surprises. Your favourite hackathon will have an anime vibe, so
              put on your CODE-DM gears and join fellow tech clans and otakus
              for an eventful 3-day coding journey.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Dialog>
                <DialogTrigger>
                  <Button
                    size="lg"
                    className="text-xl font-bold hover:bg-gray-800 cursor-pointer"
                  >
                    Register
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <p className="text-xl text-center">
                    Computer Club wishes you a
                  </p>
                  <div className="text-yellow-400 text-center text-xl animate-bounce inline-block">
                    Happy April's Fools!
                  </div>

                  <div style={{ borderRadius: "8px", overflow: "hidden" }}>
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                      playing={true}
                      controls
                      width="100%"
                      height="300px"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
