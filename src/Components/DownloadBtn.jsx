import '../Styles/components/downloadbtn.sass'

const DownloadBtn = () => {
	const handleDownload = () => {
			const url = 'https://drive.google.com/file/d/1rtsr5ATGSOHnXhw0Y2SwNSw2qvtsISFE/view?usp=sharing' 
			window.open(url, '_blank');
		};
	return(
		<button className="btn" onClick={handleDownload}>Meu CV</button>
	);
};

export default DownloadBtn;
