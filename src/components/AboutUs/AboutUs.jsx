import image1 from "../../images/hero1.jpg"

const AboutUs = () => {
    return (
      <div className="flex flex-col md:flex-row items-center gap-4 my-16 p-4">
        {/* Left Column - Text Sections */}
        <div className="flex flex-col gap-6 md:w-1/2 ">
          <div className="shadow-lg py-2 px-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Pioneer Learning Academy Vision</h2>
            <p>Our vision is a world transformed by educational excellence.</p>
          </div>
          <div className="shadow-lg py-2 px-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Market Resource</h2>
            <p>Pioneer insights, shaping strategies—our vision is to redefine.</p>
          </div>
          <div className="shadow-lg py-2 px-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Pioneer Learning Academy Goals</h2>
            <p>Elevate education globally, fostering knowledge and lifelong learning.</p>
          </div>
        </div>
  
        {/* Right Column - Image */}
        <div className="md:w-1/2 h-full flex justify-center">
          <img src={image1} alt="Pioneer Learning Academy" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  