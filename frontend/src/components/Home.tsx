
const Home = () => {
    return (
        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
            <div className="container mx-auto">
                <section className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2" style={{ opacity: 1 }}>
                    <div className="w-full md:w-1/3 text-left">
                        <div className="flex flex-col gap-4">
                            <span className="text-lg font-body uppercase font-normal fade-down [animation-delay:4800ms]">Hi, my name is</span>
                            <h1 className="w-full">
                                <span className="text-9xl">Jules Fagard</span>
                            </h1>
                            <h2 className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200">I am a Full Stack Developer & Cybersecurity Enthusiast</h2>
                        </div>
                        <h1 className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase" style={{ opacity: 1 }}>Hi, I am Jules Fagard</h1>
                        <p className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200" style={{ opacity: 1 }}>A Full-Stack Developer &amp; Design Enthusiast</p>
                        <div className="flex justify-center sm:block" style={{ opacity: 1 }}>
                        </div>
                    </div>
                    <div className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0" style={{ opacity: 1, transform: "none" }}><img src="/static/media/developer.ef097afb.svg" alt="Developer" /></div>
                </section>
            </div>
            <div className="container mx-auto">
                <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
                    <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
                        <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">Follow me</p>
                        <ul className="flex gap-4 sm:gap-8">
                            <a href="https://www.stoman.me/" target="__blank" className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300">
                                <i className="text-xl sm:text-2xl md:text-3xl">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                </i>
                            </a>
                            <a href="https://github.com/realstoman" target="__blank" className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300">
                                <i className="text-xl sm:text-2xl md:text-3xl">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </i>
                            </a>
                            <a href="https://twitter.com/realstoman" target="__blank" className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300">
                                <i className="text-xl sm:text-2xl md:text-3xl">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                    </svg>
                                </i>
                            </a>
                            <a href="https://www.linkedin.com/in/realstoman" target="__blank" className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300">
                                <i className="text-xl sm:text-2xl md:text-3xl">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </i>
                            </a>
                            <a href="https://www.youtube.com/c/realstoman" target="__blank" className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300">
                                <i className="text-xl sm:text-2xl md:text-3xl">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                    </svg>
                                </i>
                            </a>
                        </ul>
                    </div>
                    <div className="font-general-regular flex justify-center items-center text-center">
                        <div className="text-lg text-ternary-dark dark:text-ternary-light">© 2024<a href="https://github.com/realstoman/react-tailwindcss-portfolio" target="__blank" className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">React &amp; Tailwind CSS Portfolio</a>.<a href="https://stoman.me" target="__blank" className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">Stoman</a></div>
                    </div>
                </div>
            </div>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="scrollToTop" style={{ height: "45px", width: "45px", borderRadius: "50px", right: "50px", bottom: "50px", display: "none", padding: "5px" }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <polyline points="18 15 12 9 6 15">
                </polyline>
            </svg>
        </div >
    )
}

export default Home