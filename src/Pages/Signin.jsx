import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import gitHub from "../../src/assets/Logo/github.svg";
import google from "../../src/assets/Logo/google.png";
import { useContext } from "react";
import { AuthProvider } from "../Provider/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Signin = () => {
  const { loginUser, googleLogin, gitHubLogin } = useContext(AuthProvider);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const signInGitHub = () =>{
    gitHubLogin()
    .then(() => {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "User Login Success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    })
    .catch((error) => {
      Swal.fire({
        position: "top",
        icon: "error",
        title: error.message,
        showConfirmButton: false,
        timer: 1500,
      });
    });
  }

  const signInGoogle = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "User Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          position: "top",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const onSubmit = (data) => {
    const { email, password } = data;

    loginUser(email, password)
      .then(() => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "User Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          position: "top",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign in now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign-up</button>
            </div>
          </form>

          <div className="flex space-x-2 m-5">
            <div
              onClick={signInGoogle}
              className="flex bg-gray-300 p-2 rounded-lg space-x-1"
            >
              <img className="w-10 h-10" src={google} alt="" />
              <button>Google Signin</button>
            </div>

            <div onClick={signInGitHub} className="flex bg-gray-300 p-2 rounded-lg space-x-2">
              <img className="w-10 h-10" src={gitHub} alt="" />
              <button>GitHub Signin</button>
            </div>
          </div>

          <div>
            <p className="text-center mb-6">
              You don't have an account?{" "}
              <Link className="text-primary font-bold" to="/signup">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
