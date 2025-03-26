import { motion } from "framer-motion";
import { Recycle } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-green-50 to-blue-50 flex flex-col items-center justify-center z-50">
      <div className="w-full max-w-md px-4 text-center">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">
            Loading Skip Options
          </h2>
          <p className="text-gray-600">
            Finding the perfect waste management solution for you...
          </p>
        </div>

        {/* Loading indicators */}
        <div className="flex flex-col justify-center space-y-4 items-center">
          <div className="w-100 h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="p-2 bg-white rounded-full shadow-md"
          >
            <Recycle className="h-8 w-8 text-green-600" />
          </motion.div>
        </div>
      </div>

      <p className="absolute bottom-8 text-sm text-gray-500">
        Checking availability in your area...
      </p>
    </div>
  );
}
