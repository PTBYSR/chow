import React from "react";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Text from "components/ui/Text/Text";
import Image from "next/image";
import wrapper from '../../public/wrapper.png'

const About = () => {
  return (
    <Main
      meta={
        <Meta
          title="500 CHOW - About us"
          description="1# Lagos food delivery service"
        />
      }
    >
       <div className="md:hidden  absolute top-0 left-0 opacity">
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        </div>
      <section className="mt-28 mb-24 relative z-[10000]">
        <div className="text-center mb-20">
          <Text variant="h2">
            This is a story about <br /> 500 CHOPS
          </Text>
        </div>
        <div className="flex center-all">
          <div className="relative border w-[400px] h-[400px] overflow-hidden">
            <div className="absolute md:-bottom-[200px] -bottom-[190px]">
              <video
                src="https://firebasestorage.googleapis.com/v0/b/chow-56e70.appspot.com/o/about-us-vid.mp4?alt=media&token=84cfb517-d1fe-45c5-aada-6d38f5402e19"
                loop
                autoPlay
                muted
              ></video>
            </div>
          </div>
        </div>
        <div className="flex center-all md:text-center mt-10">
          <div className=" md:w-1/2">
            <Text variant="p">
              Welcome to 500Chow, where we deliver restaurant-quality meals
              straight to your doorstep. With a menu featuring a variety of
              cuisines, from Italian to Mexican to Asian and American, we've got
              something for everyone. Our easy-to-use website and dedicated team
              ensure fast and reliable service every time. Our passion for food
              is evident in every detail, from the quality of our ingredients to
              the presentation of our dishes. Order now and experience the
              convenience and deliciousness of 500Chow - we're confident you'll
              love our food and our service.
            </Text>
          </div>
        </div>
      </section>
      <section className="mb-64 relative z-[10000]">
        <div className="text-center mb-20">
          <Text variant="h2">The best of services</Text>
        </div>
        <div className="">
          <div className="md:flex-row flex-col flex justify-around">
            <div className="flex  justify-center items-start  flex-col gap-5 mb-20">
              <div
                className={` h-[200px] w-full md:w-[400px] md:h-[200px] -[478px] border-2  
                rounded-tl-full flex center-all rounded-tr-full border-dashed`}
              >
                <div className="w-1/2 text-center mt-9">
                  <Text variant="h2" className="text-[2.5rem]">
                    Meal Plans
                  </Text>
                </div>
              </div>
              <div className="border-dashed border-2 md:w-[400px] rounded-3xl p-9 ">
                <Text className="text-xs" variant="p">
                  Create your own menu or select from our expert curated menus
                  for weekly or monthly plans. You get to personalize your
                  needs- sugar free, kid friendly, vegan, etc.
                </Text>
              </div>
            </div>
            <div className="flex justify-start  items-center  flex-col gap-5">
              <div
                className={` h-[200px] w-full md:w-[400px] md:h-[200px] -[478px] border-2  
                rounded-tl-full flex center-all rounded-tr-full border-dashed`}
              >
                <div className="text-center mt-9 ">
                  <Text variant="h2" className="text-[2.5rem]">
                    Marketplace
                  </Text>
                </div>
              </div>
              <div className="border-dashed border-2 md:w-[400px] rounded-3xl p-9 ">
                <Text className="text-xs" variant="p">
                  Rich variety of chef-cooked meals available on demand and
                  scheduled delivery.
                </Text>
              </div>
            </div>
          </div>

          <div className="flex mt-20 justify-center items-center flex-col gap-5">
            <div
              className={` h-[200px] w-full  md:w-[400px] md:h-[200px] -[478px] border-2  
    rounded-tl-full flex center-all rounded-tr-full border-dashed`}
            >
              <div className="text-center mt-9">
                <Text variant="h2" className="text-[2.5rem]">
                  Bulk <br />
                  Food Bowls
                </Text>
              </div>
            </div>
            <div className="border-dashed border-2 md:w-[400px] rounded-3xl p-9 ">
              <Text className="text-xs" variant="p">
                Save time, energy and money. Order meals in bulk for yourself,
                family and events of any size and have them delivered in 24
                hours or less.
              </Text>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default About;
