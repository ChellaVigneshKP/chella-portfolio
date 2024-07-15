import React from 'react'
import Image from "next/image";
import bg from "../../../../public/background/Academic.jpeg";
export const metadata = {
  title: "Credits",
};
export default function page() {
  return (
    <>
      <Image
        src={bg}
        alt="Chella Portfolio Credit Page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
      <div className='text-center'>
        <h1 className='text-accent font-semibold text-4xl capitalize'>Thanks !!!</h1>
        <p className='text-foreground p-4 w-1/2 sm:w-full lg:w-1/2 md:w-1/2 mx-auto'>
          Thank you so much for providing valuable references and inspiration for my website. Your insights and resources have been incredibly helpful and have greatly contributed to the development of my project.
        </p>
        <ul className='list-item items-center p-0'>
          <li>
            Portfolio Reference: <a href='https://github.com/codebucks27/Next.js-Creative-Portfolio-Website' className='text-blue-500 underline'>Next.js Creative Portfolio Website</a>
          </li>
          <li>
            Readme Stats: <a href='https://github.com/anuraghazra/github-readme-stats' className='text-blue-500 underline'>Readme Stats</a>
          </li>
          <li>
            AI Image Generator: <a href='https://playground.com/' className='text-blue-500 underline'>AI Playground</a>
          </li>
          <li>
            Owl Girl 3D model: <a href='https://sketchfab.com/3d-models/owl-girl-7b0e56568fb345758d6568907f635e0c' className='text-blue-500 underline'>Owl Girl 3D model</a>
          </li>
          <li>
            Book 3D model: <a href='https://sketchfab.com/3d-models/potion-book-stronberry-vs-zomberry-wip-7b1eb7bb3cdd414186c06c45e19431a3' className='text-blue-500 underline'>Book 3D model</a>
          </li>
          <li>
            Audio: <a href='https://pixabay.com/users/shidenbeatsmusic-25676252/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=20772' className='text-blue-500 underline'>Audio</a>
          </li>
          <li>
            Hat 3D model: <a href='https://sketchfab.com/3d-models/wizard-table-hat-eed4ea1176ec4a79a849bdec217b8e33' className='text-blue-500 underline'>Hat 3D model</a>
          </li>
          <li>
            Staff 3D model: <a href='https://sketchfab.com/3d-models/stylized-aztecjungle-staff-371b074e3c9f4dd58c6e7e96e2cf2336' className='text-blue-500 underline'>Staff 3D model</a>
          </li>
        </ul>
      </div>
    </>
  )
}