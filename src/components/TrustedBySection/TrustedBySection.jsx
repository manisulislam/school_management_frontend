import brand1 from "../../images/brand1.jpeg"
import brand2 from "../../images/brand2.jpeg"
import brand3 from "../../images/brand3.jpeg"
import brand4 from "../../images/brand4.jpg"
import brand5 from "../../images/brand5.jpg"

const TrustedBySection = () => {
  return (
    <section className="py-12 my-18">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Trusted by the World’s Education Leaders
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Our platform is trusted by top educational institutions and organizations around the globe.
        </p>

        {/* Brand Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          <div className="flex justify-center">
            <img
              src={brand1}
              alt="Brand 01"
              className="h-16 w-auto"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={brand2}
              alt="Brand 02"
              className="h-16 w-auto "
            />
          </div>
          <div className="flex justify-center">
            <img
              src={brand3}
              alt="Brand 03"
              className="h-16 w-auto"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={brand4}
              alt="Brand 04"
              className="h-16 w-auto "
            />
          </div>
          <div className="flex justify-center">
            <img
              src={brand5}
              alt="Brand 05"
              className="h-16 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
