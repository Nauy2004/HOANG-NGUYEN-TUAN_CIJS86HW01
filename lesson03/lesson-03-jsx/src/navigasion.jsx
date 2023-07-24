
function Nav() {
    
    return(
        <div className="nav-list d-flex align-items-center">
            <div className="nav-item category">
                <i class="bi bi-justify"></i>
                <span>Danh mục sản phẩm</span>
            </div>
            <div className="nav-item">
                <i class="bi bi-truck"></i>
                <span>Giao lắp chuyên nghiệp</span>
            </div>
            <div className="nav-item">
                <i class="bi bi-tools"></i>
                <span>Bảo hành nhanh gọn</span>
            </div>
            <div className="nav-item">
                <i class="bi bi-journal-bookmark-fill"></i>
                <span>Tổng hợp khuyến mãi</span>
            </div>
            <div className="nav-item">
                <i class="bi bi-gem"></i>
                <span>Nguyễn kim Luxury</span>
            </div>
        </div>
    )
}

export default Nav;