import NewAlbum from './NewAlbum';
import AllAlbums from './AllAlbums';
import { AlbumProvider } from './context/AlbumsContext';
const App = () => {
	return (
		<div className="app">
			<AlbumProvider>
				<div className="query-container">
					<AllAlbums />
				</div>
				<div className="mutate-container">
					<NewAlbum />
				</div>
			</AlbumProvider>
		</div>
	);
};

export default App;
