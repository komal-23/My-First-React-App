import { useState } from "react";

function TextForm(props){
    const [text, setText] = useState("")
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const handleOnchange = (e) => {
        setText(e.target.value);
    }
    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
    }

    const handleClearText = () => {
        setText("");
    }

    const handleReverseText = () => {
        var newString = '';
        for(var j = text.split(" ").length -1; j>=0;j--){
            newString +=text.split(" ")[j] + ' ';
        }
        setText(newString);
    }

    const handleBoldText = () => {
        setIsBold(!isBold);
    }
    const handleItalicText = () => {
        setIsItalic(!isItalic);
    }
    return (
    <>
        <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <div className="mb-3">
                <label htmlFor="taxtarea" className="form-label">{props.title}</label>
                <textarea className="form-control" id="taxtarea" rows="8" value={text} onChange={handleOnchange} style={{ fontWeight: isBold ? 'bold' : 'normal',fontStyle: isItalic ? 'italic' : 'normal' }}></textarea>
            </div>
        </div>
        <div className="container">
            <button type="button" className={`btn my-3 mx-1 ${props.btnColor}`} style={{buttonStyle}} onClick={handleUpperCase}>Convert Upper</button>
            <button type="button" className={`btn my-3 mx-1 ${props.btnColor}`} onClick={handleLowerCase}>Convert Lower</button>
            <button type="button" className={`btn my-3 mx-1 ${props.btnColor}`} onClick={handleBoldText}>Bold Text</button>
            <button type="button" className={`btn my-3 mx-1 ${props.btnColor}`} onClick={handleItalicText}>Italic Text</button>
            <button type="button" className={`btn my-3 mx-1 ${props.btnColor}`} onClick={handleCopyText}>Copy Text</button>
            <button type="button" className={`btn my-3 mx-1 ${props.btnColor}`} onClick={handleReverseText}>Reverse Text</button>
            <button type="button" className={`btn my-3 mx-1 ${props.btnColor}`} onClick={handleClearText}>Clear Text</button>
        </div>
        <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`} >
            <h5>Preview</h5>
            <p style={{ fontWeight: isBold ? 'bold' : 'normal',fontStyle: isItalic ? 'italic' : 'normal' }}>{text}</p>
            <table className={`table my-4 text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                <thead>
                    <tr>
                    <th scope="col">Character count</th>
                    <th scope="col">Word Count</th>
                    <th scope="col">Time to read</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{text.length}</th>
                        <td>{ text.length > 0 ? text.trim().split(" ").length : 0 }</td>
                        <td>{(0.008 * text.length).toFixed(3)} mins</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
    )
}

export default TextForm;
