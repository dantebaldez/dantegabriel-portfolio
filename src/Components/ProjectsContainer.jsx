import ProjectsBtn from '/src/Components/ProjectsBtn'

const ProjectsContainer = () => {
	return <section className="projects-container">
		<h2>Projetos</h2>
		<p>Alguns projetos tiveram a ideia e o design inspirados em projetos que eu vi em algum lugar, mas foram desenvolvidos por mim mesmo, e no meu github não tem todos os projetos que eu fiz, pois alguns eram institucionais e não tive acesso à códigos após o final do projeto, mas todos estão no meu github abaixo</p>
		<ProjectsBtn href="https://github.com/dantealves?tab=repositories" target="_blank"className="btn">
			Meu GitHub com meus projetos
		</ProjectsBtn>
	</section>
}

export default ProjectsContainer