import Image from "next/image";
import { Logo } from "./../components";

export default function Home() {
  return (
    <div>
      <Image src={Logo} alt="application logo" />
    </div>
  );
}
