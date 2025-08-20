import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import Navbar from './Navbar';

export default function ProductPage() {
    const [product, setProduct] = useState({});
    const location = useLocation();
    const id = location.pathname.split("ProductView/")[1];
    // console.log(id);
    //console.log(location.pathname);
    const shareUrl = "https://localhost:5173/" + location.pathname;
    const message = encodeURIComponent("Check this out!");
    const fbShare = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    const waShare = `https://wa.me/?text=${message}%20${shareUrl}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/product/productById/${id}`);
                if (response.status !== 200) {
                    throw new Error("Something went wrong");
                }


                // console.log(response.data.token);


                setProduct(response.data.data);
                console.log(response.data.data)
            } catch (err) {
                console.log(err.message);
                // setProduct(fallbackProducts); // Use fallback products if API fails
            } finally {
                // setLoading(false);
            }
        };

        fetchData();
    }, []);

    


    return (
        
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">

                {/* Product Image */}
                <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-4">
                    <img
                        src={product.imgUrl}
                        alt="ame"
                        className="object-contain h-80 w-full rounded-xl"
                    />
                </div>

                {/* Product Info */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
                        <p className="text-gray-600 text-lg">{product.description}</p>
                    </div>

                    <div className="mt-8 flex gap-2 items-center">
                        <a
                            href={product.url}
                            className="bg-yellow-400 text-white h-[40px] w-[200px] px-5 py-2 rounded-xl hover:bg-blue-700 transition items-center font-semibold"
                        >
                            Visit
                        </a>

                        <div className="flex items-center gap-2 p-2 pl-10">
                            <a
                                href={fbShare}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-110"
                            >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIoxSoc7lzZUDYXIzqUlYtgkRgH6O90QOFHg&s"
                                    alt="Facebook"
                                    className="h-5 w-5"
                                />
                            </a>

                            <a
                                href={waShare}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-110"
                            >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUnPlIeH97aT0EfqS073ceLgBbzJsU5RN7jg&s"
                                    alt="WhatsApp"
                                    className="h-[80px] w-[70px]"
                                />
                            </a>
                        </div>



                    </div>
                </div>

            </div>
        </div>
    );
}
