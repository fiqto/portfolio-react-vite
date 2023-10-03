import { Typography, Button, } from "@material-tailwind/react";
import { motion } from "framer-motion"

export default function HomeComponent(){
    return(
        <>
            <div className="relative min-h-screen-xl bg-gray-900 py-20 bg-center sm:flex sm:justify-center sm:items-center bg-dots-darker dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="p-6 mx-auto max-w-7xl lg:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-6 items-center">
                        <div className="md:col-start-1 md:col-end-4 h-auto md:h-96 p-4 text-white">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Typography variant="h1">Hi,</Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Typography variant="h1">I&apos;m Fiqri Baihaqi</Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Typography variant="lead">Full-Stack Developer</Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <Typography variant="paragraph" className="my-2">
                                Fresh graduate from Telkom Institute of Technology Surabaya. Have a good knowledge of Web Development. Currently learning Frontend Engineering with React.js, and Backend Development using Laravel. Have experience working in a team with software development methodologies such as Agile Scrum.
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <a href="#contact">
                                <Button variant="filled" color="white" className="mt-2">
                                Contact Me
                                </Button>
                                </a>
                            </motion.div>
                        </div>
                        <div className="md:col-end-7 md:col-span-3 bg-gray-300">
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                <img
                                className="h-auto md:h-96 w-full object-cover object-center p-4"
                                src="/images/profile2.png"
                                alt="profile"
                                />
                            </motion.div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}