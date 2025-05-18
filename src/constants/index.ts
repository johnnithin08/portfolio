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
	chatOn,
	taxiBudget,
	neuven,
	reactMovie,
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
		title: "Software Developer",
		company_name: "Neuven Solutions",
		icon: neuven,
		iconBg: "#E6DEDD",
		date: "Sep 2023 - Present",
		points: [
			"Refactored and ensured the website's mobile responsiveness by skillfully applying media queries and Bootstrap classes, enhancing user experience across various devices and screen sizes.",
			"Implemented comprehensive end-to-end testing using Cypress, enhancing the application's reliability and robustness, and reducing the occurrence of critical bugs.",
			"Conducted thorough market research and performed competitor analysis on locum applications, providing valuable insights and data-driven recommendations to inform strategic decision-making and product development.",
		],
	},
	{
		title: "React Native / React Developer",
		company_name: "Regov Technologies",
		icon: regov,
		iconBg: "#E6DEDD",
		date: "Feb 2020 - Aug 2023",
		points: [
			"Collaborated on an asset management project for Malaysia's largest investment bank, contributing to the project's successful execution and providing valuable insights and solutions.",
			"Enhanced application process flows by 10-15%, optimizing efficiency and productivity.",
			"Developed a cost-saving mobile app using React Native with TypeScript, enabling agents to onboard clients to the investment bank, resulting in potential cost savings of up to 75%.",
			"Coordinated the development of a React web application for the investment bank's administrative operations, simplifying manual tasks by 30-40% and ensuring access privileges for different departments.",
			"Created customized UI components, accounting for 70% of the total components, to deliver unique and visually appealing user experiences.",
			"Optimized data management by utilizing the Redux state management library, resulting in a 40% reduction in application loading time and an enhanced user experience.",
			"Demonstrated proficiency with AWS cloud services, including S3, Lambda, EC2, and Route 53, enabling efficient resource utilization and seamless scalability.",
			"Played a crucial role in client and business user discussions, offering valuable insights and contributing to the design and timely delivery of optimal solutions that align with business rules and requirements.",
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
		name: "Movie Website",
		description: `In this project, I've built a modern movie web app using React 19 and Vite, integrating with the TMDB API for movie data. You implemented efficient routing and data fetching using advanced third-party libraries.

            Third-party tools used:

            TanStack Router: for powerful, declarative routing.

            TanStack Query: for fetching and caching TMDB API data.

            TMDB API: to retrieve movie information.

            React 19: with the latest features and optimizations.

            Vite: for fast development and build tooling.
            `,
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Tailwind",
				color: "green-text-gradient",
			},
			{
				name: "Tanstack",
				color: "orange-text-gradient",
			},
		],
		image: reactMovie,
		source_code_link: "https://github.com/johnnithin08/react-movie-app",
		live_link: "https://movies.nithindev.com/",
	},
	{
		name: "Taxi Budget",
		description: `Taxi Budget is a dedicated mobile application designed exclusively for taxi drivers, providing a streamlined solution for efficient income and expense management. The app comes equipped with a user-friendly interface and powerful features tailored to meet the unique financial needs of taxi professionals.
            
            What I learned from the project:

            AWS Amplify Admin: Through this project, I gained valuable experience using AWS Amplify Admin to create a full-stack application. AWS Amplify Admin simplifies and accelerates the development process by providing a set of tools and services for building scalable and secure cloud-powered applications.

            GraphQL API Generation: I learned how to utilize AWS Amplify Admin to easily generate a GraphQL API for the application. GraphQL is a powerful query language for APIs that enables efficient data retrieval and manipulation. Amplify's automated API generation capabilities significantly reduced the effort required to set up the backend of the application.

            React Native Gifted Charts: In this project, I integrated React Native Gifted Charts to create interactive and visually appealing graphs and charts. These charts not only enhanced the user interface but also provided valuable insights into the financial data being managed by taxi drivers. This experience allowed me to improve my skills in integrating third-party libraries and creating engaging data visualizations within a React Native app.
            `,
		tags: [
			{
				name: "Reactnative",
				color: "blue-text-gradient",
			},
			{
				name: "Aws",
				color: "orange-text-gradient",
			},
			{
				name: "graphql",
				color: "green-text-gradient",
			},
			{
				name: "charts",
				color: "pink-text-gradient",
			},
		],
		image: taxiBudget,
		source_code_link: "https://github.com/johnnithin08/cab-expense",
		live_link:
			"https://play.google.com/store/apps/details?id=com.cabexpense",
	},
	{
		name: "Chat On",
		description: `Chat On revolutionizes communication with its user-friendly interface, allowing seamless one-on-one chats and dynamic group discussions. Connect with ease, share thoughts, and collaborate effortlessly in real-time.

            Enhanced with versatile features, Chat On supports file attachments, ensuring a comprehensive and interactive messaging experience. Stay connected and share your world effortlessly with Chat On.
            
            What I learned from the project:

            React Native Image Picker and React Native Video: During the development of "Chat On," I acquired proficiency in integrating and utilizing the React Native Image Picker and React Native Video libraries. These tools enabled the application to support image and video uploads, as well as seamless playback of video content. This enhanced the user experience by allowing users to share multimedia content within the chat platform.

            React Native Contacts: I implemented the React Native Contacts library to access the user's mobile contacts and filter them within the application. This feature streamlined the user experience by facilitating communication exclusively with contacts who are also using the "Chat On" app. It improved the efficiency of connecting with known contacts and fostering meaningful conversations.

            GraphQL Subscriptions: "Chat On" leveraged GraphQL subscriptions to achieve real-time data updates. This technology allowed users to receive instant notifications of new messages and updates within the chat platform. By implementing GraphQL subscriptions, I gained valuable insights into building responsive and real-time communication features, which are essential in modern messaging applications.
            `,
		tags: [
			{
				name: "Reactnative",
				color: "blue-text-gradient",
			},
			{
				name: "Aws",
				color: "orange-text-gradient",
			},
			{
				name: "graphql",
				color: "green-text-gradient",
			},
		],
		image: chatOn,
		source_code_link:
			"https://github.com/johnnithin08/react-native-chat-app",
		live_link:
			"https://play.google.com/store/apps/details?id=com.chatonnithin",
	},
	{
		name: "Movie Database",
		description: `Movie DB is a comprehensive and user-friendly application that allows users to explore a vast collection of movies and TV series. Powered by the TMDB API, the app provides an immersive experience to discover, rate, and save your favorite movies and TV shows.

            Key Features:

            Extensive Movie and TV Series Database: Stay up to date with the latest releases and discover new content across various genres.

            Watchlist: Create your personalized watchlist by adding movies and TV shows you wish to watch in the future. Keep track of your favorite content and easily access them whenever you want.

            Ratings: Help other users make informed decisions and contribute to the community by providing valuable feedback.

            Search and Filter Options: Refine your results with advanced filters, such as genre, release year, language, and more.

            Detailed Information: Get comprehensive details about movies and TV shows, including synopsis, cast and crew information, ratings, runtime, and trailers.

            User-Friendly Interface: Enjoy a clean and intuitive user interface designed for seamless navigation and enhanced user experience. Easily browse through categories, access your watchlist, and manage your profile.
            
            What I learned from the project:
            
            React Native: Learned how to create a mobile app that runs on both iOS and Android devices with a single codebase, reducing development time and effort.

            Redux: Learned how to implement Redux, a state management library, in your React Native app.

            Bottom Tab Navigation: Explored and implemented bottom tab navigation in your app.

            Deploying to Firebase: Learned how to deploy your app to Firebase, a cloud-based platform that offers various services such as hosting, real-time database, authentication, and more.

            App Store Submission: Deployed your app to the App Store, you gained hands-on experience with the process of submitting an app to Apple for review and distribution.`,
		tags: [
			{
				name: "Reactnative",
				color: "blue-text-gradient",
			},
			{
				name: "Restapi",
				color: "green-text-gradient",
			},
			{
				name: "Android",
				color: "orange-text-gradient",
			},
			{
				name: "ios",
				color: "pink-text-gradient",
			},
		],
		image: movieDatabase,
		source_code_link: "https://github.com/johnnithin08/tmdb-project",
		live_link:
			"https://play.google.com/store/apps/details?id=com.moviedatabase",
	},
	{
		name: "Responsive Web",
		description: `The Responsive Landing Page project is a web application developed using React and Tailwind CSS. The primary objective of this project is to create an attractive and user-friendly landing page that adapts seamlessly to various screen sizes, including desktops, tablets, and mobile devices. This project serves as a practical exercise for learning and mastering the fundamentals of React and Tailwind CSS.
        
            What I learned from the project:

            Understanding React: Building a responsive landing page using React helped me to grasp React's component-based architecture, state management, and rendering capabilities.
            
            Mastering Tailwind CSS: Utilizing Tailwind CSS enabled me to gain proficiency in designing responsive layouts, creating custom styles, and utilizing utility classes effectively.
            
            Responsive Web Design: Working on a responsive landing page provided hands-on experience in applying media queries and responsive design principles to ensure a smooth user experience across devices.
            
            Deployment: Deployed the landing page to a hosting platform helped me to understand the process of making the application accessible to users on the internet. `,
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Tailwind",
				color: "green-text-gradient",
			},
		],
		image: hoobank,
		source_code_link: "https://github.com/johnnithin08/react-tailwind",
		live_link: "https://hoobank.nithindev.com/",
	},
	{
		name: "Advanced  Notes",
		description: `The advanced notes application is a feature-rich web application built using React. It enables users to create, edit, and manage notes, as well as create tags to categorize the notes. The application also provides a Notes List page, where users can search notes by name and filter them based on tags.
            
            What I learned from the project:

            React: Building the application with React involves breaking down the UI into reusable components and managing the component state effectively.

            useEffect: The useEffect hook is used to perform side effects in functional components.

            useMemo: The useMemo hook is used to memoize expensive calculations, preventing unnecessary re-computations in functional components.

            Bootstrap: Bootstrap is used for styling the user interface, providing responsive and visually appealing designs without having to write custom CSS from scratch.

            State Management: Handling state within the application is crucial for managing the notes, tags, and search functionalities. State management concepts like useState and context API might be used to manage the state effectively.

            Routing: To navigate between different pages or views, a routing library like React Router might be used.

            Form Handling: Implementing form handling techniques to gather user input for creating or editing notes.`,
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
		],
		image: advancedNotes,
		source_code_link: "https://github.com/johnnithin08/advanced-notes",
		live_link: "https://notes.nithindev.com/",
	},
	{
		name: "Expense Tracker",
		description: `The full-stack expense tracker application is a comprehensive project that allows users to manage their expenses efficiently. The application offers two primary functionalities: the ability to add expenses and the capability to generate expense summaries based on categories. The backend is built as a serverless application, utilizing AWS Lambda, RDS (Relational Database Service), and API Gateway to handle the application's data and logic.
            
            What I learned from the project:

            Nodejs:
            Nodejs was used to build the BE side of the project. Helped me to further enhance my knowledge to a full stack developer.

            AWS Lambda:
            AWS Lambda is a serverless compute service that enables developers to run code without managing servers. In the context of this project, AWS Lambda functions were used to handle various backend tasks, such as processing expense data, validating input, and calculating summaries. Developers learned how to deploy functions, set up triggers, and interact with other AWS services.

            RDS (Relational Database Service):
            AWS RDS simplifies the process of setting up, operating, and scaling relational databases in the cloud. In the expense tracker application, RDS was utilized to store and manage expense data in a relational database. This involved creating tables, defining schemas, and performing CRUD operations on the database.

            API Gateway:
            AWS API Gateway acts as a frontend to the serverless backend, providing a secure and scalable API endpoint for the frontend to interact with the backend services. Developers learned how to set up API endpoints, handle authentication and authorization, and integrate API Gateway with Lambda functions and RDS to facilitate smooth communication between the frontend and backend.

            Full-stack Development:
            By working on this project, developers gained experience in building a full-stack application from scratch. They learned how to integrate the frontend (built with React Native) with the backend (AWS Lambda, RDS, and API Gateway) to create a seamless user experience.
            `,
		tags: [
			{
				name: "Reactnative",
				color: "blue-text-gradient",
			},
			{
				name: "Restapi",
				color: "green-text-gradient",
			},
			{
				name: "Aws",
				color: "orange-text-gradient",
			},
			{
				name: "Nodejs",
				color: "pink-text-gradient",
			},
		],
		image: "",
		source_code_link: "https://github.com/johnnithin08/react-crud-app",
	},
	{
		name: "QR Code Scanner",
		description: `The project is a QR code scanner built using the react-native-vision-camera library in a React Native application. The app allows users to use their device's camera to scan QR codes and then view the details encoded within the QR code.

            What I learned from the project:

            QR Code Scanning in React Native: I gained hands-on experience with integrating the react-native-vision-camera library to enable QR code scanning within a React Native application.

            Camera Access and Permissions: I learned how to request camera access permissions from the user and how to work with the device's camera for capturing video frames.

            QR Code Recognition: I discovered how to use the QR code recognition capabilities of react-native-vision-camera to detect and decode QR codes from the captured video frames.`,
		tags: [
			{
				name: "Reactnative",
				color: "blue-text-gradient",
			},
		],
		image: "",
		source_code_link: "https://github.com/johnnithin08/react-native-scan",
	},
];

export { services, technologies, experiences, projects };
