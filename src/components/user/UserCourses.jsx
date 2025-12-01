import { useState } from "react";
import CrimpagemCard from "../common/CrimpagemCard";

export default function UserCourses() {
  const [activeFilter, setActiveFilter] = useState("INICIANTE");

  // Mock courses data - in a real app, this would come from a database
  const courses = [
    {
      id: "1",
      title: "Curso Crimpagem de Cabos",
      description:
        "O curso de crimpagem de cabos visa ensinar os principais conceitos e técnicas de crimpagem de cabos, com foco em segurança e qualidade.",
      level: "INICIANTE",
      completed: false,
      favorite: true,
    },
  ];

  // Filter courses based on the active filter

  return (
    <section
      className="w-full py-16 px-4 md:px-8 bg-gradient-to-br from-[#081713] to-[#000]"
      id="curso"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
            MEUS CURSOS
          </h2>
        </div>
        <CrimpagemCard />
      </div>
    </section>
  );
}
