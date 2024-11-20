import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* Background Gradient */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    {/* Header Section */}
    <div className="flex flex-col md:flex-row justify-between items-center sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} text-center md:text-left`}>
        <span className="inline-block animate-pop text-gradient">
          What People{" "}
        </span>
        <br className="sm:block hidden" />
        <span className="inline-block animate-slide ">saying about us</span>
      </h2>
      <div className="w-full md:mt-0 mt-6 md:ml-6">
        <p
          className={`${styles.paragraph} text-center md:text-left animate-slide max-w-[450px]`}
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    {/* Feedback Cards */}
    <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <div key={card.id} className="w-full sm:w-[45%] md:w-[30%] lg:w-[28%] ">
          <FeedbackCard {...card} />
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
