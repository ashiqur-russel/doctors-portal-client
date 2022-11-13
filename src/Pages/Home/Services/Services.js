import React from "react";
import fluride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluride Treatment",
      description:
        "Fluoride treatments are recommended every 6 months to all our patients. It is beneficial to everyone. Especially for children and teens who are still developing good oral hygiene habits.",
      img: fluride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Fillings treat tooth decay, preventing further damage and tooth loss, as well as the possibility of pain and infection. A filling seals a hole, or cavity, in the tooth.",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Over time, teeth can stained or become yellow due to the stains from coffee, tea, cola, red wine, or colored foods.<br> Even smoking can also stain the teeth.Hence, teeth whitening is the quickest treatment to brighten the color shade of the teeth.",
      img: whitening,
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-primary uppercase text-xl font-bold">
          Our Services
        </h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
