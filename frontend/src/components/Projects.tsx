import axios from 'axios';
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { FaCode, FaIcons, FaNodeJs, FaReact } from 'react-icons/fa';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import MultiCardCarousel from "./Carousel";
import { RiTailwindCssFill } from 'react-icons/ri';
const domainName = import.meta.env.VITE_API_BASE_URL;

// const projects = [
//     { id: 1, title: 'Project 1' },
//     { id: 2, title: 'Project 2' },
//     { id: 3, title: 'Project 3' },
//     { id: 4, title: 'Project 4' },
//     { id: 5, title: 'Project 5' },
//     { id: 6, title: 'Project 6' },
// ];

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios.get(`${domainName}/projects`)
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    // Function to render the correct icon based on the tag
    const renderTagIcon = (tag) => {
        console.log(`icon: ${tag.toLowerCase().replace(/\s/g, '')}`);
        switch (tag.toLowerCase().replace(/\s/g, '')) {
            case "bootstrap":
                return <img
                src='/bootstrap.svg'
                style={{height: "40px", width: "50px"}}
                />
            case "react":
            case "reactjs":
                return <img
                src='/reactjs.svg'
                style={{height: "40px", width: "40px"}}
                />;
            case "node":
            case "nodejs":
                return <img 
                src='/nodejs.svg'
                style={{height: "40px", width: "40px"}}
                />
            case "tailwindcss":
            case "tailwind":
                console.log('tailwind !!!!!')
                return <img
                src='/tailwind.svg'
                style={{height: "40px", width: "40px"}}
                />
            case "mongodb":
                return <img
                src="/mongodb.svg"
                style={{height: "40px", width: "40px"}}
                />
            default:
                return <FaIcons />;
        }
    };

    return (
        <div className="mt-12 w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6">My Projects</h2>
            <div className="container mx-auto px-4 py-8">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {projects.map(project => (
                        <div key={project._id} className="bg-white dark:bg-slate-700 rounded-lg shadow-lg overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-64 object-cover object-center" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {Object.keys(project.tags).map((key) => (
                                        <div
                                            key={key}
                                            className="px-2 py-1 rounded-full text-xs dark:bg-black"
                                            title={project.tags[key]}
                                        >
                                            {renderTagIcon(project.tags[key])}
                                        </div>
                                    ))}
                                    <p className="text-sm text-gray-600 dark:text-white mb-1"><strong>Time it took:</strong> {project.timeItTook}</p>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-white">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
