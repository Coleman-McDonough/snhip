import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative mt-8 h-[50vh] w-full overflow-hidden sm:mt-24 md:mt-48"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute left-0 top-1/2 h-auto w-full -translate-y-1/2 object-cover"
      >
        <source src="videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Text */}
      <div className="absolute inset-0 mb-3 flex items-end justify-center">
        <h1 className="text-2xl font-bold text-white sm:text-5xl md:text-6xl">
          {`INNOVATION, AT IT'S FINEST`}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
