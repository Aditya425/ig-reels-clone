import React from "react";
import "./VideoFooter.css"
import { Button, Avatar } from "@mui/material"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <Avatar src={avatarSrc} />
                <h3>{channel} . <Button>Follow</Button></h3>
            </div>
            <div className="videoFooter__ticker">
                <MusicNoteIcon className="videoFooter__icon" />
                <h1>{song}</h1>
            </div>
            <div className="videoFooter__actions">
                <div className="videoFooter__actionsLeft">
                    <FavoriteIcon fontSize="large"/>
                    <ModeCommentIcon fontSize="large"/>
                    <SendIcon fontSize="large"/>
                    <MoreHorizIcon fontSize="large"/>
                </div>
                <div className="videoFooter__actionsRight">
                    <div className="videoFooter__stat">
                        <FavoriteIcon />
                        <p>{likes}</p>
                    </div>
                    <div className="videoFooter__stat">
                        <ModeCommentIcon />
                        <p>{shares}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter