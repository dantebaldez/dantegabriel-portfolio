import Avatar from '../img/eu.jpg'

import '../Styles/components/sidebar.sass'

const Sidebar = () =>{
	return(
		<aside id="sidebar">
			<img src={Avatar} alt="Dante Gabriel" />
			<p className="title">Desenvolvedor Front End</p>
			<p>GitHub</p>
			<a href="" className="btn">Download CV</a>
		</aside>
	)
};

export default Sidebar;