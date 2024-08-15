import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Southern New Hampshire Industrial Park",
  description: "Meet the team behind Southern New Hampshire Industrial Park.",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <section className="pb-[120px] pt-[120px]">
        <SectionTitle title="Our Team" paragraph="" center />
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
          <Contact />
        </div>
      </section>
    </>
  );
};

export default Blog;
