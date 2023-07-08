import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/userReducer';

function AddStudent() {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [dob, setDob] = useState("");
  let [mobile, setMobile] = useState("");
  let [batch, setBatch] = useState("");
  let [teacher, setTeacher] = useState("");
  let dispatch = useDispatch();
  let handleSubmit = () => {
    dispatch(addUser({ name, dob, mobile, batch, teacher }))
    navigate('/dashboard');
  }
  return <div className='container-fluid'>
    <h1>Add Student</h1>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter your Name" type="text" onChange={(e) => { setName(e.target.value); }} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control placeholder="Enter your Date Of Birth" type="number" onChange={(e) => { setDob(e.target.value); }} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control placeholder="Enter your Mobile Number" type="text" onChange={(e) => { setMobile(e.target.value); }} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control placeholder="Enter your Batch Number" type="text" onChange={(e) => { setBatch(e.target.value); }} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Teacher</Form.Label>
        <Form.Select defaultValue={"0"} aria-label="Default select example" onChange={(e) => { setTeacher(e.target.value); }}>
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

export default AddStudent






