import "./app-item.css"

function AppItem(props){
    const {itemobj,event} = props;
    return(
        <div className="item" >
          <img alt="" src={itemobj.imgsong} onClick={() => {event(itemobj)}}/>
          <p>{itemobj.titlesong}</p>
          <iframe title="" src={itemobj.youtube}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        </div>
    )
}

export default AppItem