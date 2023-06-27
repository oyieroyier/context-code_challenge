import axios from 'axios';

const client = axios.create({
	baseURL: 'http://localhost:3000/albums',
});

export const getAlbums = () => client.get('').then((res) => res.data);

export const createAlbum = ({ albumId, title, url, thumbnailUrl }) =>
	client
		.post('', { albumId, title, url, thumbnailUrl })
		.then((res) => res.data);
