import React, {useState, useRef} from "react"
import "./VideoCard.css"
import VideoHeader from "./VideoHeader"
import VideoFooter from "./VideoFooter"

function VideoCard({url, likes, shares, channel, avatarSrc, song, onDblClick, id}) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const videoRef = useRef(null)
    const onVideoPress = () => {
        if (isVideoPlaying) {
            videoRef.current.pause()
            setIsVideoPlaying(false)
        } else {
            videoRef.current.play()
            setIsVideoPlaying(true)
        }
    }

    return (
        <div className="videoCard">
            <VideoHeader />
            <video className="videoCard__player"
                ref={videoRef}
                onClick={onVideoPress}
                src={url}
                alt="IG Reel Video"
                loop
                autoPlay
                onDoubleClick={() => onDblClick(id)}
            />
            <VideoFooter 
                channel={channel}
                likes={likes}
                shares={shares}
                avatarSrc={avatarSrc}
                song={song}
            />
        </div>
    )
}

export default VideoCard