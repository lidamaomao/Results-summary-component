export const Result = () => {
  return (
    <div className="text-[#CAC9FF] bg-gradient-to-b from-[#6943FF] to-[#2F2CE9] flex flex-col items-center rounded-b-4xl md:p-4 md:rounded-4xl md:w-92 max-w-[375px] py-3">
      <h1 className="text-lg md:text-2xl md:mb-3 mt-3">Your Result</h1>
      <div className="text-center flex flex-col justify-center items-center">
        <div className="w-36 h-36 md:w-52 md:h-52 rounded-full bg-gradient-to-b from-[#4D21C9] to-[#2521C9] flex flex-col justify-center md:m-4 my-2">
          <h2 className="text-white text-6xl md:text-7xl md:mb-2">76</h2>
          <p className="md:text-lg">of 100</p>
        </div>
        <div className="px-[64px] md:px-0">
          <h2 className="text-white text-2xl md:text-3xl md:mb-3 mb-1">
            Great
          </h2>
          <p className="md:text-lg">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
      </div>
    </div>
  );
};
