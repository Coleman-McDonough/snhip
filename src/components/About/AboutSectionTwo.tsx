import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="bg-primary py-16 md:px-48 md:py-20 lg:px-48 lg:py-28  xl:px-64">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="bg-gray-300 p-10 text-center text-2xl text-gray-800 sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
              HOME TO THE LARGEST COMPANIES IN NEWTON!
            </h3>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="dark:text-white mb-4 text-xl font-bold text-black underline sm:text-2xl lg:text-xl xl:text-2xl">
                  {`-FREE REGISTRATION`}
                </h3>
                <h3 className="dark:text-white mb-4 text-xl font-bold text-black underline sm:text-2xl lg:text-xl xl:text-2xl">{`-NO HIDDEN FEES`}</h3>
              </div>
              <div className="mb-1 flex items-center justify-center bg-gray-300 p-3">
                <div className="relative h-[75px] w-[75px] flex-shrink-0">
                  <Image
                    src="/images/about/map.png"
                    alt="about-image"
                    layout="fill" // Ensures it fills the parent container while maintaining aspect ratio
                    objectFit="contain" // Ensures it maintains aspect ratio within the container
                    className="dark:hidden dark:drop-shadow-none mx-auto drop-shadow-three"
                  />
                </div>
                <div className="ml-4 flex flex-col">
                  <h3 className="dark:text-white sm:text-md mb-4 text-xl font-bold text-black lg:text-lg xl:text-xl">
                    OFFICE LOCATIONS ON SITE
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Convenience guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
