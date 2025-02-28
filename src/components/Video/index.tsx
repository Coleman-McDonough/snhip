"use client";

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

import VideoSectionTitle from "../Common/VideoSectionTitle";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 mt-28 py-8 lg:py-12">
      <div className="container">
        <VideoSectionTitle
          title="Phase 2: Expansion in Newton, NH"
          paragraph={
            <>
              Aerial drone footage of <strong>Building 1</strong> at our{" "}
              <strong>Phase 2</strong> industrial expansion in{" "}
              <strong>Newton, NH</strong>. We offer{" "}
              <strong>flexible space for lease</strong> and{" "}
              <strong>build-to-suit opportunities</strong> for businesses
              looking to grow.
            </>
          }
          center
          mb="40px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image
                  src="/images/video/building1.jpg"
                  alt="Aerial view of Buidling 1 in Phase 2, Southern New Hampshire Industrial Park in Newton, New Hampshire"
                  fill
                />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="G5HYHGAHy7A"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
