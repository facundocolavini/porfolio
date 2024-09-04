import type { Project } from "@/interfaces/types";

export const projects: Project[] = [
    {
        title: "Redesigned Real Estate Agency Website",
        description: `
        <li class="mb-2"> Led a team to redesign a real estate agency's website, utilizing modern technologies like Astro and TailwindCSS.</li>

 <li class="mb-2"> Enhanced website performance by 50% and improved responsiveness, resulting in a more visually
appealing design.</li>
 <li class="mb-2"> Implemented advanced search filters, optimized SEO, and integrated APIs to improve user experience
and functionality.</li>
        `,
        previewUrl: "https://www.google.com",
        image: "src/assets/images/projects/project-1.png",
        pillClass:["bg-black","bg-white text-black fill-white","bg-[#2063B5]" ],
        icons: ["cpanel","astro-bold","tailwindcss",],
        tags: ["", "Astro", "tailwindcss",],
        showBtnCode: false,
        isReversed:true,
        bgGradient: 'bg-gradient-to-r from-transparent via-[rgba(73,33,93,0.1)] to-[rgba(112,59,154,0.2)]'
    },
    {
        title: "Redesigned Real Estate Agency Website",
        description: `
        <li class="mb-2"> Led a team to redesign a real estate agency's website, utilizing modern technologies like Astro and TailwindCSS.</li>

 <li class="mb-2"> Enhanced website performance by 50% and improved responsiveness, resulting in a more visually
appealing design.</li>
 <li class="mb-2"> Implemented advanced search filters, optimized SEO, and integrated APIs to improve user experience
and functionality.</li>
        `,
        previewUrl: "https://www.google.com",
        image: "src/assets/images/projects/project-2.png",
        pillClass:["bg-black","bg-white text-black fill-white","bg-[#2063B5]","bg-[#2063B5]" ],
        icons: ["vercel","astro-bold","tailwindcss","react"],
        tags: ["Vercel", "Astro", "tailwindcss","react"],
        showBtnCode: false,
        isReversed:true,
        bgGradient:'bg-gradient-to-r from-transparent via-[transparent] to-[rgba(46,130,234,0.2)]'
    },
  
]