import { FaPlay, FaPause } from 'react-icons/fa';

const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => (
  isPlaying && activeSong?.title=== song.title?(
    <FaPause
      size={30}
      className="text-yellow-400"
      onClick={handlePause}

    />
  ) : ( 
    <FaPlay
           size={30}
      className="text-yellow-400"
      onClick={handlePlay}
    />
  )
  
);

export default PlayPause;
