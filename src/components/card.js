import React from 'react'

export default function Cards(props){

    const [isOpen, setisOpen]=React.useState(false);
     
    function toggle(){
        setisOpen(()=>{
            if(isOpen===true)
               return false;
            else 
                return true;
        } )
    }
    return(
        <div className='card-container'>
          <div className='Card' >
              <div className='card-bg'>
              </div>
              <div className='Card-content'>
                  <div className='cdiv1'>
                  <img src={props.img} />
                  <h1 className='events'>{props.title}</h1>
                  <h4>on {props.date}</h4>
                  </div>
                 {!isOpen && <h4 className='cards-here' onClick={toggle}>read more</h4>}
                
                
                 {isOpen &&
                  <div className='cdiv1'>
                  <p>{props.line1}</p>
                  <p>{props.line2}</p>
                  <button>Participate</button>
                  <h4 className='cards-here' onClick={toggle}>read less</h4>
                  </div>
                 }
                
              </div>        
        </div>
        </div>
    )
}