import "./app-search.css"

function AppSearch(props){
    const {eventsearch} = props
    return(
        <div className="searchbox">
        <input type='text' 
        placeholder='search'  
        onChange={(event) => {eventsearch(event.target.value)}}>
        </input>
        </div>
    )
}

export default AppSearch