import BasicCard from "./CardComponents/BasicCard";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from './../Redux/userReducer'

function Dashboard() {
    let data = useSelector((state) => state.data.userData);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let teachers = 5;
    let handledelete = (i) => {
        dispatch(deleteUser({ index: i }))
    }
    return <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row d-flex justify-content-center">
                    {/* <!-- Students Card --> */}
                    <BasicCard label="Students" value={data.length} border="primary" icon="fa-users" />
                    {/* <!-- Teachers Card --> */}
                    <BasicCard label="Teachers" value={teachers} border="success" icon="fa-chalkboard-user" />
                </div>
            </div>
            <div className="container-fluid">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Mobile</th>
                            <th>Batch</th>
                            <th>Teacher</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e, i) => {
                            return <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.dob}</td>
                                <td>{e.mobile}</td>
                                <td>{e.batch}</td>
                                <td>{e.teacher}</td>
                                <td><Button variant="primary" onClick={() => navigate(`/editstudent/${i}`)}><i className="fa-solid fa-pen-to-square">&nbsp;</i>Edit</Button>&nbsp;&nbsp;&nbsp;
                                    <Button variant="danger" onClick={() => handledelete(i)}><i className="fa-solid fa-trash">&nbsp;</i>Delete</Button></td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    </div>
}
export default Dashboard;