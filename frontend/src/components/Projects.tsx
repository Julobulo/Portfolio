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
        console.log(`icon: ${tag}`);
        switch (tag.toLowerCase()) {
            case "react":
                return <FaReact />;
            case "node":
                return <FaNodeJs />
            case "tailwind" || "tailwind css" || "tailwindcss":
                return <RiTailwindCssFill />
            case "mongodb":
                return <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4klEQVR4nO1ZzW8NURS/Qgg74n8Qdjydc6bRiCBqZdNnJ11gzp1i0USCVS2EBV0Im37MOe+JRrwNC2VRrNiwI5FoQlSCin7YVIJq5b6Oph/z5s6C+ZD+kl8yyb2L3+/cc86cuaPUCv5j6AB8T1CrIkKz06IFf9TJTosqEvyBXRtJ8L0WnDUkgQ9eT2mzKgpIoPZH/ALeVUWAZmyPED9HxnaVZxztw03E8LmRAWIcy3UqkUDQMPrzpwD9Ko/wGHdoxpklYqfrXJxGM2avyhu04GBExKeI4VtEKt1TeYLPbtOy6NeFwgQxTEalkldtdlVeQAJDDYr2k2HkmsCQygN0f/OWqOiHIt9phpFGBe1XYWvW+hUxXolpm6+14HBMV7qcqfhybdvauL6vBV6QwMsYA19OXW1dl5kBCpw2S99/HrLhHgqctuwMMN6yvLSekMDTWAMCA5mI7+ravUYLjMeLw0eG8acE4+VaeXXqBvwKlGxjAzHe1wwPrONF1d2eugFi6LAbgDtmjLYaCMBP3YBm7LUKY7hdp3Uf9qZugBgfJzBQJcYbCfY9TN2AZnxrTSGBPkP7PnyTugEzqFkjK3CNGK4nKPax1A2ENw42YWbM6E5QA99TN0ACPxOcwEVivJRLA1rwawJhXXXa2+1E6gbCSdN2AmeJ8VyCVHuVuoEkb1gKsNPQbhQHMzCAFxKkRocW50SCdns+dQOeuHsT1MCxOi37/IqzJ6NpFEfjxTlH5hhr8mMm06gBsXM6NrLilqmCh211orKC11PaEHcKxM4hw7jod9ZwvcoSxLB/2e3bvED3gCfYGl24+EtX4KDKAxr1elOchpFrDGdUnkACx5eOF+b2zWe3efGpwDQxnlR5BFXQWXgLYT47F356ksAzr79pp8o1ZtWqsC5uzhswzwHuM2uqSNCCw2ZmUkWFZhgx96OqqNCCo+Z2WhUVxDCZyaz/txD+nZlSRYUO/5FlrWMF6h/iNwFD5Zin1tTcAAAAAElFTkSuQmCC">
                </img>
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
