import Parent from "./Parent";

const Root = ({person}) =>{
    return(
        <div>
            <Parent info={person}/>
        </div>
    )
}
export default Root;