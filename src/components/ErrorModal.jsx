import PropTypes from "prop-types";

function ErrorModal(props) {
  function Modal() {
    props.setModal(!props.isModal);
  }

  if (props.isModal) {
    return (
      <>
        <div className="fixed bottom-4 right-4 bg-gray-800 p-8 flex flex-col justify-center rounded-lg gap-8 border-white border">
          <h3 className="self-center text-white font-semibold uppercase text-lg">
            Error
          </h3>
          <p className="self-center text-white">{props?.error}</p>
          <div className="flex flex-row gap-4">
            <button
              className="bg-white pl-16 pr-16 pb-2 pt-2 rounded"
              onClick={() => Modal()}
            >
              {" "}
              Cancel{" "}
            </button>
            <button className="bg-cyan-600 pl-16 pr-16 pb-2 pt-2 rounded text-white">
              {" "}
              Report{" "}
            </button>
          </div>
        </div>
      </>
    );
  }
}

ErrorModal.propTypes = {
  address: PropTypes.object,
  isModal: PropTypes.boolean,
  setModal: PropTypes.func,
  error: PropTypes.string,
};

export default ErrorModal;
