
import { BackgroundHero, Container } from "@/components";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";

export default function Home() {
  return (
   <>
    <BackgroundHero>
      <Container>
        <div className="h-[1.5rem] w-full"></div>
        <ul className="flex justify-between items-center">
          <li>
            <Image src='/img/Logo2.png' width={170} height={50} alt="landify icon"/>
          </li>
          
          <li>
            <IoMdMenu color="#000" size={45} />
          </li>
        </ul>
      </Container>
    </BackgroundHero>
    <footer>

    </footer>
   </>
  );
}
