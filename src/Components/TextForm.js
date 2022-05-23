import React, {useState} from 'react'

function TextForm(props) {

    const handleUpClick =()=>{
        // console.log("Uppercase button was clicked");
        let newText = Text.toUpperCase();
        setText(newText);
    }
    const handleLowClick =()=>{
        // console.log("Uppercase button was clicked");
        let newText = Text.toLowerCase();
        setText(newText);
    }

    const handleCopy = ()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);

    }

    const removeExtraSpaces =()=>{
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleClearClick =()=>{
        // console.log("Uppercase button was clicked");
        let newText = "";
        setText(newText);
    }



    const handleOnChange=(event)=>{
        console.log("On change")
        setText(event.target.value);
    }



    const [Text, setText] = useState("");
    //Text = "New text" // Wrong way to update state
    //SetText("New text") // Correct way to update state
    return (
        <>
        <div className='container'>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"/>
                <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
             </div>
             <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
             <button className='btn btn-primary mx-1' onClick={handleLowClick} >Convert to Lowercase</button>
             <button className='btn btn-primary mx-1' onClick={handleCopy} >Copy Text</button>
             <button className='btn btn-primary mx-1' onClick={removeExtraSpaces} >Remove extra spaces</button>
             <button className='btn btn-primary mx-1' onClick={handleClearClick} >Clear</button>

        </div>
        <div className='container my-1'>
            <h3>Your text summary</h3>
            <p>{Text.split(" ").length} words and {Text.length} characters</p>
            <p>{0.008 * Text.split(" ").length }minutes read</p>

            <h3>Preview</h3>
            <p>{Text}</p>

        </div>
        </>
    )
}

export default TextForm