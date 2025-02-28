import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import VisitorTracker from "@/components/VisitorTracker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Southern New Hampshire Industrial Park",
  description:
    "SNH Industrial park is an expansive project providing an atmosphere of local charm. Our park hosts some of the largest companies in the region as we ensure efficiency both logistically and spatially speaking.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <VisitorTracker />
      <ScrollUp />
      <Video />
      {/* <Hero /> */}
      <Features />
      <AboutSectionTwo />
      <AboutSectionOne />
      <Brands />
      <Contact />
    </>
  );
}
