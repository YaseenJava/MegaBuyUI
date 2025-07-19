import { Link } from "react-router-dom";

export default function SliderSection({ recentProducts = [], ads = [] }) {
  return (
    <div className="lg:py-7 py-[0px] px-3 bg-gray-50">
  
      <div className="mb-8">
        <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory scrollbar-hide pb-2">
          {recentProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[220px] snap-start bg-white shadow hover:shadow-xl transition rounded-xl overflow-hidden border"
            >
              <Link to={`/ProductView/${product.id}`}>
                <img
                  src={product.imgUrl}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">
                    {product.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {product.description || "Explore the latest features and details!"}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 💼 Sponsored Ads */}
      {ads.length > 0 && (
        <>
        
          <div className="w-full ">
  <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-2 px-2 gap-4">
    {ads.map((ad, index) => (
      <a
        key={index}
        href={ad.url}
        target="_blank"
        rel="noopener noreferrer"
        className="min-w-[90%] sm:min-w-[70%] md:min-w-[60%] lg:min-w-[50%] xl:min-w-[40%] snap-center relative h-60 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg mx-auto flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
      >
        <img
          src={ad.imgUrl}
          alt="Ad"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute bottom-4 left-4 right-4 bg-rgba(255,255,255,0.3) bg-opacity-50 px-5 py-3 rounded-xl backdrop-blur-sm">
          <p className="text-white text-base sm:text-lg font-semibold truncate">{ad.text}</p>
        </div>
      </a>
    ))}
  </div>
</div>
        </>
      )}
    </div>
  );
}
