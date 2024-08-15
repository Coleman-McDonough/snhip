import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-4 sm:py-8 md:py-20">
        <div className="container -mb-12 md:-mb-24">
          <SectionTitle
            title="ABOUT US"
            paragraph="SNH Industrial park is an expansive project providing an atmosphere of local charm. Our park hosts some of the largest companies in the region as we ensure efficiency both logistically and spatially speaking. We have over 1,000,000 square feet in state of the art commercial space which is fully customizable and integratable. Our intentions are to integrate cutting edge automative systems to reduce overhead and elaborate for more stream lined logistical workflow processes."
            center
          />
          {/*
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          */}
        </div>
      </section>
    </>
  );
};

export default Features;
