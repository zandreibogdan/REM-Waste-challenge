import ProductListing from "@/components/product-listing";

function App() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-green-800">
            Choose Your Skip Size
          </h1>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Find the perfect skip for your waste management needs. We offer a
            range of sizes for both residential and commercial projects.
          </p>
          <ProductListing />
        </div>
      </main>
    </>
  );
}

export default App;
