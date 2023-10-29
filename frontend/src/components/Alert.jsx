
export const Alert = ({ alert = {} }) => {
  return (
    <div className={`${(alert?.error) ? 'border-[#F87171] bg-[#F87171]' : 'border-[#34D399] bg-[#34D399]'} rounded-lg border-l-4 bg-opacity-[15%] py-2 px-4 my-4 shadow-md`}>
      <p className="font-medium text-center">
        {alert?.message}
      </p>
    </div>
  )
}