// slideshowData.ts
export interface ImageData {
  src: string;
  alt: string;
}
// show the images in public/images/slideshow
// taking each jpg in the folder and adding it to the slideshow up to pic14

export const images: ImageData[] = [
  { src: "/images/slideshow/pic1.jpg", alt: "Phase 2" },
  { src: "/images/slideshow/pic2.jpg", alt: "Phase 2" },
  { src: "/images/slideshow/pic3.jpg", alt: "Phase 2" },
  { src: "/images/slideshow/pic4.jpg", alt: "Phase 2" },
  { src: "/images/slideshow/pic5.jpg", alt: "Phase 2" },
  { src: "/images/slideshow/pic6.jpg", alt: "Phase 2" },
  { src: "/images/slideshow/pic7.jpg", alt: "Phases 2" },
  { src: "/images/slideshow/pic8.jpg", alt: "Phase 2" },
  { src: "/images/slideshow/pic9.jpg", alt: "Phase 2" },
  { src: "/images/slideshow/pic10.jpg", alt: "Phase 2" },
  { src: "/images/slideshow/pic11.jpg", alt: "Phase 2" },
  { src: "/images/slideshow/pic12.jpg", alt: "Phase 2" },
  { src: "/images/slideshow/pic13.jpg", alt: "Phase 2" },
];
