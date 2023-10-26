
export const ResetPasswordPage = () => {
  return (
    <>
      <h1 className="text-2xl text-center font-bold uppercase">Restablece tu contraseña para <span className="text-[#423F98]">administrar tus proyectos</span></h1>

      <form className="my-10">
        <div className="mb-5">
          <label
            htmlFor="password"
            className="font-bold"
          >Nueva contraseña</label>
          <input
            required
            id="password"
            type="password"
            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] outline-none focus:border-[#B0A6EB] focus-visible:shadow-none py-3 px-5"
          />
        </div>

        <div className="mb-10">
          <button
            className="w-full cursor-pointer rounded-md border bg-[#423F98] py-3 px-5 text-base text-white font-bold transition-colors hover:bg-opacity-90"
            type="submit"
          >
            Restablecer contraseña
          </button>
        </div>
      </form>
    </>
  )
}