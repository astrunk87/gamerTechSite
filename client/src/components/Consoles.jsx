import { useQuery } from '@apollo/client';

import ConsolesList from '../components/pages/ConsolesList';
import { QUERY_TECH } from '../utils/queries';

const Consoles = () => {
  const { loading, data } = useQuery(QUERY_TECH);
  const teches = data?.teches || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ConsolesList
              teches={teches}
              title="consoles"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Consoles;