import '../Styles/components/downloadbtn.sass'

const DownloadBtn = () => {
	const handleDownload = () => {
			const url = 'https://drive.google.com/file/d/1yhgMc_QoVxNnVJ4m_6x-wvbqVoccPkav/view' // exemplo, vou botar o drive com meu cv
			window.open(url, '_blank');
		};
	return(
		<button className="btn" onClick={handleDownload}>Download CV</button>
	);
};

export default DownloadBtn;