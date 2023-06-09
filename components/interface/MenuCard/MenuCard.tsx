import React, { useState } from "react";
import MenuItems from "./MenuItems/MenuItems";
import ImageCard from "components/ui/ImageCard/ImageCard";
import clsx from "clsx";
import Marquee from "react-fast-marquee";

const MenuCard = ({ label, items, variant = "left" }) => {
  const [images, setImages] = useState(items);
  return (
    <div
      className={clsx(
        " mt-20 flex md:h-[500px] relative",
        variant === "left" && ["md:justify-start"],
        variant === "right" && ["md:justify-end"],
        label === "soups" && ["md:h-[150px]"],
        label === "rice" && ["md:h-[300px]"],
        label === "spagetti" && ["md:h-[150px]"],
        label === "yam" && ["md:h-[250px]"],
      )}
    >
      <div
        className={clsx(
          " md:w-2/3 w-full "
        )}
      >
        <div className=" uppercase text-3xl text-white font-semibold">
          {label}
        </div>
        <div className="w-full">
          <MenuItems items={items} />
        </div>
        {/* <div className="overflow-hidden border md:flex hidden md:gap-12 absolute">
            {images?.map((img) => (
              <ImageCard img={img}/>
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default MenuCard;
