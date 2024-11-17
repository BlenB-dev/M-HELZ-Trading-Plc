import React from "react";
import styles from "../style";
import { discount, sideimage } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-2 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row  items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph}`}>
          <span className="text-white px-1"></span>M HELZ Trading Plc
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full ">
        <h1
          className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px]
        text-white ss:leading-[100px] leading-[75px]"
        >
          M HELZ Trading Plc <br className="sm-block hidden" />
          <span className="text-gradient ">
            Import's <br />
            Medicine's
          </span>
        </h1>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        To enhance the health and well-being of the Ethiopian population by
        providing access to quality pharmaceuticals while fostering strong
        partnerships with global manufacturers.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
      <img
        src={sideimage}
        alt="sideimage"
        className="w-[100%] h-[100%] mt-[-80px] relative z-[5]"
      />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
      <div className="absolute z-[0] w-[80%] h-[80%] rounded-full bottom-40 white__gradient " />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient ping__gradient" />
    </div>
  </section>
);

export default Hero;
