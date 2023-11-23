import { useQuery } from "@apollo/client";
import { Link } from 'react-router-dom'; 
import ConsolesList from "./pages/ConsolesList";
import Reviews from "./pages/ReviewForm"
import { QUERY_TECH } from "../utils/queries";
import Header from "./Header";

const Consoles = () => {
  const { loading, data } = useQuery(QUERY_TECH);
  const tech = data?.technologies || [];

  return (
    <main>
      <Header />
      
      <div className="flex-row justify-center">
        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (

            <ConsolesList tech={tech} title="Trending Consoles" />

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
