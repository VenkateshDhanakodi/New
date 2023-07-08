import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../Redux/userReducer';

function EditStudent() {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.data.userData)
  let { id } = useParams();
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [dob, setDob] = useState("");
  let [mobile, setMobile] = useState("");
  let [batch, setBatch] = useState("");
  let [teacher, setTeacher] = useState("");

  useEffect(() => {
    setName(data[id].name);
    setDob(data[id].dob);
    setMobile(data[id].mobile);
    setBatch(data[id].batch);
    setTeacher(data[id].teacher);
  }, [data, id])

  let handleSubmit = () => {
    dispatch(editUser({ index: id, data: { name, dob, mobile, batch, teacher } }))
    navigate('/dashboard');
  }
  return <div className='container-fluid'>
    <h1>Edit Student</h1>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter your Name" type="text" value={name} onChange={(e) => { setName(e.target.value); }} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control placeholder="Enter your Date Of Birth" value={dob} type="number" onChange={(e) => { setDob(e.target.value); }} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control placeholder="Enter your Mobile Number" value={mobile} type="text" onChange={(e) => { setMobile(e.target.value); }} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control placeholder="Enter your Batch Number" value={batch} type="text" onChange={(e) => { setBatch(e.target.value); }} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Teacher</Form.Label>
        <Form.Select defaultValue={teacher} aria-label="Default select example" onChange={(e) => { setTeacher(e.target.value); }}>
          <option value="0" disabled>Select Teacher</option>
          <option value="Guna">Guna</option>
          <option value="Rahul">Rahul</option>
          <option value="Gandhi">Gandhi</option>
          <option value="Hemalatha">Hemalatha</option>
          <option value="Pushpa">Pushpa</option>
        </Form.Select>
        <br />
        <Button varient="success" onClick={() => { handleSubmit() }}>Submit</Button>
      </Form.Group>
    </Form>
  </div>
}

export default EditStudent;