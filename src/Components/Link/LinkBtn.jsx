import "./style.css";

const LinkButton =({isCopied, handleCopy})=>{
    return(
        <button onClick={handleCopy} className={isCopied ? 'dark' : ''}>
            {isCopied ? 'Copied!' : 'Copy'}
        </button>
    )
}

export default LinkButton;