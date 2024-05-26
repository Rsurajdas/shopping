import { TextInput } from "@mantine/core";
import { PasswordInput } from "@mantine/core";
import Button from "../component/Button";
import { Form, Link } from "react-router-dom";

export default function SignIn() {
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: ""
  // })
  // const handleChange = (event) => {
  //   const { name, value } = event.target
  //   setFormData(prevState => ({ ...prevState, [name]: value }))
  // }
  return (
    <div className=" flex justify-center items-center h-screen bg-[#e2e2e2] ">
      <div className="container w-1/4 bg-white flex justify-center items-center flex-col px-[25px] py-[20px] rounded-md shadow-shadow">
        <h2 className="text-[32px] font-bold font-Montserrat mb-2.5">Sign In</h2>
        <p className="text-xs font-medium font-Montserrat mb-8 text-[#475569]">
          Dont have an account?{" "}
          <Link to="/signup" className="text-[#4c1d95] font-semibold text-sm underline underline-offset-1">
            Click here
          </Link>
        </p>
        <Form className="input-box w-full" method="post">
          <TextInput
            className="mb-3.5 bg-[#eee] border-none"
            placeholder="Username or Email"
            name="username"
          // value={formData.username}
          // onChange={(e) => handleChange(e)}
          />
          <PasswordInput
            className="mb-3.5  border-none bg-[#eee]"
            placeholder="Enter Password"
            name="password"
          // value={formData.password}
          // onChange={(e) => handleChange(e)}
          />
          <Link
            to="/forgotpassword"
            className="text-xs font-medium font-Montserrat mb-7 text-[#4c1d95]"
          >
            Forget Your Password?
          </Link>
          <div className="mx-auto">
            <Button type={"submit"} className="py-1 px-6 bg-indigo-700 text-white rounded-sm" title="Submit" />
          </div>
        </Form>
      </div>
    </div>
  );
}