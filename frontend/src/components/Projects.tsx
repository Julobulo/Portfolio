import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaCode, FaGithub, FaIcons, FaTwitter } from 'react-icons/fa';
import Spinner from './Spinner';
const domainName = import.meta.env.VITE_API_BASE_URL;

// Function to parse and replace links in the description
const parseLinks = (text: string) => {
    const regex = /\(([^)]+)\)\[([^\]]+)\]/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
        const [, linkText, url] = match;
        const start = match.index;
        const end = regex.lastIndex;

        // Push the text before the link
        if (start > lastIndex) {
            parts.push(text.substring(lastIndex, start));
        }

        // Push the link
        parts.push(
            <a
                key={url + start} // Unique key for each link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline' }}
            >
                {linkText}
            </a>
        );

        lastIndex = end;
    }

    // Push any remaining text after the last link
    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return parts;
};

const Projects = () => {
    // Define a TypeScript interface for the project data
    interface Project {
        _id: string;
        title: string;
        image: string;
        timeItTook: string;
        tags: Record<string, string>;
        description: string;
        code?: string;
        live?: string;
        date: string;
    }
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        axios.get(`${domainName}/projects`)
            .then((response) => {
                setProjects(response.data);
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
            })
    }, [])

    // Function to render the correct icon based on the tag
    const renderTagIcon = (tag: string) => {
        console.log(`icon: ${tag.toLowerCase().replace(/\s/g, '')}`);
        switch (tag.toLowerCase().replace(/\s/g, '')) {
            case "bootstrap":
                return <img
                    src='/bootstrap.svg'
                    style={{ height: "40px", width: "50px" }}
                />
            case "express":
                return <img
                    src='/express.svg'
                    style={{ height: "40px", width: "40px" }}
                />
            case "python":
                return <img
                    src='/python.svg'
                    style={{ height: "50px", width: "40px" }}
                />
            case "pygame":
                return <img
                    src='/pygame.svg'
                    style={{ height: "40px", width: "80px" }}
                />
            case "react":
            case "reactjs":
                return <img
                    src='/reactjs.svg'
                    style={{ height: "40px", width: "40px" }}
                />;
            case "node":
            case "nodejs":
                return <img
                    src='/nodejs.svg'
                    style={{ height: "40px", width: "40px" }}
                />
            case "tailwindcss":
            case "tailwind":
                return <img
                    src='/tailwind.svg'
                    style={{ height: "40px", width: "40px" }}
                />
            case "mongodb":
                return <img
                    src="/mongodb.svg"
                    style={{ height: "40px", width: "40px" }}
                />
            case "mantine":
                return <img
                    src='/mantine.svg'
                    style={{ height: "40px", width: "40px" }}
                />
            case "vite":
                return <img
                    src='/vite.svg'
                    style={{ height: "40px", width: "40px" }}
                />
            case "unity":
                return <img
                    src='/unity.svg'
                    style={{ height: "40px", width: "110px" }}
                />
            case "cloudflareworkers":
                return <img
                    src='/cloudflare workers.svg'
                    style={{ height: "40px", width: "120px" }}
                />
            case "googlecloud":
                return <img
                    src='/google cloud.svg'
                    style={{ height: "40px", width: "49px" }}
                />
            case "hono":
                return <img
                    src='/hono.svg'
                    style={{ height: "40px", width: "31px" }}
                />
            default:
                return <FaIcons />;
        }
    };

    if (loading) {
        return <Spinner />
    }

    return (
        <div className="mt-12 w-full flex flex-col items-center" id='projects'>
            <h2 className="text-3xl font-bold my-6">My Projects</h2>
            <div className="container mx-auto px-4 py-8">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {projects.map(project => (
                        <div key={project._id} className="bg-white dark:bg-slate-700 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                            <img src={project.image} alt={project.title} className="w-full h-64 object-cover object-center" />
                            <div className="p-4 flex-grow">
                                <div className='flex flex-row justify-between'>
                                    <div>
                                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                                        <p className="text-xs text-gray-500 dark:text-white mb-2">Started: {project.date}</p>
                                    </div>
                                    <p
                                        className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                                        style={{ height: '30px' }}
                                    >
                                        ~{project.timeItTook}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {Object.keys(project.tags).map((key) => (
                                        <div
                                            key={key}
                                            className="px-2 py-1 rounded-full text-xs"
                                            title={project.tags[key]}
                                        >
                                            {renderTagIcon(project.tags[key])}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-700 dark:text-white">{parseLinks(project.description)}</p>
                            </div>
                            {project.code && project.live ?
                                (<div className="flex justify-between m-4 align-bottom">
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-1/6 flex justify-center items-center rounded-lg mr-1 text-2xl bg-gray-400`}
                                    >
                                        <FaCode />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-5/6 ml-1 rounded-lg block py-2 px-4 text-center bg-orange-500 text-white`}
                                    >
                                        Live Preview
                                    </a>
                                </div>) : (<></>)
                            }
                            {project.code && !project.live ?
                                (
                                    <div className="flex justify-between m-4 align-bottom">
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-1/6 flex justify-center items-center rounded-lg mr-1 text-2xl bg-gray-400`}
                                        >
                                            <FaCode />
                                        </a>
                                        <a
                                            href={'https://twitter.com/@JulesTheDev'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-5/6 ml-1 rounded-lg block py-2 px-4 text-center bg-orange-500 text-white`}
                                        >
                                            <FaTwitter className='inline' /> Stay updated
                                        </a>
                                    </div>
                                ) : (<></>)
                            }
                            {!project.code && project.live ?
                                (
                                    <div className="flex justify-between m-4 align-bottom">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-full ml-1 rounded-lg block py-2 px-4 text-center bg-orange-500 text-white`}
                                        >
                                            Live Preview
                                        </a>
                                    </div>
                                ) : (<></>)
                            }
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end items-center mt-8 mx-2">
                <span className="mr-4 text-lg font-semibold">...and so much more coming. To stay updated:</span>
                <div className="flex space-x-4">
                    <a
                        href="https://twitter.com/JulesTheDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 text-3xl"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://github.com/Julobulo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 dark:text-white text-3xl"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
