function ParaplegiqueMap() {
  return (
    <>
      <div className="flex flex-row px-24 justify-between">
        <img src="/images/paritel.svg" className="w-28" />
        <div className="flex flex-row items-center gap-4">
          <h5>Depart</h5>
          <input
            type="text"
            placeholder="Bureau - E12"
            className="border border-black px-4 py-2 rounded"
          />
          <img src="/images/doubleArrow.png" />
          <input
            type="text"
            placeholder="Cafétéria - E12"
            className="border border-black px-4 py-2 rounded"
          />
          <h5>Arrivé</h5>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <img src="/images/Group13.png" className="w-screen" />
        <select
          id="pmr"
          className="absolute top-0 font-bold shadow-xl py-4 px-12 rounded-lg"
        >
          <option selected>Batiment - E ( étage 1 )</option>
          <option value="paraplegique">Paraplégique</option>
        </select>
        <div className="absolute top-4 shadow-2xl right-0 flex flex-col gap-2 p-4 bg-white rounded-3xl items-center">
          <div className="flex flex-row gap-2 items-start">
            <img src="/images/Group.png" />
            <div className="flex flex-col gap-2">
              <h4>Ascenseur B</h4>
              <h4>momentanément indisponible</h4>
            </div>
          </div>
          <button className="bg-cyan-600 rounded-lg px-4 py-2 text-white">
            Voir un trajet alternatif
          </button>
        </div>

        <div className="absolute bottom-0 shadow-2xl right-0 flex flex-row gap-8 p-8 bg-white rounded-t-3xl items-center">
          <img src="/images/FrameArrowX.png" />
          <h4>Légendes</h4>
        </div>
      </div>
    </>
  );
}

export default ParaplegiqueMap;
