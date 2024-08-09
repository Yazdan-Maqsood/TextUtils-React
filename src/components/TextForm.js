import React, {useState} from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const UpperCaseBtn = () => {
    setText(text.toUpperCase());
    props.showAlert("success", "Converted to Upper Case");
  }

  const LowerCaseBtn = () => {
    setText(text.toLowerCase());
    props.showAlert("success", "Converted to Lower Case");
  }

  const speakText = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
      props.showAlert("success", "Text Speaking")
    } 
    else {
      alert('Text-to-Speech is not supported in this browser.');
    }
  };

  const clear = () => {
    setText('');
    props.showAlert("success", "Text Cleared");
  }

  return (
    <>
      <div>
          <div className="mb-3">
              <h2 style={{color: props.Theme === "dark" ? "white" : "black"}}>{props.heading}</h2>
              <label htmlFor="my-text-box" className="form-label"></label>
              <textarea style={{borderWidth: 3.5}} type="text" className="form-control" id="my-text-box" placeholder="Enter text here..." rows={8} value={text} onChange={handleOnChange}></textarea>
              <button disabled={text.length === 0} style={{marginTop: 20, paddingTop: 8, paddingBottom: 8, paddingRight: 14, paddingLeft: 14}} type="button" className="btn btn-primary mx-2" onClick={UpperCaseBtn}>Convert to Upper case</button>
              <button disabled={text.length === 0} style={{marginTop: 20, paddingTop: 8, paddingBottom: 8, paddingRight: 14, paddingLeft: 14}} type="button" className="btn btn-primary mx-2" onClick={LowerCaseBtn}>Convert to Lower case</button>
              <button disabled={text.length === 0}
              style={{marginTop: 20, paddingTop: 8, paddingBottom: 8, paddingRight: 14, paddingLeft: 14}} type="button"className="btn btn-primary mx-2"onClick={speakText}>Speak</button>
              <button disabled={text.length === 0}
              style={{marginTop: 20, paddingTop: 8, paddingBottom: 8, paddingRight: 14, paddingLeft: 14}} type="button"className="btn btn-primary mx-2" onClick={clear}>Clear</button>
          </div>
      </div>
      <div>
        <h2 style={{color: props.Theme === "dark" ? "white" : "black"}}>Text Summary</h2>
        <p style={{marginLeft: 15, color: props.Theme === "dark" ? "white" : "black" }}> Words : <span style={{color: '#007bff'}}>
           {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} </span> & Characters : <span style={{color: '#007bff'}}> {text.length} </span></p>
        <h2 style={{color: props.Theme === "dark" ? "white" : "black"}}>Time To Read Your Summary</h2>
        <p style={{marginLeft: 15, color: props.Theme === "dark" ? "white" : "black"}}> Time : <span style={{color: '#007bff'}}> {0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} </span>Minutes</p>
      </div>
      <div>
        <h2 style={{color: props.Theme === "dark" ? "white" : "black"}}>Preview</h2>
        <p style={{color: props.Theme === "dark" ? "rgb(164, 163, 163)" : "black", marginLeft: 15}}>{text.length > 0 ? text : "Enter text above to preview here..."}</p>
      </div>
   </>
  )
}