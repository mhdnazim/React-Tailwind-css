import React from "react";

const ServiceCard = ({ title, description, imageUrl }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden group">
    <div className="relative">
      <div className="transition-transform duration-300 transform group-hover:scale-105">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="p-6 border-t border-gray-200 text-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Read More
      </button>
    </div>
  </div>
);

export function ServiceSection() {
  const services = [
    {
      title: "UI/UX Review Check",
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
      imageUrl:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?fit=crop&w=800&q=80",
    },
    {
      title: "Web Development",
      description:
        "We build responsive and high-performance websites tailored to your needs. Our focus is on delivering modern and user-friendly web experiences.",
      imageUrl:
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg",
    },
    {
      title: "SEO Optimization",
      description:
        "Enhance your website's visibility on search engines with our SEO optimization services. We help you rank higher and attract more organic traffic.",
      imageUrl:
        "https://www.flatworldsolutions.com/featured-images/search-engine-optimization-services.jpg",
    },
  ];

  return (
    <section className="py-12 bg-gray-800 px-4 lg:px-0">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
