import '../Styles/components/downloadbtn.sass'

const DownloadBtn = () => {
	const handleDownload = () => {
			const url = 'https://drive.google.com/file/d/1yhgMc_QoVxNnVJ4m_6x-wvbqVoccPkav/view?usp=drive_link' 
			window.open(url, '_blank');
		};
	return(
		<button className="btn" onClick={handleDownload}>Meu CV</button>
	);
};

export default DownloadBtn;
