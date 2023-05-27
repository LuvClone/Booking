import "./Navbar.css"

const Navbar = () => {
    return (
    <div className="Navbar">
        <div className="navContainer">
            <span className="logo">BookEase</span>
            <div className="navItem">
                <button className="navButton">Đăng ký</button>
                <button className="navButton">Đăng nhập</button>
            </div>
        </div>
    </div>
    )
}
    
export default Navbar