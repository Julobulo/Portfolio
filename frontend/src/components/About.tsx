const About = () => {
    return (
        <section id="about" className="w-full relative px-6 sm:px-16 transition-colors duration-300 bg-gray-100 dark:bg-stone-900">
            <div className="max-w-4xl mx-auto py-12 sm:py-16 md:py-24 lg:py-32 flex justify-center fade-in-init animate-fade-in">
                <div className="flex flex-col gap-4 md:w-4/5 lg:w-3/5 text-gray-700 dark:text-gray-100">
                    <div className="flex flex-col">
                        <h2 className="text-xl md:text-2xl font-bold">About</h2>
                        <span className="text-sm md:text-base font-medium">I'm a passionate developer and judo player</span>
                    </div>
                    <p className="text-sm md:text-base font-normal leading-relaxed first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-black dark:first-letter:text-white first-letter:mr-3 first-letter:float-left">
                        I am a French teenager who loves coding, cybersecurity and sport. I had the pleasure to spend one year in the US thanks to my father, a researcher.
                        There, I had the opportunity to go to Indiana University, where I met a lot of extraordinary people and <a href="https://github.com/Julobulo/C2">continued my cybersecurity journey</a>.
                    </p>
                    <p className="text-sm md:text-base font-normal leading-relaxed">
                        I am an experienced <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            Python
                        </span> developer and I enjoy working daily in <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            Full stack web development
                        </span>. My <a href="">current projects</a> deepen my knowledge in those areas daily.
                    </p>
                    <p className="text-sm md:text-base font-normal leading-relaxed">
                        Outside of coding, I enjoy playing soccer and basketball with my friends. Moreover, I'm passionate about <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            martial arts
                        </span>, in particular <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            judo
                        </span> in which I am a blue belt. I often participate to championships; I made it to 7th place in the national tournament of Portugal, my second country of origin.
                    </p>
                </div>
            </div>
        </section>

    )
}

export default About