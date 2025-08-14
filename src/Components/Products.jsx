export default function Products() {
	return (
		<>
			<main>
				<section className="prod">
					<h2 className="produits">Nos Produits</h2>
					<div className="grid-wrapper">
						<div className="product-card">
							<img
								src="/src/assets/mais300.webp"
								alt="Maïs frais"
								sizes="(min-width: 325px) 80vw, (max-width: 1024px) 50vw, 625px"
								loading="lazy"
							/>
							<div className="product-label">Maïs</div>
						</div>
						<div className="product-card">
							<img
								src="/src/assets/citrouille300.webp"
								alt="Citrouille"
								sizes="(min-width: 325px) 80vw, (max-width: 1024px) 50vw, 625px"
								loading="lazy"
							/>
							<div className="product-label">
								Citrouille
							</div>
						</div>
						<div className="product-card">
							<img
								src="/src/assets/sirop300.webp"
								alt="Sirop d'érable"
								sizes="(min-width: 325px) 80vw, (max-width: 1024px) 50vw, 625px"
								loading="lazy"
							/>
							<div className="product-label">
								Sirop d'érable
							</div>
						</div>
						<div className="product-card">
							<img
								src="/src/assets/oeufs300.webp"
								alt="Oeufs frais"
								sizes="(min-width: 325px) 80vw, (max-width: 1024px) 50vw, 625px"
								loading="lazy"
							/>
							<div className="product-label">Oeufs</div>
						</div>
						<div className="product-card">
							<img
								src="/src/assets/grainfed300.webp"
								alt="Poulets de grain"
								sizes="(min-width: 325px) 80vw, (max-width: 1024px) 50vw, 625px"
								loading="lazy"
							/>
							<div className="product-label">Poulet</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
