import React from 'react'
import './header.css'
import LogoNK from '../../svg/Logo_NK.svg'
import location from '../../png/002-location.png'
function Header() {
  let listItem = [
    {
      id: '1',
      title:'cart',
      name: 'Giỏ hàng',
      mess:"",
      toggle:"modal", 
      target:"#staticBackdrop",
      img: '/src/png/001-cart.png'
    },
    {
      id: '2',
      title:'history',
      name: 'Tra cứu',
      mess:"đơn hàng",
      toggle:"", 
      target:"",
      img: '/src/png/002-history.png'
    },
    {
      id: '3',
      title:'user',
      name: 'Tài khoản',
      mess:"",
      toggle:'', 
      target:'',
      img: '/src/png/003-user.png'
    },
    {
      id: '4',
      title:'hotline',
      name: 'Gọi mua: 1800.6800',
      mess:"(Miễn phí)",
      toggle:"", 
      target:"",
      img: '/src/png/001-phone-call.png'
    }
  ]
  const randerNav = () => {
    return listItem.map((item) =>{
      return (
        <div className={"header-end" + " nav-item " + item.title}>
          <button className={'btn bnt-' + item.title} data-bs-toggle={item.toggle} data-bs-target={item.target}>
            <img src={item.img} alt={item.name} />
          </button>
          <div className="content">
            <p>{item.name}</p>
            <p>{item.mess}</p>
          </div>
        </div>
      )
    })
  }
  return (
    <header>
      <div className="header container">
        <div className="header-start">
          <div className="header-start logo">
            <img src={LogoNK} alt="logo" />
          </div>
          <div className="header-start local">
            <img src={location} alt="local" className='logo-1' />
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
            <input type="search" name="search" id="" placeholder='Bạn cần tìm gì hôm nay?'/>
            <button>
              <i className="bi bi-search"></i>
            </button>
          </div>
          <div className="header-end navigation">
            {randerNav()}
            <div class="hr-vertical">|</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header