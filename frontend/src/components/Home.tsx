import { useState } from "react"

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="container mx-auto py-24 px-4 sm:px-0">
            <section className="flex flex-col sm:flex-row items-center">
                {/* Text Section */}
                <div className="sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0">
                    <span className="text-lg font-body uppercase font-normal text-gray-600 dark:text-gray-300 block pb-1">
                        Welcome, my name is
                    </span>
                    <h1 className="text-6xl md:text-9xl font-bold leading-tight text-black dark:text-white pb-4">
                        Jules Fagard
                    </h1>
                    <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-600 dark:text-gray-300">
                        I am a Full Stack Developer & Cybersecurity Enthusiast
                    </h2>
                </div>

                {/* Image Section */}
                <div className="sm:w-1/2 text-center">
                    <img
                        src={isHovered ? '/me.jpeg' : '/me.jpeg'}
                        onMouseOver={() => setIsHovered(true)}
                        onMouseOut={() => setIsHovered(false)}
                        alt={isHovered ? 'Drawing' : 'Picture'}
                        style={{ height: '500px', width: '400px' }}
                        className="mx-auto rounded-full"
                    />
                </div>
            </section>
        </div>
    )
}

export default Home