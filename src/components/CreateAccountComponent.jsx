import { useForm } from "react-hook-form";
import supabase from "../supabaseClient";
import ErrorModal from "./ErrorModal";
import { useState } from "react";
import { StoreContext } from "../store/Store";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccountComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isModal, setIsModal] = useState(false);
  const [error, setError] = useState(null);
  const { setUser } = useContext(StoreContext);
  let navigate = useNavigate();

  const onSubmit = async (data) => {
    const { password, passwordVerify, email, username } = data;

    if (password !== passwordVerify) {
      setError("Passwords are not identical");
      setIsModal(!isModal);
    }

    const insertData = {
      user: username,
      email: email,
      password: password,
    };

    await supabase
      .from("users")
      .insert([insertData])
      .then(({ error }) => {
        if (error) {
          return <ErrorModal isModal={isModal} setModal={setIsModal} />;
        }
      });
    setUser(insertData);
    navigate("/");
  };

  return (
    <>
      {isModal ? (
        <ErrorModal isModal={isModal} setModal={setIsModal} error={error} />
      ) : null}
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6">
          <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white pb-8">
            Sign up to your account
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Username {errors.username && <span> Required</span>}
              </label>
              <input
                {...register("username", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                E-mail{errors.email && <span> Required</span>}
              </label>
              <input
                {...register("email", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password{errors.password && <span> Required</span>}
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                passwordVerify{errors.passwordVerify && <span> Required</span>}
              </label>
              <input
                type="password"
                {...register("passwordVerify", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <input
              type="submit"
              className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAccountComponent;
