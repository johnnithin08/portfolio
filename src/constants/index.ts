import {
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    regov,
    kba,
    aws,
    android,
    ios,
    hoobank,
    advancedNotes,
    movieDatabase,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Android",
        icon: android,
    },
    {
        name: "iOS",
        icon: ios,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Git",
        icon: git,
    },
];

const experiences = [
    {
        title: "React Native Developer (Freelance)",
        company_name: "Regov Technologies",
        icon: regov,
        iconBg: "#E6DEDD",
        date: "May 2023 - Present",
        points: [
            "Collaborated with clients remotely, leveraging effective communication and project management tools to facilitate seamless collaboration, resulting in a 20% increase in client satisfaction and a 15% reduction in project scope misunderstandings.",
        ],
    },
    {
        title: "React Native / React Developer",
        company_name: "Regov Technologies",
        icon: regov,
        iconBg: "#E6DEDD",
        date: "Feb 2020 - Apr 2023",
        points: [
            "Collaborated on an asset management project for Malaysia's largest investment bank, contributing to the project's successful execution and providing valuable insights and solutions.",
            "Enhanced application process flows by 10-15%, optimizing efficiency and productivity.",
            "Developed a cost-saving mobile app using React Native with TypeScript, enabling agents to onboard clients to the investment bank, resulting in potential cost savings of up to 75%.",
            "Coordinated the development of a React web application for the investment bank's administrative operations, simplifying manual tasks by 30-40% and ensuring access privileges for different departments.",
            "Created customized UI components, accounting for 70% of the total components, to deliver unique and visually appealing user experiences.",
            "Optimized data management by utilizing the Redux state management library, resulting in a 40% reduction in application loading time and an enhanced user experience.",
            "Implemented Test-Driven Development (TDD) methodology and leveraged the React Testing Library, leading to a significant 50% reduction in bugs and an impressive 20% increase in code coverage.",
            "Demonstrated proficiency with AWS cloud services, including S3, Lambda, EC2, and Route 53, enabling efficient resource utilization and seamless scalability.",
            "Developed and consumed GraphQL and REST APIs, ensuring seamless integration of data between frontend and backend systems for enhanced performance and data flow.",
            "Facilitated effective communication among teams, reducing miscommunication and improving clarity to accelerate project progress.",
            "Managed and resolved codebase issues promptly, ensuring a stable and efficient development environment.",
            "Conducted interviews and provided mentorship to colleagues, enhancing overall team performance and fostering professional growth.",
            "Implemented Git flow for development tracking and introduced peer code review, resulting in a 50% decrease in code conflicts.",
            "Played a crucial role in client and business user discussions, offering valuable insights and contributing to the design and timely delivery of optimal solutions that align with business rules and requirements."
        ],
    },
    {
        title: "Intern",
        company_name: "Regov Technologies",
        icon: regov,
        iconBg: "#E6DEDD",
        date: "Oct 2019 - Feb 2020",
        points: [
            "Introduced design documents for AWS resources saving 20% of the time spent and gained a good knowledge.",
            "Led a team that represented Regov in BlockHack Nov 2019. Implemented a prototype for decentralised borderless money exchange using Sawtooth reducing 10-20% cost in international transactions and manipulations.",
        ],
    },
    {
        title: "Intern",
        company_name: "Kerala Blockchain Academy",
        icon: kba,
        iconBg: "#E6DEDD",
        date: "Jun 2019 - Sept 2019",
        points: [
            `Attained Nanodegree in Blockchain Hyperledger for project "e-Project" -a project management portal for managing government projects over a private blockchain network reducing corruption.`,
            `Attained Nanodegree in Blockchain Ethereum for project "CRIME PATROL" - a decentralized platform for criminal record storage minimizing data manipulation in crime records.`,
            "Co-authored project in automating the system configurations for setting up a private network which reduces manual work by 50%.",
        ],
    },
];

const projects = [
    {
        name: "Responsive Web",
        description:
            "Responsive landing page for a bank application making use of React and Tailwind.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            }
        ],
        image: hoobank,
        source_code_link: "https://github.com/johnnithin08/react-tailwind",
        live_link: "https://hoobank.nithindev.com/"
    },
    {
        name: "Advanced  Notes",
        description:
            "Advanced notes application which enables you to create, search and filter notes making use of React concepts such as Router, useeffect, useMemo and Bootstrap. Data is stored in local storage.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
        ],
        image: advancedNotes,
        source_code_link: "https://github.com/johnnithin08/advanced-notes",
        live_link: "https://notes.nithindev.com/",
    },
    {
        name: "Movie Database",
        description:
            "A movie database application making use of TMDB API to show movies and tv series. You can filter, search different movies and tv series. View the details of both including trailers, episode details (series) and cast details.",
        tags: [
            {
                name: "reactnative",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "android",
                color: "orange-text-gradient",
            },
            {
                name: "ios",
                color: "pink-text-gradient",
            },
        ],
        image: movieDatabase,
        source_code_link: "https://github.com/johnnithin08/tmdb-project",
    },
    {
        name: "Expense Tracker",
        description:
            "An fullstack expense tracker application making use of serverless AWS services such as Lambda, RDS and API Gateway. Enables you to log your expenses based on categories and view a summary of your expenses in the form of a pie graph.",
        tags: [
            {
                name: "reactnative",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "aws",
                color: "orange-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: "",
        source_code_link: "https://github.com/johnnithin08/react-crud-app",
    },
    {
        name: "QR Code Scanner",
        description:
            "A QR code scanner application which lets you scan QR code and view the result.",
        tags: [
            {
                name: "reactnative",
                color: "blue-text-gradient",
            },
        ],
        image: "",
        source_code_link: "https://github.com/johnnithin08/react-native-scan",
    },
];

export { services, technologies, experiences, projects };
