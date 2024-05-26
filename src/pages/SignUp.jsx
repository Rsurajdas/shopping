import { TextInput } from "@mantine/core";
import { PasswordInput } from "@mantine/core";

export default function SignUp() {
  return (
    <div className=" flex justify-center items-center h-screen bg-[#e2e2e2] ">
      <div className="container w-1/4 bg-white flex justify-center items-center flex-col px-[25px] py-[20px] rounded-md shadow-shadow">
        <Header />
        <div className="input-box w-full ">
          <InputBox placeholder="Fullname" />
          <InputBox placeholder="Enter Email" />
          <Password placeholder="Create Password" />
          <Password placeholder="Confirm Password" />
        </div>
        <Button />
      </div>
    </div>
  );
}

function Header() {
  return (
    <>
      <h2 className="text-[32px] font-bold font-Montserrat mb-2.5">
        Create Account
      </h2>

      <p className="text-xs font-medium font-Montserrat mb-8 text-[#475569]">
        Already have an account?{" "}
        <a
          className="text-[#4c1d95] font-semibold text-sm underline underline-offset-1"
          href="#"
        >
          Click here
        </a>
      </p>
    </>
  );
}

function InputBox(props) {
  return (
    <TextInput
      className="mb-3.5 bg-[#eee] border-none"
      placeholder={props.placeholder}
    />
  );
}

function Password(props) {
  return (
    <PasswordInput
      className="mb-3.5  border-none bg-[#eee]"
      placeholder={props.placeholder}
    />
  );
}

function Button() {
  return (
    <button className="bg-[#2da0a8] text-xs font-semibold text-white py-[10px] px-[45px] rounded-lg mt-3">
      SIGN IN
    </button>
  );
}
