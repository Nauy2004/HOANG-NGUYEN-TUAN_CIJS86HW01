import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { AppContext } from '../context/Context'
export default function Header() {
    let { hefPage } = useContext(AppContext)
    const renderNav = () => {
        return hefPage.map((item) => {
            return (
                <li key ={item.name} >
                    <button type='button'>
                        <Link to = {item.hef}
                            className="nav-link px-2 nav-link px-2 text-white">
                            {item.name}
                        </Link>
                    </button>
                </li>
            )
        })
    }
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
                    </a>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        {renderNav()}
                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>
                    <div className="text-end">
                        <button type="button" 
                        className="btn btn-outline-light me-2">
                            <Link to='/auth/Login'>Login</Link>
                        </button>
                        <button type="button" 
                        className="btn btn-warning">
                            <Link to ='/auth/Register'>Register</Link>
                            </button>
                    </div>
                </div>
            </div>
        </header>

    )
}
