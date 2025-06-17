import BannerCard from "./BannerCard";
import BannerImg from "./BannerImg";

const Banner = () => {
  return (
    <div className="banner-container xl:gap-16 min-h-[70vh] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] mt-10 pl-10 border border-purple-500  rounded-2xl">
      <div className="absolute w-[350px] h-[350px] bg-purple-500 opacity-20 blur-[120px] rounded-full -top-20 -left-20 animate-pulse" />
      <div className="absolute w-[350px] h-[350px] bg-blue-500 opacity-20 blur-[120px] rounded-full -bottom-20 -right-0 animate-pulse" />

      <BannerImg />
      <BannerCard />
    </div>
  );
};

export default Banner;
