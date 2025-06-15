import { authLottie } from "../../../animation";
import LottieAnimation from "../../../animation/LottieAnimation";
import SignUpForm from "../components/SignUpForm";
import UseHelmet from "../../../hooks/useHelmet";
import { motion } from "motion/react";
import { leftToRight, rightToLeft } from "../../../animation/motion";
import SignUpText from "../components/SignUpText";

const SignUp = () => {
  return (
    <div className="min-h-[80vh] mt-10  py-10 rounded-lg shadow">
      <UseHelmet title="Sign up" />
      <SignUpText />
      <div className="flex  flex-col-reverse lg:flex-row items-center justify-around *:flex-1 gap-7  mt-5">
        <motion.div
          className="lg:max-w-[480px]  order bg-gray-50 shadow-lg rounded-lg hover:shadow-sm hover:scale-98"
          {...rightToLeft}
        >
          <LottieAnimation anime={authLottie} />
        </motion.div>
        <motion.div className="max-w-[480px]" {...leftToRight}>
          <SignUpForm />
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
