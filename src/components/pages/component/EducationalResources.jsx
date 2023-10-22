import React from "react";

const EducationalResources = () => {
  const resources = [
    {
      title: "Math Worksheets",
      description:
        "Download these math worksheets to help your child practice essential math skills.",
      fileUrl: "/path-to-math-worksheets.pdf",
    },
    {
      title: "Coloring Pages",
      description:
        "Enjoy coloring pages related to our educational toys. Fun and creativity combined!",
      fileUrl: "/path-to-coloring-pages.pdf",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-teal-400 to-cyan-500 py-10 m-6 p-4 md:py-8 md:px-12 shadow-2xl rounded-lg bg-opacity-80">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Educational Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a
                href={resource.fileUrl}
                download
                className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block hover:bg-blue-600 transition duration-300"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalResources;
