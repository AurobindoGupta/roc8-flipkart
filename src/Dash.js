
import { useState } from "react";
import data from "./data.json";



const Dash=()=>{
const[copy,setCopy]= useState(data);
    
    let newData;
    const handleChange= (e) =>{
           
        switch(e.target.id){
            case 'lh':
                { newData = [...data].sort(function(a,b){
                    return a.cost - b.cost
                })
                console.log(newData)
                return (
                    setCopy(newData)    
                    )
                } 
            
            case 'hl':
                { newData = [...data].sort(function(a,b){
                    return (a.cost - b.cost)
                }).reverse()
                console.log(newData)
                return (
                    setCopy(newData)
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
                                case 'reset':
                                    { 
                                    return (
                                        setCopy(data)    
                                        )
                                    } 
    }
    
    }
    const handleClear=()=>{
        const rdbtn = document.querySelectorAll("input[type='radio]");
    rdbtn.forEach(rdbtn =>{
        if(rdbtn.checked===true)
        rdbtn.checked= false;
    })
    }
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target.value)
                    switch(e.target.value){
                        case 'lh':
                            { newData = [...data].sort(function(a,b){
                                return a.cost - b.cost
                            })
                            console.log(newData)
                            return (
                                setCopy(newData)    
                                )
                            } 
                        
                        case 'hl':
                            { newData = [...data].sort(function(a,b){
                                return (a.cost - b.cost)
                            }).reverse()
                            console.log(newData)
                            return (
                                setCopy(newData)
                            );
                        }       

                }
                              
    }




    return(
        
        
        <div className="  dashboard">
       
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
           
           <br/>  

        </div>
        <hr/>
        <div>
        <form >
           <br/>
            <label><input type="radio" value ="male" id="male" name="gender"  onChange={handleChange}/> MALE </label>
            <label><input type="radio" value ="female" id="female" name="gender" onChange={handleChange}  / > FEMALE </label>
            <button onClick={handleSubmit}>Submit</button>    
            <button id="clear" onClick={handleClear}>clear</button>
           </form>
          
           <hr/>
        </div>
        <button id="reset" onClick={handleChange}>reset</button>
        

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