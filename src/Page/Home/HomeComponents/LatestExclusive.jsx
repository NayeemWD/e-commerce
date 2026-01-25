import React, { useContext } from "react";
import cover from "../../../assets/image/execulisive colloction.png";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";

const LatestExclusive = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProtectedClick = (e, path) => {
    e.preventDefault();
    if (user) {
      navigate(path);
    } else {
      Swal.fire({
        title: 'Please Login',
        text: 'You need to login to access this feature.',
        icon: 'warning',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    }
  }

  return (
    <div className="py-24">
      <div
        className="h-[50vh] sm:h-[60vh] container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 rounded-md bg-cover"
        style={{ backgroundImage: `url(${cover})` }}>
        <div className="text-white flex justify-center h-full gap-4 flex-col items-center text-center md:items-end md:text-right">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            30% off sale
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Latest Exclusive <br />
            Summer Collection
          </h3>
          <button className="bgp px-5 py-2 rounded-md text-white">
            <Link onClick={(e) => handleProtectedClick(e, '/shop')} to="/shop">
              <button>Shop Now</button>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestExclusive;
