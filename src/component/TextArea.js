import React, {useState} from "react"; 
export default function TextArea(props){
        const clicktoUpp = ()=>{
           let NewText= text.toUpperCase();
           upText(NewText);
           props.showAlert("success","Converted into UpperCase");
        }
        const clicktoLow = ()=>{
            let NewText=text.toLowerCase();
            upText(NewText);
            props.showAlert("success","Converted into LowerrCase");
        }
        const clearText=()=>{
            let NewText="";
            upText(NewText);
        }
        const ToRemoveSpace=()=>{
           console.log("hi all")
           let text=document.querySelector('.form-control');
           text.value=text.value.replace(/\s+/g," ").trim();
           upText(text.value);
        }
        const handleOnChange=(event)=>
        {
        upText(event.target.value);
        }
      /*  const clearAll=()=>{
            clearText();
        }*/
   
        const [text,upText]=useState('');
        return( 
            <>      
        <div>
            <h1>Enter Text to analyze</h1>
            <div className="mb-3">            
            <textarea placeholder="Enter The Text Here" className="form-control" id="myBoerx" onChange={handleOnChange} style={{backgroundColor:props.mode==="light"?'dark':'light'}} rows="8" value={text}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={clicktoUpp}>convert into upperCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={clicktoLow}>convert into LowerCase</button>
            <button className="btn btn-danger mx-2 my-2" onClick={clearText}> To clear text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={ToRemoveSpace}>ToRemoveSpace</button>
        </div>
        <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p> {`${text.length -text.split(" ").length+1}`} characters and { text.length===0?0:text.split(" ").length} words</p>
        <p> takes {0.008*text.length} minutes to read</p>
        </div>
        <div>
            <p><h2>Preview</h2></p>
            <p>{text}</p>
        </div>
        </>
    )
};