import { Typography, } from "@material-tailwind/react";

export default function FooterComponent(){

    return(
        <>
            <footer className="items-center justify-center px-6 border-t border-blue-gray-50 py-6 text-center md:justify-between">
                <Typography color="blue-gray" className="font-normal">
                    Made width Material Tailwind
                </Typography>
                <Typography color="blue-gray" className="font-normal">
                    MIT License &copy; 2023
                </Typography>
            </footer>
        </>
    );
}