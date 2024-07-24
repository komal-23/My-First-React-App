function About(props){
return (
    <>
        <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <div className="mb-3">
               <h1>About</h1>
            </div>
        </div>
    </>
)
}

export default About;
