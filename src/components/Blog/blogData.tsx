import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Coleman McDonough",
    paragraph: "Owner",
    image: "/images/blog/coleman.jpg",
    author: {
      name: "colemanpmcdonough@gmail.com",
      image: "/images/blog/author-01.png",
      designation: "E-mail",
    },
    tags: ["creative"],
    publishDate: "978-375-7001",
  },
  {
    id: 2,
    title: "Jennifer McDonough",
    paragraph: "Vice President",
    image: "/images/blog/jen.png",
    author: {
      name: "cpmcdonoughconstructioncorp@gmail.com",
      image: "/images/blog/jen.png",
      designation: "E-mail",
    },
    tags: ["computer"],
    publishDate: "603-399-5029",
  },
];
export default blogData;
