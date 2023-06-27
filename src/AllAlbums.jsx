import { useContext } from 'react';
import AlbumsContext from './context/AlbumsContext';

const AllAlbums = () => {
	const { albums } = useContext(AlbumsContext);

	return (
		<div className='album-cards-container'>
			{albums.map((album, index) => (
				<div className="album-card" key={index}>
					<h1>{album.title}</h1>
					<img src={album.thumbnailUrl} alt="" />
				</div>
			))}
		</div>
	);
};

export default AllAlbums;
