import logo from './img/logo.png'

function Footer() {
    return (
        <html>

        
        <>
            <div> 
                <div>{logo}</div>
                <div>   
                    <ul>
                        <li><a href="/home">Homepage</a></li>        
                        <li><a href="/about">About</a></li>
                        <li><a href="/home">Menu</a></li>        
                        <li><a href="/reservation">Reservations</a></li>  
                        <li><a href="/order">Order Online</a></li>  
                        <li><a href="/login">Login</a></li>  
                    </ul>
                </div>
            </div>
        </>
        </html>
    );
}


export default Footer;