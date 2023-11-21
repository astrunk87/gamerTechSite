import { useQuery } from "@apollo/client";
import { Link } from 'react-router-dom'; 
import ConsolesList from "../components/pages/ConsolesList";
import Reviews from "../components/pages/Reviews"
import { QUERY_TECH } from "../utils/queries";

const Consoles = () => {
  const { loading, data } = useQuery(QUERY_TECH);
  const tech = data?.technologies || [];

  return (
    <main>
      <nav>
      <ul>
        <li><a href="#">
        <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/`}
            >
              Home
            </Link>
            </a></li>
        <li><a href="#">
          <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/consoles`}
            >
              Consoles
            </Link>
            </a></li>
        <li><a href="#">
        <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/about`}
            >
              About
            </Link>
          </a></li>
       
      </ul>
    </nav>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ConsolesList tech={tech} title="lorem" />
          )}
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <Reviews tech={tech} title="lorem" />
          )} */}
        </div>
      </div>
    </main>
  );
};

export default Consoles;
