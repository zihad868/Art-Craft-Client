import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import gitHub from '../../src/assets/Logo/github.svg';
import google from '../../src/assets/Logo/google.png';

const Signin = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const onSubmit = (data) => console.log(data)
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
          <div  className="flex bg-gray-300 p-2 rounded-lg space-x-1">
            <img className="w-10 h-10" src={google} alt="" />
            <button >Google Signup</button>
          </div>

          <div className="flex bg-gray-300 p-2 rounded-lg space-x-2">
            <img className="w-10 h-10" src={gitHub} alt="" />
            <button >GitHub Signup</button>
          </div>
          </div>

          <div>
            <p className="text-center mb-6">
              You don't have an account?{" "}
              <Link className="text-primary font-bold" to="/signup">
                Signin
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
