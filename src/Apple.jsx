import './Apple.css'

const Orange=()=>{
    return(
        <h1>orange</h1>
    )

}
function Apple(){
    return(
        <div>hello world
            <Orange/>

            <img className="pic" src="img.jpg" alt="alternate"/>

        </div>
    )
}

export default Apple;