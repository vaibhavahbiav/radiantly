import { useState, useEffect } from 'react';
import './App.css';
import InfoCard from './components/InfoCard';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchmovies = async () => {
      try {
        // const response = await fetch('https://dummyapi.online/api/movies/?results=10');
        const response = await fetch('https://randomuser.me/api/?results=12');
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchmovies();
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gray-100 pt-4 px-8 pb-8">
        <div className='flex flex-col items-center'>
          <h1 id='name' className='text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 via-30% to-red-400 to-100% text-transparent bg-clip-text tracking-widest drop-shadow-[4px_4px_#202020]'><span>RADIANTLY</span></h1>
          <h3 className="text-3xl font-bold">Here are some awesome movies</h3>
          <h5 className='mb-8 text-sm'>(NO RESPONSE FROM DUMMY API. USING RANDOM USER FOR IMAGES INSTEAD)</h5>
        </div>
        {loading ? (
          <span className="text-center text-xl">Fetching awesome movies... please wait</span>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map((movie, i) => (
              <InfoCard key={i} cover={movie.picture.large} title={movie.title} release={movie.dob.date.slice(0, 4)} director={`${movie.name.first} ${movie.name.last}`} genre={movie.genre} country={movie.country} colorTheme={i} />
            ))}
          </div>
        )
        }
      </div >
    </>
  );
}

export default App;
