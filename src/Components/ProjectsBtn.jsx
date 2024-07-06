import '../Styles/components/downloadbtn.sass'

const ProjectsBtn = () => {
	const handleDownload = () => {
			const url = 'https://drive.google.com/file/d/1yhgMc_QoVxNnVJ4m_6x-wvbqVoccPkav/view'
			window.open(url, '_blank');
		};
	return(
		<button className="btn" onClick={handleDownload}>Meu GitHub com meus projetos</button>
	);
};

export default ProjectsBtn;