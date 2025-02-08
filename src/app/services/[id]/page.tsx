import React from "react";

export default function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const services = [
    {
      id: "1",
      title: "Web Development",
      description:
        "Building responsive and high-performance websites using the latest web technologies.",
      price: "$500",
    },
    {
      id: "2",
      title: "App Development",
      description:
        "Developing cross-platform mobile apps for iOS and Android using React Native.",
      price: "$800",
    },
    {
      id: "3",
      title: "SEO Optimization",
      description:
        "Improving your website's ranking on search engines and increasing organic traffic.",
      price: "$300",
    },
    {
      id: "4",
      title: "UI/UX Design",
      description:
        "Designing user-friendly and aesthetically pleasing interfaces to enhance user experience.",
      price: "$400",
    },
    {
      id: "5",
      title: "Digital Marketing",
      description:
        "Creating targeted digital marketing campaigns to help you grow your online presence.",
      price: "$600",
    },
  ];
  const filterData = services.find((service) => service.id === id);
  return (
    <div>
      <div className="grid grid-cols-5 gap-10 mt-12">
        {filterData ? (
          <div className="space-y-5">
            <h1 className="text-center text-2xl font-bold">
              {filterData.title}
            </h1>
            <h3 className="text-justify">{filterData.description}</h3>
            <h3>Price: {filterData.price}</h3>
          </div>
        ) : (
          <h1>Service not found</h1>
        )}
      </div>
    </div>
  );
}
