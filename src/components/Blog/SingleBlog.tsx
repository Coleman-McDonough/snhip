import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div className="dark:bg-dark dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two">
        <Link
          href="/blog-details"
          className="relative block aspect-[37/22] w-full"
        >
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/blog-details"
              className="dark:text-white dark:hover:text-primary mb-4 block text-xl font-bold text-black hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="dark:border-white dark:border-opacity-10 mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color">
            {paragraph}
          </p>
          <div className="flex-col items-center">
            <div className="dark:border-white dark:border-opacity-10 mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="w-full">
                <p className="text-xs text-body-color">{author.designation}</p>
                <h4 className="dark:text-white mb-1 text-sm font-medium text-dark">
                  {author.name}
                </h4>
              </div>
            </div>
            <div className="inline-block">
              <p className="text-xs text-body-color">Phone</p>
              <h4 className="dark:text-white mb-1 text-sm font-medium text-dark">
                {publishDate}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
