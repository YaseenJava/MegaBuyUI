import { Link } from "react-router-dom";

export default function SliderSection({ recentProducts = [], ads = [] }) {
  return (
    <div className="px-4 py-6 bg-white">
      {/* Recent Products */}
      {/* <p className="text-xl font-bold text-gray-800 mb-3">🆕 Recent Products</p> */}
      <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4">
        {recentProducts.map((product) => (
          <div
            key={product.id}
            className="min-w-[200px] snap-start bg-white shadow-md rounded-lg p-3 hover:scale-105 transform transition"
          >
            <Link to={`/ProductView/${product.id}`}>
              <img
                src={product.imgUrl}
                alt={product.name}
                className="w-full h-32 object-cover rounded"
              />
              <h4 className="mt-2 text-sm font-semibold text-gray-700">
                {product.name}
              </h4>
            </Link>
          </div>
        ))}
      </div>

      {/* Full Width Sliding Ad */}
      <p className="text-xl font-bold text-gray-800 mt-6 mb-3">Sponsored Ads</p>
      <div className="flex overflow-x-auto snap-x snap-mandatory pb-2">
  {ads.map((ad, index) => (
    <a
      key={index}
      href={ad.url}
      target="_blank"
      rel="noopener noreferrer"
      className="min-w-full snap-center relative h-64 rounded-xl overflow-hidden flex-shrink-0 mx-2"
    >
      {/* Background image */}
      <img
        src={ad.imgUrl}
        alt="Ad"
        className="absolute inset-0 w-full h-full object-fit brightness-75"
      />

      {/* Overlay text */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
        <p className="text-white text-lg font-semibold">{ad.text}</p>
      </div>
    </a>
  ))}
</div>

    </div>
  );
}
