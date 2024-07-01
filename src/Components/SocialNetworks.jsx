import {FaGithub, FaLinkedin} from 'react-icons/fa'

import '../Styles/components/socialnetwworks.sass'

const socialNetworks = [
	{name: "github", icon: <FaGithub />},
	{name: "linkedin", icon: <FaLinkedin />}
	// {name: "instagram", icon: <FaGithub />}
]

const SocialNetworks = () => {
	return (
		<section id="social-networks">
			{socialNetworks.map((network) => (
				<a href="#" className='social-btn' id={network.name} key={network.name}>
					{network.icon}
				</a>
		))}
	</section>
	);
};
export default SocialNetworks;