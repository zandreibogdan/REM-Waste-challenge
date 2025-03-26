import { Product } from "@/types/product";
import { motion } from "framer-motion";
import { Truck, Weight, Calendar, PoundSterling } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProductCard(
  product: Product,
  selectedProduct: Product | null,
  handleSelectProduct: (product: Product) => void,
  calculateTotalPrice: (product: Product) => number
) {
  return (
    <motion.div
      key={product.id}
      className={`relative rounded-xl overflow-hidden shadow-lg transition-all cursor-pointer h-[420px] ${
        selectedProduct?.id === product.id
          ? "ring-2 ring-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] border-8 border-green-600"
          : ""
      }`}
      whileHover={{
        y: -5,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => handleSelectProduct(product)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image section with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
          alt="sticker"
          className="w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-800" />
      </div>

      {/* Top badges */}
      <div className="absolute top-3 left-3 right-3 flex justify-between z-10">
        <Badge className="bg-green-600 hover:bg-green-700 text-white text-xl">
          {product.size} Yards
        </Badge>
        {/* <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
          {product.hire_period_days} Days
        </Badge> */}
      </div>

      {/* Subtle selection indicator */}
      {/* {selectedProduct?.id === product.id && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-green-500 z-20" />
      )} */}

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-white">
        {/* <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-200 mb-4">{product.description}</p> */}

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-gray-300" />
            <span className="text-sm">
              {product.allowed_on_road ? "Road Placement" : "Off-road Only"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Weight className="h-6 w-6 text-gray-300" />
            <span className="text-sm">
              {product.allows_heavy_waste ? "Heavy Waste" : "Light Waste Only"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-gray-300" />
            <span className="text-sm">{product.hire_period_days} Day Hire</span>
          </div>
          <div className="flex items-center gap-2">
            <PoundSterling className="h-6 w-6 text-gray-300" />
            <span className="text-sm">
              {product.transport_cost
                ? `£${product.transport_cost} Transport`
                : "Transport Included"}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-2sm text-gray-300">Price (inc. VAT)</p>
            <p className="text-3xl font-bold">
              £{calculateTotalPrice(product).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
