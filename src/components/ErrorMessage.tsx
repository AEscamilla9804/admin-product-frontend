import type { PropsWithChildren } from "react"

const ErrorMessage = ({ children } : PropsWithChildren) => {
  return (
    <div className="text-red-500 text-sm font-bold">
        { children }
    </div>
  )
}

export default ErrorMessage