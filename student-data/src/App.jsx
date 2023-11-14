/*import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [students, setStudent] = useState([])


  useEffect(() => {

    axios.get('http://localhost:9991/information')
    .then((students) => {
      setStudent(students.data);
    })
    .catch((err) => {
      console.log(err)
    })
  })
  return (
    <>
{
  students.map(setStudent => {
    return <div key={setStudent.id}>
      <div>{setStudent.student_name}</div>
      <div>{setStudent.student_phone}</div>
    </div>
  })
}
    
    </>
  )
}

export default App*/

import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9991/information')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

  return (
    <>
    <div className='admission'>Admission Open</div>
      <div className='home-banner'>

      </div>
      
      <div className='outerbox'>
      {
        students.map(students => (
          <div key={students.id}>
              <div className='box1'>

            <span  className='stud-info'> Name : {students.student_name}</span><br/>
            <span className='stud-info'>Email Id :{students.email}</span>
            <span className='stud-info'>Phone :{students.student_phone}</span>
        
              </div>
              
            </div>
    
        ))
      }
      </div>
    </>
  );
}

export default App;