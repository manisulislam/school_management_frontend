import image1 from "../../images/hero1.jpg"

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: image1 }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Welcome to Pioneer Learning Academy
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mb-6">
          A comprehensive platform to manage students, teachers, classes, and more efficiently. Streamline operations and enhance collaboration within your educational institution.
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
