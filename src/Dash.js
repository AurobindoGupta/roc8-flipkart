
import data from "./data.json";



const Dash=()=>{

    const handleChange= (e) =>{
        switch(e.target.id){
            case 'hl':{return(
                
                    data.map(item=>{
                    return (
                        <div className="card">
                        <img src={item.imageUrl}></img>
                        <p>{item.product} <span>{item.cost}</span></p>
                        
    
                    </div>
            )}
            ))}
        }

    }

console.log(data)

    return(
        
        
        <div className=" container dashboard">
        <div>
            <button id="hl" onClick={handleChange}>Price: High-Low</button>
            <button id="lh" onClick={handleChange}>Price: Low-High</button>
           <button id="male" onClick={handleChange}>Male</button>
           <button id="female" onClick={handleChange}>Female</button>
           <button id="shorts" onClick={handleChange}>Shorts</button>
           <button id="dress" onClick={handleChange}>Dress</button>
           <button id="shirt" onClick={handleChange}>Shirt</button>
           <button id="tshirt" onClick={handleChange}>Tshirt</button>
           <div>SIZE::
           <button id="l" onClick={handleChange}>L</button>
           <button id="xl" onClick={handleChange}>XL</button>
           <button id="xxl" onClick={handleChange}>XXL</button>
           <button id="reset" onClick={handleChange}>reset</button>
           </div>

        </div>
        
            {data.map(item=>{
                return (
                    <div className="card">
                    <img src={item.imageUrl}></img>
                    <p>{item.product} <span>{item.cost}</span></p>
                    

                </div>
                )
            })}
            
        </div>
        
    )
}
export default Dash;