import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function StickerSelection(
  selectedProduct: Product,
  calculateTotalPrice: (product: Product) => number,
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>
) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-xl border border-green-200 overflow-hidden max-w-xs w-full md:max-w-sm"
      >
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="relative h-16 w-16 flex-shrink-0 rounded overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
                alt="sticker"
                className="w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800">
                {selectedProduct.name}
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="text-xs bg-gray-100">
                  {selectedProduct.size} Yard
                </Badge>
                <Badge variant="outline" className="text-xs bg-gray-100">
                  {selectedProduct.hire_period_days} Days
                </Badge>
              </div>
              <p className="text-green-700 font-bold mt-1">
                £{calculateTotalPrice(selectedProduct).toFixed(2)}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full cursor-pointer"
              onClick={() => setSelectedProduct(null)}
            >
              <span className="sr-only">Close</span>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <Button className="w-full mt-3 bg-green-600 hover:bg-green-700">
            Continue
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
