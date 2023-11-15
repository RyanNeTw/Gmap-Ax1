import { Link } from "react-router-dom";
import { StoreContext } from "../store/Store";
import { useContext, useState } from "react";
import PropTypes from "prop-types";

function Header() {
  const { user } = useContext(StoreContext);

  return (
    <>
      <header className="sticky flex justify-between px-20 py-1 items-center bg-blue-950 border-b border-black">
        <div className="border-2 border-cyan-600 rounded-full">
          <button className="bg-cyan-600 px-4 py-1 m-2 rounded-full  text-white">
            Professionnel
          </button>
          <button className="px-4 py-1 m-2 rounded-full text-white">
            Entreprise
          </button>
        </div>
        <nav>
          <ul className="flex flex-row gap-4">
            <li className="text-white hover:underline hover:text-cyan-600">
              <Link to="/">Groupe</Link>
            </li>
            <li className="text-white hover:underline  hover:text-cyan-600">
              <Link to="/">Recrutement</Link>
            </li>
            <li className="text-white hover:underline  hover:text-cyan-600">
              <Link to="/paritel">Accessibilté handicap</Link>
            </li>
            <li className="text-white hover:underline  hover:text-cyan-600">
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </nav>
        {user ? <UserBubble user={user} /> : <LoginOrDisconnectButtons />}
      </header>
    </>
  );
}

export function LoginOrDisconnectButtons() {
  return (
    <>
      <ul className="flex flex-row gap-4">
        <li className="text-white hover:underline">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  );
}

export function UserBubble(props) {
  const [openModal, setOpenModal] = useState(false);
  const { setUser } = useContext(StoreContext);

  function Modal() {
    setOpenModal(!openModal);
  }

  function Disconnect() {
    setUser(null);
  }

  return (
    <>
      <img
        src="./images/hyperlineco_logo.jpeg"
        alt="Logo"
        className="w-12 rounded-full"
        onClick={() => Modal()}
      />
      {openModal && props.user ? (
        <>
          <div className="fixed z-50 top-16 right-4 bg-white p-2 flex flex-col justify-center rounded-lg gap-2 border-white border border-black">
            <h4 className="text-black text-sm uppercase">
              {props?.user?.user}
            </h4>
            <button className="text-black text-sm" onClick={() => Disconnect()}>
              Disconnect
            </button>
          </div>
        </>
      ) : null}
    </>
  );
}

UserBubble.propTypes = {
  user: PropTypes.object,
};

export default Header;
