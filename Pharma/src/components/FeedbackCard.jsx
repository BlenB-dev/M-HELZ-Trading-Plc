import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col justify-between p-6 sm:p-8 rounded-[20px] bg-gray-800 shadow-lg max-w-[90%] sm:max-w-[370px] mx-auto sm:mx-0 my-4">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[40px] h-[25px] object-contain mb-4"
    />
    <p className="font-poppins font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] text-white my-6">
      {content}
    </p>

    <div className="flex flex-row items-center mt-auto">
      <img
        src={img}
        alt={name}
        className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-full"
      />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[18px] sm:text-[20px] leading-[28px] sm:leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
