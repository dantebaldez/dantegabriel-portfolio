import Avatar from '../img/eu.jpg'
import InformationContainer from './InformationContainer';
import DownloadBtn from './DownloadBtn';
import '../Styles/components/sidebar.sass'
// import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

const Sidebar = () =>{
	return(
		<aside id="sidebar">
			<img src={Avatar} alt="Dante Gabriel" />
			<p className="title">Desenvolvedor Front End</p>
			<SocialNetworks />
			<InformationContainer />
			<DownloadBtn>Download CV</DownloadBtn>
		</aside>
	)
};

export default Sidebar;