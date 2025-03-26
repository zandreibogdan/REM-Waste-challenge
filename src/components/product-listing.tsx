import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "@/components/product-card";
import StickerSelection from "@/components/sticker-selection";
import LoadingScreen from "@/components/loading-screen";

export default function ProductListing() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data || []); // Ensure it's an array
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const calculateTotalPrice = (product: Product) => {
    const vatAmount = (product.price_before_vat * product.vat) / 100;
    return product.price_before_vat + vatAmount;
  };

  if (loading) return <LoadingScreen />;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) =>
          ProductCard(
            product,
            selectedProduct,
            handleSelectProduct,
            calculateTotalPrice
          )
        )}
      </div>

      {selectedProduct &&
        StickerSelection(
          selectedProduct,
          calculateTotalPrice,
          setSelectedProduct
        )}
    </div>
  );
}
