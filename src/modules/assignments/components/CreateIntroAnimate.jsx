import { createLottie, handLottie } from "../../../animation";
import LottieAnimation from "../../../animation/LottieAnimation";
import UseHelmet from "../../../hooks/useHelmet";

const CreateIntroAnimate = () => {
  return (
    <div className="bg-base-100">
      <UseHelmet title="Create Assignment" />
      <div className="w-xs mx-auto w-fit mt-[-95px] ">
        <LottieAnimation anime={createLottie} />
      </div>
      <div className=" flex-center mt-[-18px] mb-2 ">
        <div className="w-[200px] max-sm:w-[100px] mt-[-40px] mr-[-18px] max-sm:r-[-10px]">
          <LottieAnimation anime={handLottie} />
        </div>
        <div>
          <h1 className="sm:text-3xl text-center md:text-4xl text-lg font-bold text-purple-400 mb-2 animate-fade-in mt-[-30px]">
            Create a New Assignment ✍️
          </h1>
          <p className="md:text-lg text-sm text-gray-400 animate-fade-in delay-100">
            Fill out the form below to share a new learning challenge with your
            peers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateIntroAnimate;
