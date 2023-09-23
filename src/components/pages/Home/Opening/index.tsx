import LabIfLogo from "@/assets/LabIfLogo.png";
import OpeningImage from "@/assets/OpeningFundo.webp";
import Image from "next/image";
import { HeaderHome } from "../HeaderHome";

export const OpeningHome = () => {
  return (
    <div className="w-full sm:h-[800px] h-[500px] overflow-hidden bg-zinc-900 relative flex items-center justify-center">
      <HeaderHome />
      <Image
        src={OpeningImage}
        alt="Papel de parede meio apagado com lápis e desenhos"
        className="object-cover sm:h-full h-[450px] opacity-30 absolute top-0 left-0"
      />

      <Image
        src={LabIfLogo}
        alt="Logo LabIF sobre o papel de parede"
        className="z-10 h-auto sm:w-[80%]  w-[90%]"
      />
    </div>
  );
};
