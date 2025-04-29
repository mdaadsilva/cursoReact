import Item from "./Item";
function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
               <Item marca="React"/>
               <Item marca="Next"/>
                <Item marca="Vue"/>
            </ul>
        </>
    )
}

export default List;