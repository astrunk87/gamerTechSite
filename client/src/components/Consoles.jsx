import { useQuery } from '@apollo/client';

import ConsolesList from '../components/pages/ConsolesList';
import { QUERY_TECH } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_TECH);
  const tech = data?.tech || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ConsolesList
              tech={tech}
              title="consoles"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;