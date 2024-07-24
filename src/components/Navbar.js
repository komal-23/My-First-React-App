import { NavLink,Link } from "react-router-dom";

function Navbar(props){
    return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                        <NavLink className="nav-link" to="/textUtiles">TextForm</NavLink>
                        </li> 
                    </ul>
                </div>
                <p style={{paddingTop:"5px"}}><Link onClick={() => props.toggleChangeColor('blue')} className="btn text-primary">Blue</Link></p>&nbsp;
                <p style={{paddingTop:"5px"}}><Link onClick={() => props.toggleChangeColor('gray')} className="btn text-secondary">Gray</Link></p>&nbsp;
                <p style={{paddingTop:"5px"}}><Link onClick={() => props.toggleChangeColor('red')} className="btn text-danger">Red</Link></p>&nbsp;
                <p style={{paddingTop:"5px"}}><Link onClick={() => props.toggleChangeColor('green')} className="btn text-success">Green</Link></p>&nbsp;

                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{paddingLeft:'3.5em'}}>
                    <input className="form-check-input" type="checkbox" role="switch" id="modeType" checked={props.isChecked}  onChange={props.toggleMode}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Darkmode</label>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar;