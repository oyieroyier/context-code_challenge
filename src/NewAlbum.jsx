import { useContext } from 'react';
import AlbumsContext from './context/AlbumsContext';

const NewAlbum = () => {
	const { handleSubmit, idRef, titleRef, albumThumbnailRef, albumUrlRef } =
		useContext(AlbumsContext);

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
