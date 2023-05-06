import Footer from "components/layouts/Footer/Footer";
import TopNav from "components/layouts/Nav/TopNav";
import type { ReactNode } from "react";
import React from "react";
import wrapper from '../../public/wrapper.png'
import Image from 'next/image'

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="bg-red overflow-hidden relative">
    <div className="mx-auto w-[90%]  md:w-[80%]">
    <div className="absolute top-0 left-0 opacity">
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
      </div>
      <div className="flex center-all">
        <TopNav />
      </div>
      {props.meta}
        <main className="">{props.children}</main>
    </div>
        <Footer />
  </div>
);

export { Main };
