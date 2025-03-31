import { useEffect, useRef } from "react";

function Fools() {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const playMedia = async () => {
      try {
        await audioRef.current.play();
        await videoRef.current.play();
      } catch (error) {
        console.error("Autoplay blocked:", error);
      }
    };

    playMedia();
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/kot_geter.mp3" />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="flex items-center justify-center min-h-screen">
          <div
            className="text-center text-4xl md:text-6xl font-extrabold"
            style={{ transform: "translateY(-10%)" }} // Adjust vertical position
          >
            <h1>Computer Club wishes you a</h1>
            <div className="text-yellow-400 animate-bounce inline-block mt-2">
              Happy April's Fools!
            </div>
            <div
              className="mt-5 relative w-full"
              style={{ paddingTop: "56.25%" }}
            >
              <video
                ref={videoRef}
                src="/kot_gueter.mp4"
                autoPlay
                className="absolute top-0 left-0 w-full h-full"
                muted
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fools;
