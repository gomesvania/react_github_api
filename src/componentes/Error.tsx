import { ErrorProps } from "../types/error";

const Error = ({ error }: ErrorProps) => {
  return (
    <div>
      <p>{ error }</p>
    </div>
  )
}

export default Error;
