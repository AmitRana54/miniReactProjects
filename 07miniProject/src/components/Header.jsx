function Header() {
    
    return (
        <header>
            <nav>
                <div className="imglogo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSo7I7j9Zs9JAZx2v84iIIdMMuTRgIhQni31hJRx7LfA&s" alt="" />
                </div>
                <form >
                    <input type="text"
                    placeholder="Search"
                      />
                
                </form> 
                <ul>
<li>Home</li>
<li>About</li>
<li>Contact</li>
<li>Reviews</li>

                </ul>
                <div className="btnLogin">
                    <button>login</button>
                    <button>SingUp</button>
                </div>

            </nav>


    </header>

)

}
export default Header;