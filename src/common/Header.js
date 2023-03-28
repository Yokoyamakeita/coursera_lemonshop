import logo from './img/Asset 16@4x.png'

function Header() {
    return (
        <>
            <div className='menu'> 
                <div className='logo'>
                  <a href="/home"><img className="logoimg" src={logo} /></a>
                </div>
                <div className='menu_content'>   
                  <ul>
                      <li><a href="/home">Homepage</a></li>        
                      <li><a href="/about">About</a></li>
                      <li><a href="/menu">Menu</a></li>        
                      <li><a href="/reservation">Reservations</a></li>  
                      <li><a href="/order">Order Online</a></li>  
                      <li><a href="/login">Login</a></li>  
                  </ul>
                </div>
            </div>
        </>
    );
}


export default Header;