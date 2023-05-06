import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { vidCarouselUtils } from "./VidCarousel.utils";
import clsx from "clsx";

const VidCarousel = () => {
  const [items, setItems] = useState(vidCarouselUtils);
  console.log(items);
  return (
    <Marquee autoFill>
      <div className="flex gap-5 mb-20 items-center mr-5">
        <>
          <div className="rounded-3xl overflow-hidden">
            <video className="h-60" src="https://firebasestorage.googleapis.com/v0/b/chow-56e70.appspot.com/o/landing-1.mp4?alt=media&token=fcb74226-06cb-4d7c-81b2-02d4ee209883" loop autoPlay muted></video>
          </div>
        </>
        <>
          <div className="rounded-3xl overflow-hidden">
            <video className="h-[12rem]" src="https://firebasestorage.googleapis.com/v0/b/chow-56e70.appspot.com/o/landing-2.mp4?alt=media&token=f19bef65-4ca9-4ab3-896f-82b1492d6628" loop autoPlay muted></video>
          </div>
        </>
        <>
          <div className="rounded-3xl overflow-hidden">
            <video className="h-[15rem]" src="https://firebasestorage.googleapis.com/v0/b/chow-56e70.appspot.com/o/landing-3.mp4?alt=media&token=a601bcd7-2361-492c-b640-112b32f6d88f" loop autoPlay muted></video>
          </div>
        </>
        <>
          <div className="rounded-3xl overflow-hidden">
            <video className="h-[20rem]" src="https://firebasestorage.googleapis.com/v0/b/chow-56e70.appspot.com/o/landing-4.mp4?alt=media&token=118fb8aa-4183-495d-8295-1c575d8e568d" loop autoPlay muted></video>
          </div>
        </>
        <>
          <div className="rounded-3xl overflow-hidden">
            <video className="h-[25rem]" src="https://firebasestorage.googleapis.com/v0/b/chow-56e70.appspot.com/o/vid2.mp4?alt=media&token=13fa4f1a-8287-4fe3-904a-150cc9dbcc7e" loop autoPlay muted></video>
          </div>
        </>
      </div>
    </Marquee>
  );
};

export default VidCarousel;
