import { useState } from 'react';
import { FiSend } from "react-icons/fi";
const domainName = import.meta.env.VITE_API_BASE_URL;

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSend = async () => {
        setError(null);
        setSuccess(null);
        
        if (!name || !email || !message) {
            setError("All fields are required.");
            return;
        }

        try {
            const response = await fetch(`${domainName}/message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.status === 201) {
                setSuccess("Message sent successfully!");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setError("Failed to send the message. Please try again.");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <section className="body-font relative bg-slate-100 dark:bg-slate-900 text-gray-700 dark:text-gray-400 mt-20" id="contact">
            <div className="container mx-auto px-5 py-24">
                <div className="mb-12 flex w-full flex-col text-center">
                    <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl">Contact Me</h1>
                    <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                        Feel free to reach out to me! Whether you have a question, feedback, or a collaboration proposal, I'd love to hear from you.
                    </p>
                </div>
                <div className="mx-auto md:w-2/3 lg:w-1/2">
                    <div className="-m-2 flex flex-wrap">
                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="peer w-full rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-900 dark:text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900"
                                    placeholder="Name"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray-600 dark:text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                                >
                                    Name
                                </label>
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="peer w-full rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-900 dark:text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900"
                                    placeholder="Email"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray-600 dark:text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                                >
                                    Email
                                </label>
                            </div>
                        </div>
                        <div className="mt-4 w-full p-2">
                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="peer h-32 w-full resize-none rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-900 dark:text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900"
                                    placeholder="Message"
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray-600 dark:text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                                >
                                    Message
                                </label>
                            </div>
                        </div>
                        <div className="w-full p-2">
                            <button
                                className="mx-auto flex items-center gap-2 rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none"
                                onClick={handleSend}
                            >
                                <FiSend />
                                Send
                            </button>
                        </div>
                        {error && <div className="w-full p-2 text-red-500 text-center">{error}</div>}
                        {success && <div className="w-full p-2 text-green-500 text-center">{success}</div>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
