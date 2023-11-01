import { TaskUnityContext } from "./TaskUnityContext"

export const TaskUnityProvider = ({ children }) => {
  return (
    <TaskUnityContext.Provider
      value={{}}
    >
      {children}
    </TaskUnityContext.Provider>
  )
}