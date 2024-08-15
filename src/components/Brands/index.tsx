import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import SectionTitle from "../Common/SectionTitle";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full">
            <SectionTitle
              title="Trusted By Our Partners:"
              paragraph=""
              center
              mb="0px"
            />
            <div className="bg-green-light dark:bg-gray-dark flex flex-wrap items-center justify-center rounded-sm p-8">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="p-4">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative block h-64 w-64 transition-transform hover:scale-105"
      >
        <Image
          src={imageLight}
          alt={name}
          className="dark:block hidden object-cover"
          layout="fill"
        />
        <Image
          src={image}
          alt={name}
          className="dark:hidden block object-cover"
          layout="fill"
        />
      </a>
    </div>
  );
};
