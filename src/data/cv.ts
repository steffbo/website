export type Experience = {
    company: string;
    title: string;
    dateRange: string;
    bullets: string[];
};

type CurriculumVitae = {
    name: string;
    title: string;
    description: string;
    location: string;
    website: string;
    resumePdf?: string;
    social: Record<string, string>;
    about: string;
    skills: string[][];
    experience: Experience[];
    education: Array<{ degree: string; dateRange: string }>;
    projects: string[];
    languages: string[];
};

export const cv: CurriculumVitae = {
    name: "Stefan Remer",
    title: "Senior Software Engineer",
    description:
        "Portfolio and professional profile of Stefan Remer, senior software engineer in Berlin.",
    location: "Berlin, Germany",
    website: "https://cv.remer.cc",
    resumePdf: "/stefan-remer-resume.pdf",
    social: {
        github: "https://github.com/steffbo",
        linkedin: "https://linkedin.com/in/stefan-remer/",
        stackoverflow: "https://stackoverflow.com/users/651100/",
    },
    about: "Technical leader and backend engineer focused on scalable APIs and data-driven applications. I own the full software development lifecycle, from architecture to deployment. Reviewing and refactoring code in the age of AI agents has become a key part of my work.",
    skills: [
        ["Java", "Kotlin", "Javascript/Typescript"],
        ["Spring Boot", "Micronaut", "Maven/Gradle"],
        ["AWS", "Docker", "Kubernetes"],
        ["SQL", "Elasticsearch", "Redis"],
        ["Git", "Github Actions"],
        ["Rest", "Kafka", "GraphQL", "gRPC"],
        ["Prometheus", "Grafana", "Kibana"],
    ],
    experience: [
        {
            company: "kleinanzeigen.de / Adevinta",
            title: "Senior Software Engineer",
            dateRange: "Jan 2022 - present",
            bullets: [
                "Backend engineer for PRO, building products for commercial customers.",
                "Developed quota management capabilities for a global platform.",
                "Migrated a user-outreach application to a new global platform.",
                "Delivered special slot for subscriber ads in search",
                "Implemented user-type selection during registration.",
            ],
        },
        {
            company: "Uberall",
            title: "Principal Backend Engineer (2021); Senior Backend Engineer (2018 - 2021)",
            dateRange: "Apr 2018 - Dec 2021",
            bullets: [
                "Backend lead for Insights team and responsible for the Advanced Analytics product lifecycle.",
                "Designed domain architecture for the smart-conversations microservice.",
                "Kotlin / Micronaut Backend template",
                "Built REST APIs with Grails and Micronaut, integrated many 3rd party API integrations.",
                "Led long-term technical planning, recruited backend engineers and served as squad captain for nine engineers.",
            ],
        },
        {
            company: "Brüder Schlau",
            title: "Software Developer",
            dateRange: "Aug 2016 - Mar 2018",
            bullets: [
                "E-commerce solution (SAP Hybris) with an external development agency.",
            ],
        },
        {
            company: "T-Systems",
            title: "Software Developer",
            dateRange: "Feb 2011 - Jul 2016",
            bullets: [
                "Developed a custom DMS for a state government (Landtag Brandenburg)",
            ],
        },
    ],
    education: [
        {
            degree: "IT specialist - software development",
            dateRange: "Sep 2008 - Feb 2011",
        },
    ],
    projects: [
        "Homelab with NAS and local AI inference",
        "Kita website and fee management system",
        "Doctors office website",
    ],
    languages: ["German (native)", "English (professional)"],
};
