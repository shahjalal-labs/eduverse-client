import {motion } from "motion/react";
import { topToBottom } from "../../../animation/motion";
const SigninText = () => {
  return (
    <div>
      <motion.div className="max-lg:max-w-[490px] mx-auto" {...topToBottom}>
        <h2 className="text-center text-xl sm:text-3xl font-semibold font-kaushan text-purple-700">
          Eduverse connects talent with opportunity.
        </h2>
        <p className="text-center text-gray-500 ext-sm mb-10 mt-2">
          Unlock collaborative learning, connect with your study friends, and
          ace your assignments together.
        </p>
      </motion.div>
    </div>
  );
};

export default SigninText;
