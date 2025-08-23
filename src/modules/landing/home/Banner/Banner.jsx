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
        bg-gradient-to-br from-[#050517] via-[#121230] to-[#0a0a1f]
        rounded-3xl
        shadow-lg shadow-black/40
        overflow-hidden
        px-10 py-14
      "
    >
      {/* Subtle background orbs matching WebIntro */}
      <div
        className="
          absolute
          w-[320px] h-[320px]
          bg-purple-500/15
          rounded-full
          blur-[100px]
          -top-24 -left-24
          animate-[pulse_8s_ease-in-out_infinite]
          motion-safe:animate-[float_14s_ease-in-out_infinite]
        "
      />
      <div
        className="
          absolute
          w-[320px] h-[320px]
          bg-cyan-500/15
          rounded-full
          blur-[100px]
          -bottom-24 -right-20
          animate-[pulse_8s_ease-in-out_infinite]
          motion-safe:animate-[float_16s_ease-in-out_infinite]
        "
      />

      {/* Content */}
      <BannerImg className="relative z-10" />
      <BannerCard className="relative z-10" />
    </div>
  );
};

export default Banner;
