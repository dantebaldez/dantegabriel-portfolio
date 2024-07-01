import Avatar from '../img/eu.jpg'
import InformationContainer from './InformationContainer';

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
			<a href="" className="btn">Download CV</a>
		</aside>
	)
};

export default Sidebar;