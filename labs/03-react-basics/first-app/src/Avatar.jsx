import './Avatar.css'

function Avatar({url, size = 40}) {
    return (
        <img src={url || 'fallback-avatar.jpg'} className={'avatar'}
             style={{
                 height: size,
                 width: size,
             }}/>
    )
}

export default Avatar