import "./app-post.css"

function AppPost(props){
    const {itempopup,event} = props
    return(
        <div className="bgtransparent" onClick={event}>
            <div className="boxitempopup">
                <p>{itempopup.titlesong}</p>
                {/* <img src={itempopup.imgsong}/> */}
                <p className="lyrics" >{itempopup.lyrics}</p>
            </div>
        </div>
    )
}

export default AppPost