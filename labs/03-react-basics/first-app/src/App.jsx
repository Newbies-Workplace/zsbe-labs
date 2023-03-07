import './App.css'
import Video from "./Video.jsx";
import Avatar from "./Avatar.jsx";

function App() {
    return (
        <div className={'videos'}>
            <Video
                title={'Tytuł'}
                author={'Kapibara'}
                avatar={'avatar.jpg'}
                thumbnail={'dino.jpg'}/>
            <Video
                title={'Tytuł 2'}
                author={'Kapibara druga'}
                thumbnail={'oranges.jpg'}/>
            <Avatar url={'avatar.jpg'} />
            <Avatar size={60}/>
        </div>
    )
}

export default App
