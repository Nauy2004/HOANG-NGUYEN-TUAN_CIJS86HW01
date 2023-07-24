

function HeaderNav(e) {   
    return (
        <div className={"header-end" + " nav-item " + e.title}>
            <i class={e.icon}></i>
            <div className="content">
                <p>{e.name}</p>
                <p>{e.mess}</p>
            </div>
        </div>
    )
}

export default HeaderNav;