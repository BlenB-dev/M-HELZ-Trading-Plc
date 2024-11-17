import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-col md:flex-row items-center p-6  md:ml-[-360px] rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-0 md:ml-6 mt-4 md:mt-0 text-center md:text-left">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section className={`${layout.section} flex flex-col md:flex-row`}>
    {/* Information Section */}
    <div className={`${layout.sectionInfo} text-center md:text-left`}>
      <h2 className={`${styles.heading2}  md:ml-20 md:mt-[-100px]`}>
        Core Values
      </h2>
      <Button styles={`mt-10`} />
    </div>

    {/* Features Section */}
    <div
      className={`${layout.sectionImg} flex flex-col items-center md:items-start mt-10 md:mt-0`}
    >
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
