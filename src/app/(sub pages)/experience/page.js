import Image from "next/image";
import bg from "../../../../public/background/Academic.jpeg";
import RenderModel from "@/components/RenderModel";
import AcademicDetails from "@/components/academic";
import dynamic from "next/dynamic";
const Hat = dynamic(() => import("@/components/models/Hat"), {
  ssr: false,
});

export const metadata = {
  title: "Experience",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Chella Portfolio Experience Page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-40 xs:top-45 sm:top-45 lg:top-1/2 -translate-y-1/2 left-0 z-1">
        <RenderModel env="dawn">
          <Hat />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-7xl xs:text-7xl sm:text-7xl  lg:text-8xl text-accent">
          Chella&apos;s Experience
          </h1>
          <p className="font-light text-foreground text-lg">
            Insights into my career path
          </p>
        </div>
      </div>

      <AcademicDetails />
    </>
  );
}
