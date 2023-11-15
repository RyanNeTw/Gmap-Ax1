import { useNavigate } from "react-router-dom";

function ParaplegiquePage() {
  let navigate = useNavigate();

  function ChangePage() {
    navigate("/paritel/paraplegique/map");
  }

  function ChangePagee() {
    navigate("/paritel/paraplegique/page");
  }
  return (
    <>
      <div className="flex flex-row gap-32 justify-center pt-24 px-36">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold">
              Accessibilité pour les personnes à mobilités réduites
            </h3>
            <div className="w-full bg-black h-0.5"></div>
          </div>
          <p>
            Paritel est fermement engagé dans la création d'un environnement
            professionnel accessible à tous, reconnaissant que la diversité des
            talents et des perspectives enrichit notre culture et renforce notre
            réussite collective. Nous croyons en l'égalité des chances, et
            l'accessibilité est au cœur de notre approche. Dans notre engagement
            pour l'inclusion, nous sommes fiers d'annoncer la mise en place de
            fonctionnalités spécifiques visant à répondre aux besoins uniques de
            chaque type de personne à mobilité réduite (PMR) au sein de notre
            entreprise.
          </p>
          <button
            className="px-2 py-2 rounded-lg bg-cyan-600 text-white w-1/2"
            onClick={ChangePage}
          >
            Découvrez notre carte intéractive
          </button>
          <p>
            Paritel a pris des mesures significatives pour garantir une
            accessibilité optimale aux personnes paraplégiques. La mise en place
            d'une carte interactive, offrant une expérience de navigation au
            sein de notre entreprise. Grâce à des informations en temps réel,
            cette carte offre un aperçu instantané de l'état de nos
            installations, vous permettant ainsi de planifier vos déplacements
            en toute confiance. Elle propose également des itinéraires
            spécialement adaptés, éliminant les obstacles potentiels (escaliers,
            ascenseurs indisponibles, travaux).. En parallèle, des équipements
            spécifiques ont été déployés, incluant des ascenseurs adaptés, des
            rampes d'accès, des zones de repos, etc
          </p>
          <button className="px-2 py-2 rounded-lg bg-cyan-600 text-white  w-1/2"             onClick={ChangePagee}>
            Découvrez nos aménagements
          </button>
        </div>
        <img src="/images/Rectangle13.png" />
      </div>
    </>
  );
}

export default ParaplegiquePage;
