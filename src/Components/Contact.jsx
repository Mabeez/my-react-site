export default function Contact() {
	return (
		<>
			<section className="contact">
				<div className="contact">
					<p className="contact">
						Vous avez des questions?
					</p>
					<p className="contact">
						Contactez-nous au <br />
						418-569-8328
					</p>
					<p className="contact">
						Ou mieux encore, venez nous voir au 3432 Chemin
						Pénin, Lévis, QC G6Z 2K9
					</p>
				</div>
				<div className="map">
					<a
						href="https://maps.app.goo.gl/4EQpsbQrUJbKr43o7"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="/src/assets/map300.webp"
							alt="Map"
							sizes="(min-width: 325px) 80vw, (max-width: 1024px) 50vw, 625px"
							className="map"
							loading="lazy"
						/>
					</a>
					<p className="map">
						Cliquez ⤴ pour aller sur Google Maps
					</p>
				</div>
			</section>
		</>
	);
}
