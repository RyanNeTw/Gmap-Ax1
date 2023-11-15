import { useNavigate } from "react-router-dom";

function PartiTelPage() {
  let navigate = useNavigate();
  const handleChange = (event) => {
    if (event) {
      navigate("/paritel/paraplegique");
    }
  };

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
          <select
            id="pmr"
            className="border border-black py-4 px-2 rounded-lg"
            onClick={handleChange}
          >
            <option selected>Sélectionnez votre type de PMR</option>
            <option value="paraplegique">Paraplégique</option>
          </select>
        </div>
        <img src="/images/Rectangle12.png" />
      </div>
    </>
  );
}

export default PartiTelPage;
