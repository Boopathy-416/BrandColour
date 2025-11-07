
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const products = [
  {
    id: 1,
    name: "Purple Floral Blouse",
    price: "USD $29.90",
    image: "src/assets/images/bag.png",
  },
  {
    id: 2,
    name: "Taupe Mixed Print Long-Sleeve Shirt",
    price: "USD $29.40",
    image: "src/assets/images/k.png",
  },
  {
    id: 3,
    name: "White Floral Blouse",
    price: "USD $28.90",
    image: "src/assets/images/child.png",
  },
  {
    id: 4,
    name: "Emerald Green Textured Shirt",
    price: "USD $30.09",
    image: "src/assets/images/l1.png",
  },
  {
    id: 5,
    name: "Purple Floral Blouse",
    price: "USD $29.90",
    image: "src/assets/images/cf.png",
  },
  {
    id: 6,
    name: "Taupe Mixed Print Long-Sleeve Shirt",
    price: "USD $29.40",
    image: "src/assets/images/look.png",
  },
  {
    id: 7,
    name: "White Floral Blouse",
    price: "USD $28.90",
    image: "src/assets/images/t3.png",
  },
  {
    id: 8,
    name: "Emerald Green Textured Shirt",
    price: "USD $30.09",
    image: "src/assets/images/tw.png",
  },
];

export default function WhatsNew() {
  return (
    <section className="py-16 bg-[#fffff]">
      {/* Title */}
      
      <h2
        className="text-3xl momo text-center mb-10"
        style={{ color: "#212121" }}
      >
        <span className="relative">
          What's{" "}
          <span
            className=" bebas tracking-widest text-yellow-500"
            style={{ borderBottom: "2px double #553510" }}
          >
            New
          </span>
        </span>
      </h2>

      {/* Product Grid */}
      <div className="max-w-6xl momo mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-transparent rounded-lg overflow-hidden  transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[220px] object-cover bebas  transform hover:scale-105 transition-transform duration-800"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 md:text-center text-left ">
              <h3
                className="text-gray-800 text-base font-normal mb-2"
                style={{ fontFamily: "sans-serif" }}
              >
                {item.name}
              </h3>
              <p className="text-black font-semibold text-sm">{item.price}</p>
              <FontAwesomeIcon icon={faTags} className="text-yellow-600" size="xl" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
