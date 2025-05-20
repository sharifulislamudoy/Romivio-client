import { motion } from "framer-motion";



const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-[#f9fafbef] text-black">
            <span className="loading loading-bars loading-xl text-blue-500"></span>
        </div>
    );
};

export default LoadingSpinner;
