import Link from "next/link";

export default function Service() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Building responsive and high-performance websites using the latest web technologies.",
      price: "$500",
    },
    {
      id: 2,
      title: "App Development",
      description:
        "Developing cross-platform mobile apps for iOS and Android using React Native.",
      price: "$800",
    },
    {
      id: 3,
      title: "SEO Optimization",
      description:
        "Improving your website's ranking on search engines and increasing organic traffic.",
      price: "$300",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "Designing user-friendly and aesthetically pleasing interfaces to enhance user experience.",
      price: "$400",
    },
    {
      id: 5,
      title: "Digital Marketing",
      description:
        "Creating targeted digital marketing campaigns to help you grow your online presence.",
      price: "$600",
    },
  ];
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-12">Service Page</h1>
      <div className="grid grid-cols-5 gap-10 mt-12">
        {services.map((service) => (
          <Link key={service.id} href={`/services/${service.id}`}>
            <div className="space-y-5">
              <h1 className="text-center text-2xl font-bold">
                {service.title}
              </h1>
              <h3>Price: {service.price}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
