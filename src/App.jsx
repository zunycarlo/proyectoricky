import { useEffect, useState } from 'react';
import { useFetchApi } from './hooks/useFetchApi';
import { getRandomlocationById } from './lib/utils';
import Location from './componets/Location';
import Residents from './componets/Residents';
import Search from './componets/Search';

import './App.css'


const BASE_URL = 'https://rickandmortyapi.com/api/location/';

function App() {
	const { fetchingData, data: location, loading } = useFetchApi();
  const [locationId, setlocationId] = useState(getRandomlocationById())
	
	useEffect(() => {
		fetchingData(`${BASE_URL}${locationId}`);
	}, [locationId]);

	return (
		<>

		<header className= 'header' />
    <main>
				<section className='section'>
					<div className='container'>
					<Search onSearch={setlocationId} />	
					</div>
				</section>
				
				<section className='section'>
				<div className='container'>
				{loading ? <h2>loading...</h2> : <Location location={location} />}
        </div>
				</section>
				
				<section className='section'>
					<div className='container'>
				{location && <Residents residents={location.residents} />}
				</div>
			</section>
			
			</main>
		</>
	);
}

export default App;
