import { useState, useEffect } from "react";
import CourseCard from "../common/CourseCard";
import { cursosAPI } from "../../services/CursosAPI";
import CrimpagemCard from "../common/CrimpagemCard";

export default function SectionCursos() {
  const [cursos, setCursos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    carregarCursos();
  }, []);

  const carregarCursos = async () => {
    setIsLoading(true);
    try {
      const cursosCarregados = await cursosAPI.getCursos();
      setCursos(cursosCarregados);
    } catch (error) {
      console.error("Erro ao carregar cursos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Deseja realmente excluir este curso?")) {
      try {
        await cursosAPI.deleteCurso(id);
        await carregarCursos();
        alert("✅ Curso excluído com sucesso!");
      } catch (error) {
        alert("❌ Erro ao excluir curso");
      }
    }
  };

  return (
    <section
      id="cursos"
      className="bg-gradient-to-br bg-[#000] min-h-screen w-full py-12 md:py-16 flex items-center justify-center"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-center text-white text-3xl md:text-4xl lg:text-5xl uppercase font-semibold mb-8 md:mb-12">
          Cursos
        </h2>

        {isLoading ? (
          <div className="text-center text-gray-400 py-12">
            <p className="text-xl">Carregando cursos...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
            <CrimpagemCard />
            {cursos.map((curso) => (
              <CourseCard
                key={curso.id}
                curso={curso}
                onDelete={handleDelete}
                isAdmin={true}
              />
            ))}
          </div>
        )}

        {/* {!isLoading && cursos.length === 0 && (
          <div className="text-center text-gray-400 py-6 mt-6">
            <p className="text-sm italic">
              💡 Publique novos cursos para aparecerem ao lado do curso de Crimpagem
            </p>
          </div>
        )} */}
      </div>
    </section>
  );
}