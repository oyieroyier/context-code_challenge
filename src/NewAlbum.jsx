import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { createAlbum } from './api/api';

const NewAlbum = () => {
	const idRef = useRef(null);
	const titleRef = useRef(null);
	const albumUrlRef = useRef(null);
	const albumThumbnailRef = useRef(null);
	const queryClient = useQueryClient();

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
		<div className="card">
			<div className="card-header">
				<div className="text-header">Add New Album</div>
			</div>
			<div className="card-body">
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="albumId">Album Id:</label>
						<input
							required
							className="form-control"
							name="albumId"
							id="albumId"
							type="text"
							ref={idRef}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="title">Title:</label>
						<input
							required
							className="form-control"
							name="title"
							id="title"
							type="text"
							ref={titleRef}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="albumUrl">Album URL:</label>
						<input
							required
							className="form-control"
							name="albumUrl"
							id="albumUrl"
							type="text"
							ref={albumUrlRef}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="albumThumbnail">Thumbnail:</label>
						<input
							required
							className="form-control"
							name="albumThumbnail"
							id="albumThumbnail"
							type="text"
							ref={albumThumbnailRef}
						/>
					</div>
					<button className="btn"> Submit</button>
				</form>
			</div>
		</div>
	);
};

export default NewAlbum;
