import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import supabase from "../supabaseClient";
import TextToDefineRate from "../functions/TextToDefineRate";
import { StoreContext } from "../store/Store";

function ShowAddress(props) {
  const address = props.address;
  const [rate, setRate] = useState(false);
  const [rateSubmited, setRateSubmited] = useState(false);
  const [dataRate, setDataRate] = useState(null);
  const [dataRateText, setDataRateText] = useState(null);
  const { register, handleSubmit } = useForm();
  const { user } = useContext(StoreContext);

  const onSubmit = async (data) => {
    const insertData = {
      longitude: props.long,
      latitude: props.lat,
      rate: data.score,
      note: data.note ?? null,
    };
    await supabase
      .from("gps_coordinates")
      .insert([insertData])
      .then(({ error }) => {
        if (error) {
          console.error(error);
        }
        setRate(!rate);
        setRateSubmited(!rateSubmited);
      });
  };

  async function crawlRate() {
    await supabase
      .from("gps_coordinates")
      .select("*")
      .eq("longitude", props.long)
      .eq("latitude", props.lat)
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
        }
        let sum = 0;
        for (var i = 0; i < data?.length; i++) {
          sum += data[i].rate;
        }
        sum = sum / (data?.length ?? 0);

        const text = TextToDefineRate(sum);
        setDataRateText(text);
        setDataRate(isNaN(sum) ? 0 : parseFloat(sum).toFixed(2));
      });
  }

  useEffect(() => {
    if (props.long) {
      crawlRate();
    }
  }, [props.isModal]);

  function Modal() {
    props.setModal(!props.isModal);
    setRate(false);
  }

  function RateAddress() {
    setRate(!rate);
  }

  if (props.isModal) {
    return (
      <>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-8 flex flex-col justify-center rounded-lg gap-8">
          <h3 className="self-center text-white font-semibold uppercase text-lg">
            Informations
          </h3>
          {address?.road ? (
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-white">
                  {address?.country}, {address?.city}
                </p>
                <p className="text-white text-sm">
                  {address?.road}, {address?.postcode}
                </p>
              </div>
              <div className="w-3/4 bg-white h-0.5 rounded self-center"></div>
            </div>
          ) : null}
          {dataRate ? (
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-4">
                <h4 className="text-white">This building has a score of : </h4>
                <h4 className="text-white"> {dataRate} / 5</h4>
              </div>
              <p className="text-white uppercase">{dataRateText}</p>
            </div>
          ) : null}
          <div className="flex flex-row gap-4">
            <button
              className="bg-white pl-16 pr-16 pb-2 pt-2 rounded"
              onClick={() => Modal()}
            >
              {" "}
              Cancel{" "}
            </button>
            <button
              className="bg-cyan-600 pl-16 pr-16 pb-2 pt-2 rounded text-white"
              onClick={() => RateAddress()}
              disabled={user ? false : true}
            >
              {" "}
              Rate{" "}
            </button>
          </div>
          {rateSubmited ? (
            <h4 className="text-white self-center">
              {" "}
              We{"'"}ve got your feedback{" "}
            </h4>
          ) : null}
          {rate ? (
            <>
              <div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-2"
                >
                  <select {...register("score")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <textarea
                    {...register("note")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <input
                    type="submit"
                    className="bg-cyan-600 pl-16 pr-16 pb-2 pt-2 rounded text-white"
                  />
                </form>
              </div>
            </>
          ) : null}
        </div>
      </>
    );
  }
}

ShowAddress.propTypes = {
  address: PropTypes.object,
  isModal: PropTypes.boolean,
  setModal: PropTypes.func,
  long: PropTypes.number,
  lat: PropTypes.number,
};

export default ShowAddress;
