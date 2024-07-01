import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../Styles/components/informationcontainer.sass';

const InformationContainer = () => {
	return <section id="information">
		<div className="info-card">
			<AiFillPhone id="phone-icon"/>
			<div>
				<h3>Telefone</h3>
				<p>+55 (61) 98460-7612</p>
			</div>
		</div>
		<div className="info-card">
			<AiOutlineMail id="email-icon"/>
			<div>
				<h3>Email</h3>
				<p>dantegl2000@gmail.com</p>
			</div>
		</div>
		<div className="info-card">
			<AiFillEnvironment id="pin-icon"/>
			<div>
				<h3>Localização</h3>
				<p>Brasília, DF</p>
			</div>
		</div>
	</section>
}

export default InformationContainer;