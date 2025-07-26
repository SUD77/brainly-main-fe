import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signin() {

  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  async function signin() {
    const username = usernameRef.current?.value;
    console.log(username);
    const password = passwordRef.current?.value;
    // axios.post(`${BACKEND_URL}`)
    const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
        username,
        password,
    });
   const jwt=response.data.token;
   localStorage.setItem("token",jwt);

   //redirect the user to the dashboard
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white border min-w-48 p-8 rounded-xl">
        <Input reference={usernameRef} placeholder="Username" />
        <Input reference={passwordRef} placeholder="Password" />

        <div className="flex justify-center pt-4">
          <Button onClick={signin} loading={false} variant="primary" text="Signin" fullWidth={true}/>
        </div>
      </div>
    </div>
  );
}
