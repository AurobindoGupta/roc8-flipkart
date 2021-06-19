
import { useState } from "react";
import data from "./data.json";



const Dash=()=>{
const[copy,setCopy]= useState(data);
    
    let newData;
    const handleChange= (e) =>{
           
        switch(e.target.id){
            case 'hl':
                { newData = data.sort(function(a,b){
                    return a.cost - b.cost
                })
                console.log(newData)
                return (
                    setCopy(newData)    
                    )
                } 
            
            case 'lh':
                { newData = data.sort(function(a,b){
                    return (a.cost - b.cost)
                }).reverse()
                console.log(newData)
                return (
                    <div className="card">
                    <img src={newData.imageUrl}></img>
                    <p>{newData.product} <span>{newData.cost}</span></p>
                    
    
                </div>
                );
            }
            case 'male':
                { newData = data.filter((item)=>item.gender!=='female')
                console.log(newData)
                return (
                    setCopy(newData)    
                    )
                } 
                case 'female':
                    { newData = data.filter((item)=>item.gender!=='male')
                    console.log(newData)
                    return (
                        setCopy(newData)    
                        )
                    } 
                    case 'l':
                    { newData = data.filter((item)=>item.size==='L')
                    console.log(newData)
                    return (
                        setCopy(newData)    
                        )
                    } 
                    case 'xl':
                    { newData = data.filter((item)=>item.size==='XL')
                    console.log(newData)
                    return (
                        setCopy(newData)    
                        )
                    } 
                    case 'xxl':
                        { newData = data.filter((item)=>item.size==='XXL')
                        console.log(newData)
                        return (
                            setCopy(newData)    
                            )
                        } 
                        case 'shirt':
                        { newData = data.filter((item)=>item.product==='shirt')
                        console.log(newData)
                        return (
                            setCopy(newData)    
                            )
                        } 
                        case 'shorts':
                        { newData = data.filter((item)=>item.product==='shorts')
                        console.log(newData)
                        return (
                            setCopy(newData)    
                            )
                        } 
                        case 'dress':
                            { newData = data.filter((item)=>item.product==='dress')
                            console.log(newData)
                            return (
                                setCopy(newData)    
                                )
                            } 
                            case 'tshirt':
                                { newData = data.filter((item)=>item.product==='tshirt')
                                console.log(newData)
                                return (
                                    setCopy(newData)    
                                    )
                                } 
    }
    }
   
    




    return(
        
        
        <div className=" container dashboard">
       
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
          
           <hr/>

        </div>
        

        <div className=" container dashboard items">
            {(copy.map(item=>{
                return (
                        <div className="card">
                        <img src={item.imageUrl}></img>
                        <p>{item.product} <span>{item.cost}</span></p>
                        </div>
                    )        
                }))
                }
        </div>  
        </div>
        
    )
}
export default Dash;