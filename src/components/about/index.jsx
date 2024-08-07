import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Visionary Developer
          </h2>
          <p className="font-light text-justify text-xs sm:text-sm md:text-base   ">
            My journey in software development is driven by a passion for crafting innovative solutions using a diverse set of tools and languages. With Java at the core of my expertise, I build robust and scalable backend systems. I am proficient in frameworks like Spring for backend development and Angular for creating dynamic and responsive user interfaces.
            Leveraging the power of Linux and PostgreSQL, I ensure efficient and high-performance database management. My knowledge of Docker and Kubernetes allows me to streamline deployment and orchestration, while Jenkins supports my continuous integration and deployment processes. Additionally, my basic skills in Blender, Photoshop, and CorelDRAW enable me to incorporate creative and visually appealing elements into my projects.
            I am committed to delivering fast, secure, and dynamic experiences that not only meet functional requirements but also provide an engaging user experience. Join me as I continue to explore new technologies and methodologies to shape the future of software development.
          </p>
          <p>
            Reach me out at:{" "}
            <a href="mailto:info@chellavignesh.com" className="text-accent">
              info@chellavignesh.com
            </a>
            &nbsp;or from the contact page
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-1 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            My Personal Story
          </h2>
          <p className="font-light text-justify text-xs sm:text-sm md:text-base   ">
            I was born and raised in Kanyakumari, Tamil Nadu, India, where I grew up surrounded by the vibrant culture and beautiful landscapes of Southern India. From the beginning, I have been fascinated by technology and always eager to learn new things. Music has always been a significant part of my life, and I used to play the keyboard, enriching my appreciation for creativity and rhythm. These threads of family, music, and culture have defined my life path and experiences.<br />
            In addition to Tamil, I am fluent in Hindi and Malayalam, which has helped me connect with diverse communities and understand various perspectives.<br />
            In my free time, I have explored various fields such as cybersecurity, web designing, graphic design, and 3D modeling. These experiences have not only diversified my skill set but also fueled my passion for continuous learning and innovation. I have actively participated in NCC during my college years and served as a CUO, which demonstrates my leadership skills and commitment to discipline and teamwork.<br />
            I believe in lifelong learning and have continued to educate myself even while working. I am currently enrolled in a Data Science degree program while working with HCL, striving to enhance my knowledge and stay updated with the latest advancements in technology.
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-6 lg:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`/background/Chella.jpg`}
            alt="Chella Vignesh K P"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-6 lg:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=ChellaVigneshKP&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Chella Vignesh K P"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-full lg:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api?username=ChellaVigneshKP&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Chella Vignesh K P"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=aws,bootstrap,css,docker,spring,java,c,git,github,html,js,kubernetes,linux,mysql,nextjs,nodejs,npm,postgres,react,tailwind,threejs,vscode,yarn,typescript,angular,maven,bash,jenkins,python,kafka,blender,photoshop,illustrator,rabbitmq`}
            alt="Chella Vignesh K P"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://streak-stats.demolab.com?user=ChellaVigneshKP&theme=dark&hide_border=true&background=EB545400&currStreakLabel=FEFE5B&ring=FEFE5B`}
            alt="Chella Vignesh K P"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/ChellaVigneshKP/Blender-Projects"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats.vercel.app/api/pin/?username=ChellaVigneshKP&repo=Blender-Projects&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Chella Vignesh K P"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
