import React, { useState } from 'react'

export default function About(props) {
  
    const [myStyle, setMystyle] = useState({
        color: "Black",
        backgroundColor: "White",
        paddingBottom: 20
    });

    const [btnText, setbtnText] = useState("Enable Dark Mode");

    const toogleStyle = () => {
        if(myStyle.color === "Black") {
            setMystyle({
                color : "White",
                backgroundColor : "Black",
                paddingBottom: 20,
            });
            setbtnText("Enable Light Mode");
        } 
        else{
            setMystyle({
                color: "Black",
                backgroundColor: "White",
                paddingBottom: 20
            })
            setbtnText("Enable Dark Mode")
        }
    }
   
  return (
    <div className="container my-3">
        <h2 style={{fontWeight: 600, marginLeft: 5, marginBottom: 10, color: props.Theme === "dark" ? "white" : "black"}}>About Us</h2>
        <div className="accordion my-3" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
        <div className="container" my-3>
            <button className='btn btn-primary' type='button' onClick={toogleStyle}>{btnText}</button>
        </div>
    </div>
  )
}
