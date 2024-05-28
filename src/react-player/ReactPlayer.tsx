import { useRef } from 'react';
import ReactPlayer from 'react-player';

const ReactPlayerImpl = () => {
    const ref = useRef(null);

    const handlePlay = () => {
        console.log('Video is playing', ref.current.getCurrentTime());
    };

    const handlePause = () => {
        console.log('Video is paused', ref.current.getCurrentTime());
    };


    return (
        <div>
            <h1>React player</h1>
            <ReactPlayer
                ref={ref}
                url='https://www.youtube.com/watch?v=gm3jomzFEpk'
                onPlay={handlePlay}
                onPause={handlePause}
                controls={true}
            />
        </div>
    );
}

export default ReactPlayerImpl;
