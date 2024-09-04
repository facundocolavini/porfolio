import type { Project } from "@/interfaces/types";

export const projects: Project[] = [
    {
        title: "Redesigned News Website for Southern Star",
        description: `
        Enhanced website performance and user experience.
        Implemented SEO best practices for improved visibility.
        Developed a scalable structure for easy content management.
        `,
        previewUrl: "http://www.southernstar.com.ar/new/",
        image: "/projects/project-1.png",
        pillClass:["bg-black","bg-white text-black fill-white","bg-[#2063B5]" ],
        icons: ["server","astro-bold","tailwindcss"],
        tags: ["cPanel", "Astro", "tailwindcss",],
        showBtnCode: false,
        isReversed:true,
        bgGradient: 'bg-gradient-to-r from-transparent via-[rgba(73,33,93,0.1)] to-[rgba(112,59,154,0.2)]'
    },
    {
        title: "Redesigned Real Estate Agency Website",
        description: `
        Led a team to redesign a real estate agency's website, utilizing modern technologies.
        Enhanced website performance by 50% and improved responsiveness.
        Implemented advanced search filters, optimized SEO, and integrated APIs.
        `,
        previewUrl: "https://new.matiasszpira.com.ar/",
        image: "/projects/project-2.png",
        pillClass:["bg-black","bg-white text-black fill-white","bg-[#2063B5]","bg-[#2063B5]" ],
        icons: ["vercel","astro-bold","tailwindcss","react"],
        tags: ["Vercel", "Astro", "tailwindcss","react"],
        showBtnCode: false,
        isReversed:true,
        bgGradient:'bg-gradient-to-r from-transparent via-[transparent] to-[rgba(46,130,234,0.2)]'
    },
]