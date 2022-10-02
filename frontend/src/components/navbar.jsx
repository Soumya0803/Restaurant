function Navbar(){
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">Restraunt</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="menu">Menu</a>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Bestsellers
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Pizza</a></li>
                            <li><a className="dropdown-item" href="#">Pasta</a></li>
                            <li><a className="dropdown-item" href="#">Noodles</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="login">Login</a> 
                        
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="signup">Sign Up!</a>
                    </li>
                   
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <ul  className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link  text-light" href="profile"><i class="bi text-light bi-person-circle"></i></a>
                    </li>
                    
                    <li className="nav-item">
                <a className="nav-link text-light" href="cart"><i class="bi bi-cart2"></i></a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
</>;
}
export default Navbar;