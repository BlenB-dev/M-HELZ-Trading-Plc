import React from "react";
import styles from "../style";
import { Medicines } from "../constants";

const Medicine = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    <h1 className=" text-gradient text-[20px] ml-10">
      {" "}
      Medicine's that we currently have are{" "}
    </h1>
    {Medicines.map((med) => (
      <div
        key={med.id}
        className={`flex-1 flex ml-[80px] justify-start item-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {med.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {med.title}
        </p>
      </div>
    ))}
  </section>
);

export default Medicine;
