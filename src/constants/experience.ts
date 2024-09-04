import type { Timeline } from "@/interfaces/types";

export const experiences: Timeline[] = [
  {
    icon: "circle",
    title: `<h2 class='text-3xl md:text-4xl font-bold'>Experience </h2>`,
    company: "",
    isFragmentPeriod: true,
    period: `
    <div class="mb-28">
		  <h3 class="text-2xl md:text-3xl font-bold mb-2">Let's now delve into my  </h3>
		  <h3 class="text-2xl md:text-3xl font-bold">
		    <span class="text-[#FF6B00]">experience.</span>
		  </h3>
	  </div>
    `,
    description: "",
    color: "text-[#B7BFB5]",
    bullGradient: '',
    gradient: 'before:bg-[linear-gradient(to_bottom,_#B7BFB5,_rgba(255,130,14,63),_rgba(221,140,23,80.58),_#FF6B00)]',
  },
  {
    icon: 'astro-grey',
    title: `<h3 class=" text-xl md:text-2xl text-[#FF6B00] font-bold">Frontend Engineer</h3>`,
    company: "Sounthern Horizon",

    period: "March 2022 - present",
    description: "Specialize in crafting responsive interfaces using React and Astro, collaborating closely with backend and UX teams. Proficient in integrating with RESTful APIs such as Swagger and managing Node.js APIs.",
    color: "text-[#ADADAD]",
    bullGradient: 'shadow-[0_0_20px_8px_rgba(255,107,0,0.3)]',
    gradient: 'before:bg-[linear-gradient(to_bottom,_#FF6B00,_#FF6B00,#2E82EA,#2063B5)]',
  },
  {
    icon: 'react',
    title: `<h3 class=" text-xl md:text-2xl text-[#2E82EA] font-bold">Freelance Frontend Developer</h3>`,
    company: "E-Cloud",
    period: "October 2021 - present",
    description: "Responsible for building components and integrating the backend with the frontend for web applications, ensuring efficiency and usability.",
    color: "text-[#ADADAD]",
    bullGradient: 'shadow-[0_0_20px_8px_rgba(46,130,234,0.3)]',
    gradient: 'before:bg-[linear-gradient(to_bottom,_#1B5EB1,_#62A9FF,_rgba(255,255,255,0.2))]'
  },
  {
    icon: 'code',
    title: `<h2 class='text-3xl md:text-4xl font-bold'>Projects</h2>`,
    company: "",
    isFragmentPeriod: true,
    period: `
    <div class="mt-40">
    <h3 class="text-2xl md:text-3xl font-bold mb-2">Let's explore some of the</h3>
        <h3 class="text-2xl md:text-3xl font-bold">
          projects I've <span class="text-[#A855F7]">worked</span> on.
        </h3>

	  </div>
    `,
    description: "",
    color: "text-[#808080]  ",
    bullGradient: 'shadow-[0_0_20px_8px_rgba(128,128,128,0.3)]',
    gradient: 'before:bg-[linear-gradient(to_bottom,_rgba(183,191,181),_rgba(112,59,154),_rgba(112,59,154,0.2))]',
  }
]