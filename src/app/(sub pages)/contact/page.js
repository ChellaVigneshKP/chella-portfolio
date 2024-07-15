import Image from "next/image";
import bg from "../../../../public/background/Contact.jpeg";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Chella's Portfolio Contact Page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Contact KPCV
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Please use the form below to send your messages. 
            Whether you want to collaborate, ask questions, or share your experiences, your messages are important to me. 
            I will get back to you as soon as possible.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
