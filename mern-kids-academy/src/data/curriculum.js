import { Globe, Database, Server, Layout, Code, Shield, Award, Play } from 'lucide-react';

export const curriculum = [
    {
        id: 0,
        title: "Web & JS Foundations",
        icon: Globe,
        color: "bg-blue-500",
        description: "Master the basics of the web and JavaScript before diving into the stack.",
        modules: [
            {
                id: "0.1",
                title: "How the Web Works",
                lessons: [
                    { id: "0.1.1", title: "Client vs Server", type: "theory" },
                    { id: "0.1.2", title: "Request & Response", type: "visual" },
                    { id: "0.1.3", title: "HTTP Simulator", type: "interactive" }
                ]
            },
            {
                id: "0.2",
                title: "JavaScript Basics",
                lessons: [
                    { id: "0.2.1", title: "Variables & Types", type: "code" },
                    { id: "0.2.2", title: "Functions & Logic", type: "code" },
                    { id: "0.2.3", title: "The DOM", type: "interactive" }
                ]
            }
        ]
    },
    {
        id: "html",
        title: "HTML Mastery",
        icon: Globe,
        color: "bg-orange-500",
        description: "Zero to Hero: Master the skeleton of the web.",
        modules: [
            {
                id: "html.1",
                title: "HTML Foundations",
                lessons: [
                    { id: "html.1.1", title: "What is HTML?", type: "guide" },
                    { id: "html.1.2", title: "How websites work", type: "visual" },
                    { id: "html.1.3", title: "Basic Structure", type: "code" },
                    { id: "html.1.4", title: "Head, Title & Body", type: "code" }
                ]
            },
            {
                id: "html.2",
                title: "Text & Formatting",
                lessons: [
                    { id: "html.2.1", title: "Headings (h1-h6)", type: "code" },
                    { id: "html.2.2", title: "Paragraphs & Breaks", type: "code" },
                    { id: "html.2.3", title: "Bold & Italic", type: "interactive" },
                    { id: "html.2.4", title: "Underline & Highlights", type: "interactive" }
                ]
            },
            {
                id: "html.3",
                title: "Structure & Layout",
                lessons: [
                    { id: "html.3.1", title: "Div & Span", type: "code" },
                    { id: "html.3.2", title: "Header, Nav, Main, Footer", type: "visual" },
                    { id: "html.3.3", title: "Section, Article, Aside", type: "visual" }
                ]
            },
            {
                id: "html.4",
                title: "Links & Media",
                lessons: [
                    { id: "html.4.1", title: "Links (Wrappers)", type: "code" },
                    { id: "html.4.2", title: "Images", type: "visual" },
                    { id: "html.4.3", title: "Audio & Video", type: "interactive" }
                ]
            },
            {
                id: "html.5",
                title: "Lists",
                lessons: [
                    { id: "html.5.1", title: "Unordered Lists", type: "code" },
                    { id: "html.5.2", title: "Ordered Lists", type: "code" },
                    { id: "html.5.3", title: "Nested Lists", type: "challenge" }
                ]
            },
            {
                id: "html.6",
                title: "Tables",
                lessons: [
                    { id: "html.6.1", title: "Table Basics", type: "visual" },
                    { id: "html.6.2", title: "Headers & Structure", type: "code" }
                ]
            },
            {
                id: "html.7",
                title: "Forms",
                lessons: [
                    { id: "html.7.1", title: "The Form Container", type: "guide" },
                    { id: "html.7.2", title: "Basic Inputs", type: "code" },
                    { id: "html.7.3", title: "Selection Controls", type: "interactive" },
                    { id: "html.7.4", title: "Buttons & Textarea", type: "interactive" }
                ]
            },
            {
                id: "html.8",
                title: "Attributes & Advanced",
                lessons: [
                    { id: "html.8.1", title: "IDs & Classes", type: "code" },
                    { id: "html.8.2", title: "Paths & Attributes", type: "visual" },
                    { id: "html.8.3", title: "Iframes", type: "interactive" },
                    { id: "html.8.4", title: "Meta Tags", type: "guide" }
                ]
            }
        ]
    },
    {
        id: "css",
        title: "CSS Mastery",
        icon: Layout,
        color: "bg-blue-600",
        description: "Style and Design: Make the web beautiful.",
        modules: [
            {
                id: "css.1",
                title: "CSS Foundations",
                lessons: [
                    { id: "css.1.1", title: "What is CSS?", type: "guide" },
                    { id: "css.1.2", title: "Selectors & Specificity", type: "code" },
                    { id: "css.1.3", title: "The Cascade", type: "visual" }
                ]
            },
            {
                id: "css.2",
                title: "Colors & Backgrounds",
                lessons: [
                    { id: "css.2.1", title: "Colors (Hex/RGB)", type: "interactive" },
                    { id: "css.2.2", title: "Backgrounds", type: "visual" },
                    { id: "css.2.3", title: "Gradients", type: "code" }
                ]
            },
            {
                id: "css.3",
                title: "Typography",
                lessons: [
                    { id: "css.3.1", title: "Fonts & Families", type: "guide" },
                    { id: "css.3.2", title: "Size & Weight", type: "interactive" },
                    { id: "css.3.3", title: "Alignment & Spacing", type: "visual" }
                ]
            },
            {
                id: "css.4",
                title: "The Box Model",
                lessons: [
                    { id: "css.4.1", title: "Margin, Border, Padding", type: "visual" },
                    { id: "css.4.2", title: "Box Sizing", type: "code" },
                    { id: "css.4.3", title: "Display Properties", type: "interactive" }
                ]
            },
            {
                id: "css.5",
                title: "Modern Layouts",
                lessons: [
                    { id: "css.5.1", title: "Flexbox Basics", type: "visual" },
                    { id: "css.5.2", title: "Flex Alignment", type: "interactive" },
                    { id: "css.5.3", title: "CSS Grid", type: "code" }
                ]
            },
            {
                id: "css.6",
                title: "Responsive Design",
                lessons: [
                    { id: "css.6.1", title: "Media Queries", type: "code" },
                    { id: "css.6.2", title: "Relative Units", type: "guide" }
                ]
            },
            {
                id: "css.7",
                title: "Effects & Positioning",
                lessons: [
                    { id: "css.7.1", title: "Positioning", type: "visual" },
                    { id: "css.7.2", title: "Shadows & Radius", type: "interactive" },
                    { id: "css.7.3", title: "Z-Index", type: "visual" }
                ]
            },
            {
                id: "css.8",
                title: "Animations & Variables",
                lessons: [
                    { id: "css.8.1", title: "Transitions", type: "interactive" },
                    { id: "css.8.2", title: "Keyframes", type: "code" },
                    { id: "css.8.3", title: "CSS Variables", type: "code" }
                ]
            }
        ]
    },
    {
        id: 1,
        title: "Backend (Node + Express)",
        icon: Server,
        color: "bg-green-600",
        description: "Build your first server and API.",
        modules: [
            {
                id: "1.1",
                title: "Node Fundamentals",
                lessons: [
                    { id: "1.1.1", title: "The Event Loop", type: "visual" },
                    { id: "1.1.2", title: "File System", type: "code" }
                ]
            },
            {
                id: "1.2",
                title: "Express Basics",
                lessons: [
                    { id: "1.2.1", title: "Routing", type: "code" },
                    { id: "1.2.2", title: "Middleware", type: "visual" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Database (MongoDB)",
        icon: Database,
        color: "bg-emerald-600",
        description: "Store data permanently in the Vault.",
        modules: [
            {
                id: "2.1",
                title: "MongoDB Basics",
                lessons: [
                    { id: "2.1.1", title: "Collections & Docs", type: "visual" },
                    { id: "2.1.2", title: "CRUD Operations", type: "code" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Frontend Mastery (React)",
        icon: Layout,
        color: "bg-teal-500",
        description: "Master the essential 40% of React used by pros.",
        modules: [
            {
                id: "3.1",
                title: "Components & The Tree",
                lessons: [
                    { id: "3.1.1", title: "Thinking in React", type: "visual" },
                    { id: "3.1.2", title: "JSX Basics", type: "code" }
                ]
            },
            {
                id: "3.2",
                title: "State & Interactivity",
                lessons: [
                    { id: "3.2.1", title: "useState Hook", type: "interactive" },
                    { id: "3.2.2", title: "Event Listeners", type: "code" }
                ]
            },
            {
                id: "3.3",
                title: "Lists & Keys",
                lessons: [
                    { id: "3.3.1", title: "Rendering Arrays", type: "visual" },
                    { id: "3.3.2", title: "The Key Prop", type: "code" }
                ]
            },
            {
                id: "3.4",
                title: "Effects & Lifecycle",
                lessons: [
                    { id: "3.4.1", title: "useEffect Hook", type: "visual" },
                    { id: "3.4.2", title: "Fetching Data", type: "code" }
                ]
            },
            {
                id: "3.5",
                title: "Forms & Inputs",
                lessons: [
                    { id: "3.5.1", title: "Controlled Inputs", type: "interactive" },
                    { id: "3.5.2", title: "Validation", type: "code" }
                ]
            },
            {
                id: "3.6",
                title: "Routing & Navigation",
                lessons: [
                    { id: "3.6.1", title: "React Router", type: "visual" },
                    { id: "3.6.2", title: "Dynamic Routes", type: "code" }
                ]
            },
            {
                id: "3.7",
                title: "Global State (Context)",
                lessons: [
                    { id: "3.7.1", title: "Prop Drilling", type: "visual" },
                    { id: "3.7.2", title: "Context API", type: "code" }
                ]
            },
            {
                id: "3.project",
                title: "Capstone: CineMatic App",
                lessons: [
                    { id: "3.cap.1", title: "Project Brief", type: "challenge" }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Full MERN Integration",
        icon: Code,
        color: "bg-indigo-600",
        description: "Connect everything together.",
        modules: [
            {
                id: "4.1",
                title: "Connecting the Dots",
                lessons: [
                    { id: "4.1.1", title: "API Integration", type: "code" },
                    { id: "4.1.2", title: "Authentication", type: "code" }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Professional & Deployment",
        icon: Award,
        color: "bg-purple-600",
        description: "Go live and optimize for the world.",
        modules: [
            {
                id: "5.1",
                title: "Deployment",
                lessons: [
                    { id: "5.1.1", title: "Deploying Frontend", type: "guide" },
                    { id: "5.1.2", title: "Deploying Backend", type: "guide" }
                ]
            }
        ]
    }
];
