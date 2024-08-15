import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:px-32 lg:pt-28 xl:px-64">
      <div className="container">
        <div className="dark:border-white/[.15] border-b border-body-color/[.15] pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="m-2 items-center justify-center text-2xl font-bold text-primary lg:text-3xl xl:text-4xl">
                THE PERFECT LOGISTICAL LOCATION FOR MAXIMUM EFFICIENCY IN
                SOUTHERN NEW HAMPSHIRE
              </h3>
              <p className="py-8 text-gray-700">
                SNH Industrial Park is located just minutes from Routes 495, 95
                and 125. Designed to accommodate all your company needs, the
                site comprises 270 acres of high-quality office, flex,
                industrial and retail units suitable for a diverse range of
                business types.
              </p>

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <Image
                    src="/images/about/SNHIP_Map.png"
                    alt="about-image"
                    width={570} // Replace with the original width of your image
                    height={380} // Replace with the original height of your image
                    className="dark:hidden dark:drop-shadow-none mx-auto max-w-full drop-shadow-three"
                  />
                </div>
              </div>
            </div>

            <div className="w-full items-center px-4 lg:w-1/2">
              <h1 className="mb-4 text-center text-3xl font-bold text-primary underline lg:text-5xl">
                LOCATION
              </h1>
              <div className="relative mx-auto max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/newton_map.png"
                  alt="about-image"
                  width={435} // Replace with the original width of your image
                  height={594} // Replace with the original height of your image
                  className="dark:hidden dark:drop-shadow-none mx-auto max-w-full drop-shadow-three lg:mr-0"
                />
                <Image
                  src="/images/about/newton_map.png"
                  alt="about-image"
                  width={435} // Replace with the original width of your image
                  height={594} // Replace with the original height of your image
                  className="dark:block dark:drop-shadow-none mx-auto hidden max-w-full drop-shadow-three lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
