import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const KEY = 'AIzaSyBv9KdOQCDAbrN0Ukv-ROfJwUYPopnqP1U';

const useVideos = (defaultSearchTerm ) => {

	const [ videos, setVideos ] = useState([]);

	useEffect(() => {
		search(defaultSearchTerm); // Name Change 'onTermSubmit' to 'search'
	}, [defaultSearchTerm]);

	// Here 'onTermSubmit' is not suitable at the moment. So we change the name.
	const search = async (term) => {
		const response = await youtube.get('/search', {
			params : {
				q          : term,
				part       : 'snippet',
				type       : 'video',
				maxResults : 5,
				key        : `${KEY}`
			}
		});

		setVideos(response.data.items);
	};

	// We can return two things.
	// We can either follow the convention  states, which return an array, that return piece of state and setter.
	return [ videos, search ]; // React Convension

	// Or return object (JS Convention)
	// return {videos, search};
};

export default useVideos;
