import { createContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAlbums } from '../api/api';

const AlbumsContext = createContext(null);

export const AlbumProvider = ({ children }) => {
	const [albums, setAlbums] = useState([]);

	const albumsQuery = useQuery({
		queryKey: ['albums'],
		queryFn: getAlbums,
	});

	useEffect(() => {
		if (albumsQuery.isSuccess) {
			setAlbums(albumsQuery.data);
		}
	}, [albumsQuery]);
	
	if (albumsQuery.isLoading) return <h1>Loading...</h1>;
	if (albumsQuery.isError) return <h1>{JSON.stringify(albumsQuery.error)}</h1>;

	return (
		<AlbumsContext.Provider value={{ albums }}>
			{children}
		</AlbumsContext.Provider>
	);
};

export default AlbumsContext;
