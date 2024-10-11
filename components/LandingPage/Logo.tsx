import Image from "next/image";
import LoginButton from "../LoginButton";

const Logo = () => (
  <div className="flex flex-col items-center space-y-4">
    <div className="rounded-xl overflow-hidden">
      <Image src="/logo-web.svg" alt="logo" width={129} height={129} />
    </div>
    <div className="flex items-center justify-center space-x-2">
      <LoginButton />
    </div>
  </div>
);

export default Logo;
