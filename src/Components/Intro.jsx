export default function Intro() {
	return (
		<>
			<div className="intro">
				<p className="intro">
					Découvrez ce qu'il y a de mieux quand vous voulez
					déguster des poulets de grain, du bon sirop
					d'érable, des citrouilles, du maïs, des oeufs
					frais et une grande variété de légumes. C'est ce
					que vous allez trouver à la Ferme
					<br />
					LA PETITE COUVÉE. <br />
					Notre ferme familiale se consacre à fournir de la
					volaille et des produits de haute qualité
				</p>
			</div>
			<div className="polaroid">
				<img
					className="first"
					src="/src/assets/bebe350.webp"
					alt="bebe"
					layout="responsive"
					sizes="(min-width: 325px) 70vw, (max-width: 1024px) 50vw, 625px"
				/>
			</div>
		</>
	);
}
