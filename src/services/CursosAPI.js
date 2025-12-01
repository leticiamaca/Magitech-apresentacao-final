const API_URL = "http://localhost:3002/cursos";

export const cursosAPI = {
  // Buscar todos os cursos
  getCursos: async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Erro ao carregar cursos");
      return await response.json();
    } catch (error) {
      console.error("Erro:", error);
      return [];
    }
  },

  // Criar novo curso
  createCurso: async (curso) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...curso,
          dataPublicacao: new Date().toISOString(),
        }),
      });
      if (!response.ok) throw new Error("Erro ao publicar curso");
      return await response.json();
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  },

  // Deletar curso
  deleteCurso: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erro ao deletar curso");
      return true;
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  },
};
