import { data } from "../data";

const bgColorMap = {
  Reaction: "bg-[#FFF6F6]",
  Memory: "bg-[#FFFBF4]",
  Verbal: "bg-[#F2FCF9]",
  Visual: "bg-[#F3F4FD]",
};

const textColorMap = {
  Reaction: "text-[#FF5555]",
  Memory: "text-[#FFB21E]",
  Verbal: "text-[#00BB8F]",
  Visual: "text-[#1125D6]",
};

export const Summary = () => {
  return (
    <div className="px-[30px] md:p-5">
      <h2 className="text-[#303B59] md:text-2xl md:my-1 font-bold my-6">
        Summary
      </h2>
      <ul>
        {data.map(({ category, score, icon }) => {
          return (
            <li
              key={category}
              className={`${bgColorMap[category]} md:text-lg flex justify-between md:px-4 md:py-3 md:mt-5 rounded-xl md:w-[18rem] mb-4 p-4`}
            >
              <span className={`flex ${textColorMap[category]}`}>
                <img src={icon} alt={category} className="mr-1" />
                {category}
              </span>
              <span className="font-bold">
                {score} / <span className="text-[#9899A8]">100</span>
              </span>
            </li>
          );
        })}
      </ul>
      <button className="w-full p-4 mt-1 mb-5 md:w-[18rem] bg-[#303B59] text-white text-center font-bold md:py-5 rounded-[8rem] md:mt-3 hover:bg-gradient-to-b from-[#6943FF] to-[#2F2CE9]">
        Continue
      </button>
    </div>
  );
};
