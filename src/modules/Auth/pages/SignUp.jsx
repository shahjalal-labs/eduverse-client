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
      <div className="lg:flex flex-row-reverse items-center justify-center   *:flex-1  mt-5">
        <div className="flex-center">
          <motion.div className="max-w-[480px]  " {...leftToRight}>
            <SignUpForm />
          </motion.div>
        </div>

        <div className="flex-center max-lg:mt-10">
          <motion.div
            className="max-w-[485px]  bg-gray-50 shadow-lg rounded-lg hover:shadow-sm hover:scale-98"
            {...rightToLeft}
          >
            <LottieAnimation anime={authLottie} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
