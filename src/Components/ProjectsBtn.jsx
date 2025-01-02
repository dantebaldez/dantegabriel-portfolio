import '../Styles/components/downloadbtn.sass'

const ProjectsBtn = () => {
	const handleDownload = () => {
			const url = 'https://github.com/dantebaldez'
			window.open(url, '_blank');
		};
	return(
		<button className="btn" onClick={handleDownload}>Meu GitHub com meus projetos</button>
	);
};

export default ProjectsBtn;
