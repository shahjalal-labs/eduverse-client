import { coneLottie, } from "../../../../animation";
import LottieAnimation from "../../../../animation/LottieAnimation";

const EvaluateSubmissionPageIntro = () => {
  return (
    <div className="mb-8 lg:mb-18">
      <div className="w-[70px] mx-auto hover-effect mb-2 rounded-lg">
        <LottieAnimation anime={coneLottie} />
      </div>
      <h2 className="text-2xl   font-bold text-center text-primary">
        Evaluate Submission
      </h2>
      <p className="text-center max-w-[570px] mx-auto">
        Please carefully review their work and provide constructive feedback
        along with an appropriate score.
      </p>
    </div>
  );
};

export default EvaluateSubmissionPageIntro;
