/* import BannerCard from "./BannerCard";
import BannerImg from "./BannerImg";

const Banner = () => {
  return (
    <div className="banner-container xl:gap-16 min--[50vh] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] mt-10 pl-10 border border-purple-500  rounded-2xl">
      <div className="absolute w-[350px] h-[350px] bg-purple-500 opacity-20 blur-[120px] rounded-full -top-20 -left-20 animate-pulse" />
      <div className="absolute w-[350px] h-[350px] bg-blue-500 opacity-20 blur-[120px] rounded-full -bottom-20 -right-0 animate-pulse" />

      <BannerImg />
      <BannerCard />
    </div>
  );
};

export default Banner; */

// import BannerCard from "./BannerCard";
// import BannerImg from "./BannerImg";
//
// const Banner = () => {
//   return (
//     <div
//       className="
//         relative
//         flex flex-col lg:flex-row-reverse items-center justify-center
//         gap-12 xl:gap-16
//         min-h-[50vh]
//         bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]
//         rounded-2xl
//         shadow-[0_0_20px_rgba(128,0,255,0.6)]
//         overflow-hidden
//         px-10 py-14
//       "
//     >
//       {/* Neon Glowing Blurred Orbs */}
//       <div
//         className="
//           absolute
//           w-[350px] h-[350px]
//           bg-purple-500 opacity-20
//           rounded-full
//           blur-[120px]
//           top-[-6rem] left-[-6rem]
//           animate-[pulse_6s_ease-in-out_infinite]
//           motion-safe:animate-[float_10s_ease-in-out_infinite]
//           "
//         style={{
//           animationDelay: "0s",
//         }}
//       />
//       <div
//         className="
//           absolute
//           w-[350px] h-[350px]
//           bg-blue-500 opacity-20
//           rounded-full
//           blur-[120px]
//           bottom-[-6rem] right-0
//           animate-[pulse_6s_ease-in-out_infinite]
//           motion-safe:animate-[float_12s_ease-in-out_infinite]
//           "
//         style={{
//           animationDelay: "3s",
//         }}
//       />
//
//       {/* Content */}
//       <BannerImg className="relative z-10" />
//       <BannerCard className="relative z-10" />
//     </div>
//   );
// };
//
// export default Banner;

import BannerCard from "./BannerCard";
import BannerImg from "./BannerImg";

const Banner = () => {
  return (
    <div
      className="
        relative
        flex flex-col lg:flex-row-reverse items-center justify-center
        gap-12 xl:gap-16
        min-h-[50vh]
        bg-gradient-to-br from-[#0f0c29] via-[#1c1847] to-[#24243e]
        rounded-2xl
        shadow-lg shadow-black/40
        overflow-hidden
        px-10 py-14
      "
    >
      {/* Subtle Blurred Background Orbs */}
      <div
        className="
          absolute
          w-[300px] h-[300px]
          bg-purple-500/15
          rounded-full
          blur-[100px]
          top-[-6rem] left-[-6rem]
          animate-[pulse_8s_ease-in-out_infinite]
          motion-safe:animate-[float_14s_ease-in-out_infinite]
        "
        style={{
          animationDelay: "0s",
        }}
      />
      <div
        className="
          absolute
          w-[300px] h-[300px]
          bg-cyan-500/15
          rounded-full
          blur-[100px]
          bottom-[-6rem] right-0
          animate-[pulse_8s_ease-in-out_infinite]
          motion-safe:animate-[float_16s_ease-in-out_infinite]
        "
        style={{
          animationDelay: "3s",
        }}
      />

      {/* Content */}
      <BannerImg className="relative z-10" />
      <BannerCard className="relative z-10" />
    </div>
  );
};

export default Banner;
