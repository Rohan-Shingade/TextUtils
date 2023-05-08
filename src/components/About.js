import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

      let myStyle = {
        color: props.mode === 'dark' ? 'white': '#343a40', //text color
        backgroundColor: props.mode === 'dark' ? '#343a40':'white', //background color #343a40 
        border: '0.5px solid',
        borderColor: props.mode === 'dark' ? 'white': '#343a40'
      }
    
    // const [btnText, setbtnText] = useState("Enable Dark Mode")
    
    // const toggleStyle = () =>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: '#343a40', //this color code defined as dark
    //             border: '0.5px solid white' //added later for border when dark mode enabled
    //         })
    //         setbtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText("Enable Dark Mode");
    //     }
    // }
    
    return (
        <div className='container'> 
        <h3 className='my-3' style={{color: props.mode === 'dark' ? 'white': '#343a40'}}> About Us </h3>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item" style={myStyle} > 
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong> About App </strong>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                    <strong>This app was created with the main purpose of manipualtion of text.</strong> This app can convert you text into Upper Case and Lower Case. It can also clear extra spaces or indentation from you text. Don't forget to visit Specifics Section for more info about app. In case of any concern, you can get our contact information on Contact Us page.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={myStyle}> 
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong> Specifics About app </strong>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                    This app uses some basic or beginner level concepts like Props and State. Later we have used alert in this app, this alert we have is used form bootstrap (feel free to visit <strong> getbootstrap.com </strong> for more info). 
                    We have created our app in a way that user can switch app mode in Light and Dark mode both (one at a time)
                    Later we have used Router concept in our app to change the components at same place without reloading the page which will help us save some bandwidth while using this app.
                  </div>
                  <div className="accordion-body">
                    <h3> Enjoy your stay🙂</h3>
                  </div>
                </div>
              </div>   
            </div>  

            {/* <div className="container">
                <button className="btn btn-primary my-3" onClick={toggleStyle} > {btnText} </button>
            </div> */}
        </div> 
    )
  }
