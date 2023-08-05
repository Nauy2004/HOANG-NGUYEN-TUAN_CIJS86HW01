import location from './location.svg'
import search from './search.svg'
import logoNK from './Logo_NK.svg'
import HeaderNav from './header-nav'

function Header() {  
    return(
        <div className="header container">
            <div className="header-start">
                <div className="header-start logo">
                    <img src={logoNK} alt="logo" />
                </div>
                <div className="header-start local">
                    <img src={location} alt="local" className='logo-1'/>
                    <div className="content">
                        <p>xem giá tại</p>
                        <section>
                            <option value="1">TP.HCM</option>
                        </section>
                    </div>
                </div>
            </div>

            <div className="header-end">
                <div className="search-group">
                    <input type="search" name="search" id="" />
                    <button>
                        <img src={search} alt="" />
                    </button>                      
                </div>
                <div className="header-end navigation">
                    <HeaderNav title = "cart" icon = "bi bi-cart2" name = "Giỏ hàng" toggle="modal" target="#staticBackdrop"/>
                    <HeaderNav title = "history" icon = "bi bi-clock-history" name = "Tra cứu đơn hàng"/>
                    <HeaderNav title = "user" icon = "bi bi-person-circle" name = "Tài khoản"/>
                    <HeaderNav title = "phone" icon ="bi bi-telephone" name = "Gọi mua : 1800 6800" mess = "(Miễn phí)"/>
                </div>
            </div>
        </div>
    )
}

export default Header;