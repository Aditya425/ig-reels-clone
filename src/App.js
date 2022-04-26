import React, {useState, useEffect} from "react"
import './App.css';
import VideoCard from './VideoCard';
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([])

  useEffect(() => {
    db.collection("reels").onSnapshot(snapshot => {
      setReels(snapshot.docs.map(doc => doc.data()))
    })
  }, [])


  async function onDblClick(id) {
    const likedReel = reels.filter(reel => {
      if (reel.id === id) {
        return reel;
      }
    })
    const ref = db.collection("reels").doc(likedReel[0].id)
    await ref.set({likes: likedReel[0].likes + 1}, {merge: true})

    db.collection("reels").onSnapshot(snap => {
      const reelData = snap.docs.map(reelData => reelData.data())
      setReels(reelData)
    })
  }

  return (
    <div className="app">
      <div className="app__top">
        <img 
          className="app__logo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png'
        ></img>
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        {reels.map(({avatarSrc, channel, likes, shares, song, url, id}) => (
            <VideoCard
              id={id}
              channel={channel}
              avatarSrc={avatarSrc}
              song={song}
              url={url}
              likes={likes}
              shares={shares}
              onDblClick={onDblClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
