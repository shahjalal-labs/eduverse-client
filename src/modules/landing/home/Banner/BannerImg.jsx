import { motion } from "motion/react";

import { useMediaQuery } from "react-responsive";
import { banner4, banner6 } from "../../../../assets/images";
const BannerImg = () => {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <div
      className={`*:w-[300px]  mt-[-150px] flex-1 ${
        isMobile ? " *:w-[100px]" : ""
      } `}
    >
      <motion.img
        src={banner4}
        animate={{ y: [250, 150, 250] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="max-w-sm  border-blue-500  border-s-8 border-b-8  rounded-t-[40px] rounded-br-[40px] shadow-2xl max-sm:w-[260px] "
      />
      <motion.img
        src={banner6}
        animate={{ x: isMobile ? [25, 10, 25] : [200, 150, 200] }}
        transition={{ duration: !isMobile ? 7 : 3, repeat: Infinity }}
        className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl max-sm:w-[260px]  "
      />
    </div>
  );
};

export default BannerImg;
