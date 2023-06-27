import { createContext, useState, useEffect, useRef } from 'react';
import { useQuery, useMutation, QueryClient } from '@tanstack/react-query';
import { createAlbum, getAlbums } from '../api/api';

const AlbumsContext = createContext(null);

export const AlbumProvider = ({ children }) => {
	const [albums, setAlbums] = useState([]);
	const idRef = useRef(null);
	const titleRef = useRef(null);
	const albumUrlRef = useRef(null);
	const albumThumbnailRef = useRef(null);
	const queryClient = new QueryClient();

	// GET Albums
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

	// POST Album
	const createAlbumMutation = useMutation({
		mutationFn: createAlbum,
		onSuccess: (data) => {
			queryClient.setQueryData(['albums', data.id], data);
			queryClient.invalidateQueries(['albums'], { exact: true });
		},
	});

	function handleSubmit(e) {
		e.preventDefault();

		createAlbumMutation.mutate({
			albumId: Number(idRef.current.value),
			title: titleRef.current.value,
			url: albumUrlRef.current.value,
			thumbnailUrl: albumThumbnailRef.current.value,
		});
	}
	return (
		<AlbumsContext.Provider
			value={{
				albums,
				handleSubmit,
				idRef,
				titleRef,
				albumUrlRef,
				albumThumbnailRef,
			}}
		>
			{children}
		</AlbumsContext.Provider>
	);
};

export default AlbumsContext;
