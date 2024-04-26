import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

const Signup = () => {

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
          <h1 className="text-5xl font-bold">Sign up now!</h1>

        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input {...register("name", { required: true })} 
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
              />
              {errors.name && <span className="text-red-500">This field is required</span>}
              
            </div> 
          
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input {...register("email", { required: true })} 
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
              
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input {...register("photo", { required: true })} 
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
              />
              {errors.photo && <span className="text-red-500">This field is required</span>}
              
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input {...register("password", { required: true })} 
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
              />
              {errors.password && <span className="text-red-500">This field is required</span>}
              
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign-up</button>
            </div>
          </form>

          <div>
            <p className="text-center mb-6">Already have an account? <Link className="text-primary font-bold" to='/signin'>Signin</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
