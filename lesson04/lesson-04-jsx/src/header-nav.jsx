

function HeaderNav(e) {   
    return (
        <div className={"header-end" + " nav-item " + e.title}>
            <button className={'btn bnt-'+ e.title} data-bs-toggle={e.toggle} data-bs-target={e.target}> 
                <i className={e.icon}></i> 
            </button>
            <div className="content">
                <p>{e.name}</p>
                <p>{e.mess}</p>
            </div>
        </div>
    )
}

export default HeaderNav;