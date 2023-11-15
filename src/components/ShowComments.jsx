import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import supabase from "../supabaseClient";

function ShowComments(props) {
  const [comments, setComments] = useState(null);

  async function getComments() {
    await supabase
      .from("gps_coordinates")
      .select("*")
      .match({ longitude: props.lon, latitude: props.lat })
      .then(({ data }) => {
        setComments(data);
      });
  }

  useEffect(() => {
    getComments();
  }, [props]);

  console.log(comments);
  if (!props.lon) return null;

  return (
    <>
      <h1 className="flex justify-center font-bold text-3xl p-8 uppercase">
        Comments
      </h1>
      {!comments ? <h4>No comment for this place</h4> : null}
      <div className="w-screen flex flex-wrap gap-4 px-8">
        {comments?.map((comment, index) => {
          return (
            <div
              key={index}
              className="w-1/5 border border-black rounded-lg p-2 flex flex-col justify-end"
            >
              <p className="text-black">{comment?.note ?? "No comment"}</p>
              <h4 className="text-black self-end">{comment?.rate}/5</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

ShowComments.propTypes = {
  lon: PropTypes.number,
  lat: PropTypes.number,
};

export default ShowComments;
