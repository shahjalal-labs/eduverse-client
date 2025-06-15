import customAlert from "../../../utils/customAlert";
import { Link, useNavigate } from "react-router";
import { Button, Input } from "../../shared/ui";
import SocialLogin from "./SocialLogin";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const SigninForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { signInUser } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    try {
      setError("");
      const res = await signInUser(data.email, data.password);
      if (res?.user) {
        customAlert({
          text: "Welcome back " + res.user.email,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.log(error, "SigninForm.jsx", 16);
      setError(error);
      /* customAlert({
        title: "Error occured",
        text: error?.message,
        icon: "error",
        showCloseButton: true,
        timer: 3000,
      }); */
    }
  };

  return (
    <form
      className="flex-1 bg-base-200 border-base-300 border rounded-box   w-fit   p-4
      max-sm:max-w-[300px]      "
      onSubmit={handleSubmit}
    >
      <h2 className="text-gray-500 text-2xl text-center font-bold">
        Sign In Now
      </h2>
      <fieldset className="p-4 fieldset">
        <Input
          type="email"
          label="Email"
          placeholder="Write your email"
          className="mb-2 w-full sm:min-w-[400px] input-info rounded-full max-sm:w-"
          name="email"
          required
        />
        <Input
          type="password"
          label="Password"
          placeholder="Write your password"
          className="mb- w-full sm:min-w-[400px] rounded-full input-info"
          required
          name="password"
        />
        <p className="mb-3 text-gray-500">
          <Link to="/auth/forgot-pass">Forgot your password?</Link>
        </p>

        <Button
          type="submit"
          className="btn-block btn-info rounded-full"
          variant="info"
        >
          Sign In
        </Button>
        <p className="mt-3">
          Not a member? <Link to="/auth/signup">Sign Up</Link>
        </p>
        {error && (
          <p className="text-red-500 font-semibold ">{error?.message}</p>
        )}

        <SocialLogin />
      </fieldset>
    </form>
  );
};

export default SigninForm;
