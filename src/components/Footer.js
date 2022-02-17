// Import Social Icons
import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { SiDiscord } from 'react-icons/si'

import OpenseaFooterIcon from '../assets/OpenseaFooterIcon.png'

const Footer = () => {
	return (
		<div className="footer container_padding_x">
			<div className="text">
				<h1>Dino Society</h1>

				<div className="social_links">
					<div className="icon_container">
						<AiFillInstagram className="icon" />
					</div>
					<div className="icon_container">
						<BsTwitter className="icon" />
					</div>

					<div className="img_container">
						<img src={OpenseaFooterIcon} alt="OpenseaFooterIcon" />
					</div>

					<div className="icon_container">
						<SiDiscord className="icon" />
					</div>
				</div>

				<p>Verified Smart Contract:</p>
			</div>

			<p>©2022 DINO SOCIETY | All right reserved</p>
		</div>
	)
}

export default Footer
