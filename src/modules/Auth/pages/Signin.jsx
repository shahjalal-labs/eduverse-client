import { motion } from "motion/react";
import SigninForm from "../components/SigninForm";
import LottieAnimation from "../../../animation/LottieAnimation";
import { authLottie } from "../../../animation";
import { leftToRight, rightToLeft } from "../../../animation/motion";
import UseHelmet from "../../../hooks/useHelmet";
import SigninText from "../components/SigninText";

const Signin = () => {
  return (
    <div className="min-h-[80vh] mt-10 g-gray-100 py-10 rounded-lg shadow">
      <UseHelmet title="Sign in" />
      <SigninText />
      <div className="lg:flex   lg:flex-row items-center justify-around *:flex-1 gap-7  mt-5">
        <div className="flex-center">
          <motion.div {...rightToLeft}>
            <SigninForm />
          </motion.div>
        </div>

        <div className="flex-center max-lg:mt-10">
          <motion.div
            className="max-w-[480px]  order bg-gray-50 shadow-lg rounded-lg hover:shadow-sm hover:scale-98"
            {...leftToRight}
          >
            <LottieAnimation anime={authLottie} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
