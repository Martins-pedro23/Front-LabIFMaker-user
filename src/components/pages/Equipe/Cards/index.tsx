import { InterfaceEquipeMock } from "@/mocks/equipe/equipe";
import { Link } from "lucide-react";
import { ModalComponentEquipe } from "../Modal";
import Image from "next/image";

interface IProps {
  props: InterfaceEquipeMock;
}

export const CardComponentEquipe = ({ props }: IProps) => {
  return (
    <section className="w-full flex items-center justify-center flex-row gap-4 mt-5">
      <div className="sm:w-[65%] xl:w-[50%] w-[90%] md:h-[250px] flex md:items-start items-center justify-start md:flex-row flex-col gap-4 shadow-4xl  rounded p-3">
        <Image src={props.image} alt="image" className="w-auto h-[100%]" />
        <div className="w-full h-full flex-col md:items-start items-center flex gap-3 md:justify-between justify-start py-2  ">
          <p className="font-montserrat font-bold text-xl">{props.name}</p>
          <div className="flex flex-col gap-4">
            <div className="w-full flex-row flex gap-2 font-montserrat font-bold text-xl text-primary ">
              <Link size={25} />
              <a target="_blank" href={props.curriculumLatte}>
                Curriculum Lattes
              </a>
            </div>
            <div className="w-full flex-row flex gap-2 font-montserrat font-bold text-xl text-primary ">
              <Link size={25} />
              <a target="_blank" href={props.linkedin}>
                Linkedin
              </a>
            </div>
          </div>
          <div>
            <ModalComponentEquipe
              name={props.name}
              props={props.moreInformation}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
