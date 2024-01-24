import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    {props.Alert({type:'Sucess', msg:'text convert to Uppercase'})}
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    {props.Alert({type:'Sucess',msg:'text convert to Lowercase'})}
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    {props.Alert({type:'Sucess',msg:'text is Cleared'})}
  };
  const handleCopyClick = () => {
    let copyText = document.getElementById("box");
    
    navigator.clipboard.writeText(copyText.value);
    {props.Alert({type:'Sucess',msg:'text is Copied'})}
  };
  const handleOnChange = (event) => {
    // console.log("onchange")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" >
      <div>
        <h1 className="m-3">{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            rows="8"
            id="box"
            ></textarea>
        </div>
        <button  disabled={text.length==0} className="btn btn-primary m-3" onClick={handleUpClick} style={{color:props.withMode.textbuttoncolor,backgroundColor: props.withMode.buttoncolor ,border:props.withMode.buttoncolor}}>
            
          Convert to Uppercase
        </button>
        <button  disabled={text.length==0} className="btn btn-primary m-3" onClick={handleDownClick} style={{color:props.withMode.textbuttoncolor,backgroundColor: props.withMode.buttoncolor ,border:props.withMode.buttoncolor}} >
          Convert to Lowercase
        </button>
        <button disabled={text.length==0}  className="btn btn-primary m-3" onClick={handleCopyClick} style={{color:props.withMode.textbuttoncolor,backgroundColor: props.withMode.buttoncolor ,border:props.withMode.buttoncolor}}>
          Copy Text
        </button>
        <button disabled={text.length==0}  className="btn btn-primary m-3" onClick={handleClearClick} style={{color:props.withMode.textbuttoncolor,backgroundColor: props.withMode.buttoncolor ,border:props.withMode.buttoncolor}}>
          Clear Text
        </button>
      </div>
      <div>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/[ ]+/).filter((a1)=>{return a1.length!==0}).length} Words {text.split("").length} Character          
        </p>
        <p>{0.008 * text.split(" ").filter((a1)=>{return a1.length!==0}).length} disabled={text.length==0}  Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        <p>{text.length<0?text:'Nothing to Preview'}</p>
      </div>
      </div>
    </>
  );
}

TextForm.defaultProps = { heading: "About your expreience" };
