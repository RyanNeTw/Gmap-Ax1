import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import ShowAddress from "./ShowAddress";
import { useForm } from "react-hook-form";
import ShowComments from "./ShowComments";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "90vh",
};

const api_key = "AIzaSyB_obCxju6Io9xefz61Unn4cF8Uc-w2maU";

export function Map() {
  const [long, setLong] = useState(48.866667);
  const [lat, setLat] = useState(2.333333);
  const [address, setAddress] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [center, setCenter] = useState({
    lat: 48.866667,
    lng: 2.333333,
  });
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: api_key,
    libraries,
  });

  const { register, handleSubmit } = useForm();

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const handleSubmitMarker = (event) => {
    setLong(event.latLng.lng());
    setLat(event.latLng.lat());

    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.address?.road) {
          setModal(true);
          setAddress(data.address);
        } else {
          setModalError(!modalError);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onSubmit = (data) => {
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&${data.place}=${data.search}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setLong(parseFloat(data[0]?.lon));
        setLat(parseFloat(data[0]?.lat));
        setCenter({
          lat: parseFloat(data[0]?.lat),
          lng: parseFloat(data[0]?.lon),
        });

        console.log(center, "oiofnb");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="h-screen flex flex-col  items-end">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="self-center flex flex-row gap-4 items-center w-1/2 pt-4 pb-4"
        >
          <div className="flex flex-row w-full">
            <input
              placeholder="Search"
              {...register("search")}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-l-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <select
              {...register("place")}
              className="bg-cyan-600 text-white rounded-r-lg px-1 py-2.5"
            >
              <option value="city">City</option>
              <option value="street">Street</option>
              <option value="county">County</option>
              <option value="state">State</option>
              <option value="postalcode">Postal code</option>
            </select>
          </div>
          <input
            type="submit"
            className="cursor-pointer w-1/4 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          />
        </form>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
          onClick={handleSubmitMarker}
        >
          <Marker position={center} />
        </GoogleMap>
        <ShowAddress
          address={address}
          isModal={modal}
          setModal={setModal}
          long={long}
          lat={lat}
        />
        <div className="aling-self pb-4">
          {long ? <ShowComments lon={long} lat={lat} /> : null}
        </div>
      </div>
    </>
  );
}
