import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiReact } from "react-icons/di"
import { SiTypescript } from 'react-icons/si';
import { FaSass } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import '../Styles/components/technologiescontainer.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Linguagem de marcação essencial para estruturar páginas web" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Estilos e layout visual para tornar suas páginas web atraentes" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Linguagem de programação para criar interatividade e dinamismo em websites." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Ambiente de execução JavaScript no servidor para construir ferramentas e aplicativos web eficientes.." },
  { id: "react", name: "React", icon: <DiReact />, description: "Biblioteca JavaScript para construir interfaces de usuário eficientes e escaláveis." },
  { id: "ts", name: "TypeScript", icon: <SiTypescript />, description: "Superset de JavaScript que adiciona tipagem estática para desenvolvimento mais seguro." },
  { id: "sass", name: "Sass", icon: <FaSass />, description: "Extensão de CSS que permite usar variáveis, aninhamento e mixins para estilos mais eficientes." },
  { id: "github", name: "Github", icon: <FaGithub />, description: "Plataforma de desenvolvimento colaborativo com Git, especializado em README.md informativos e commits semânticos." },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            <div className="icon">{tech.icon}</div>
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer