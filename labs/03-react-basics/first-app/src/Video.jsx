import "./Video.css"
import Avatar from "./Avatar.jsx";

function Video({title, author, avatar, thumbnail}) {
    return (
        <div className={"video"}>
            <img src={thumbnail} className={'thumbnail'}/>

            <div className={'details'}>
                <Avatar url={avatar}/>

                <div className={'details-section'}>
                    <span className={'video-title'}>{title}</span>
                    <span className={'video-author'}>{author}</span>
                </div>
            </div>
        </div>
    )
}

export default Video