import { Link } from 'react-router-dom'

function SideBar() {
    return <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <div className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fa-solid fa-school"></i>
            </div><hr />
            <div className="sidebar-brand-text mx-3">Student and Teacher Management</div>
        </div>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
            <Link to='/dashboard'>
                <div className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </div>
            </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        <li className="nav-item active">
            <Link to='/addstudent'>
                <div className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Add Student</span>
                </div>
            </Link>
        </li>

        <li className="nav-item active">
            <Link to='/editstudent/0'>
                <div className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Edit Student</span>
                </div>
            </Link>
        </li>
    </ul>
}
export default SideBar;