import { useState, useEffect } from 'react';
import VideoList from './components/video_list/video_list';

import './app.css';

function App() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch(
            'https://www.googleapis.com/youtube/v3/videos/?key=AIzaSyDBDHAnwsQG1aw6Z___W6HpCZJAsY40SQk&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDBDHAnwsQG1aw6Z___W6HpCZJAsY40SQk',
            requestOptions,
        )
            .then((response) => response.json())
            .then((result) => setVideos(result.items))
            .catch((error) => console.log('error', error));
    }, []);

    return <VideoList videos={videos} />;
}

export default App;
