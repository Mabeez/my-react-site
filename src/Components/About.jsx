export default function About() {
	return (
		<>
			<section className="about">
				<h2 className="about">À propos de nous</h2>

				<img
					src="/src/assets/about300.webp"
					alt="Coucher de soleil"
					sizes="(min-width: 325px) 90vw, (max-width: 1024px) 50vw, 625px"
					className="about"
					loading="lazy"
				/>
				<p className="about">
					Produits biologiques venant d'une jolie petite
					fermette située à 2 minutes du quartier
					résidentiel de St-Jean-Chrysostome. Venez cueillir
					vous même vos maïs sucrés et vos citrouilles dans
					ce petit coin de paradis. Les enfants aimeront
					faire la rencontre de nos jolies poules en
					liberté.
				</p>
			</section>
		</>
	);
}
