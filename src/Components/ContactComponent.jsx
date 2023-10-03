import { 
    Typography, 
} from "@material-tailwind/react";

export default function ContactComponent(){

    return(
        <>
            <div className="relative min-h-screen-xl bg-gray-100 py-10 bg-center sm:flex sm:justify-center bg-dots-darker dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="p-6 mx-auto max-w-7xl lg:p-8 ">
                    <Typography variant="h1" className="text-center">Contact</Typography>
                    <Typography variant="paragraph" className="text-center pt-10">Thank you for visiting my portfolio website! If you&apos;re interested in working together, have any questions, or just want to chat, I&apos;d love to hear from you. Please reach out to me through one of the options below.</Typography>
                    <div className="py-10">
                        <ul className="flex flex-wrap justify-center items-center gap-y-2 gap-x-8">
                            <li>
                            <Typography
                                as="a"
                                href="https://www.linkedin.com/in/fiqri14/"
                                target="_blank"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor" className="w-8 h-8" viewBox="0 0 50 50">
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </Typography>
                            </li>
                            <li>
                            <Typography
                                as="a"
                                href="https://github.com/fiqto"
                                target="_blank"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24">
                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                </svg>
                            </Typography>
                            </li>
                            <li>
                            <Typography
                                as="a"
                                href="mailto:fiqto14@gmail.com"
                                target="_blank"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                            </Typography>
                            </li>
                        </ul>
                    </div>
                    <Typography variant="paragraph" className="text-center">I&apos;m always open to collaborations and new projects, so don&apos;t hesitate to get in touch. I&apos;ll do my best to respond as soon as possible.</Typography>
                </div>
            </div>
        </>
    );
}