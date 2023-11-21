import { useQuery } from "@apollo/client";

import ConsolesList from "../components/pages/ConsolesList";
import Reviews from "../components/pages/Reviews"
import { QUERY_TECH } from "../utils/queries";

const Consoles = () => {
  const { loading, data } = useQuery(QUERY_TECH);
  const tech = data?.technologies || [];

  return (
    <main>
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
