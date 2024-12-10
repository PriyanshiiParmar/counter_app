const Home = (props) =>{
    return(
<div>
<h1>This is  {props.info.name}</h1>
<h1>I'm {props.info.age} years old</h1>
<h1>I live in {props.info.city}</h1>
<p>Here are my favourite fruits</p>
{props.fruits.map((fruit, index)=>{return(<div key={index}>{fruit}</div>)})}
</div>
    )
}
export default Home;