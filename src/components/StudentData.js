import Selector from './Selector'

import {useState} from "react";


const StudentData = (studente) => {
    const students = [
        {
            id: 1,
            firstname: "Philipp",
            lastname: "Lippo",
            gender: "Male",
            email: "Lippo@gmail.com",
            course: "Mathematics",
            DOB: "1999-04-02",
            jD: new Date()
        },
        {
            id: 2,
            firstname: "Mario",
            lastname: "Xithsid",
            gender: "Male",
            email: "Xithsid@gmail.com",
            course: "Mathematics",
            DOB: "1980-05-01",
            jD: new Date()
        },
        {
            id: 3,
            firstname: "Lucas",
            lastname: "Mavellen",
            gender: "Female",
            email: "Mavellen@gmail.com",
            course: "Physics",
            DOB: "2005-06-05",
            jD: new Date()
        },
        {
            id: 4,
            firstname: "Adrian",
            lastname: "Alexon",
            gender: "Female",
            email: "Alexon@gmail.com",
            course: "Mathematics",
            DOB: "2001-01-12",
            jD: new Date()
        }
    ]

    const [course, courseChange] = useState('ALL')
    const [semester, semesterChange] = useState('ALL')

    const ChangeCourse = (e) => {
        courseChange(e.target.value)
    }
    const ChangeSemester = (e) => {
        semesterChange(e.target.value)
    }

    const filterStudentsBySemester = (s) => {
        const month = s.jD.getMonth()
        if(semester === 'Winter'){
            if(month <= 2 && month >=1 && month >=10 && month <=12){
                return true;
            }
        }
        else if(semester === 'ALL'){
            return true;
        }
        else{
            if(month >=4 && month <=9){
                return true;
            }
        }
        return false;
    }
    const filterStudentsByCourse = (s) => {
        if(s.course === course){
            return true;
        }
        else if(course === 'ALL'){
            return true;
        }
        return false;
    }

    const getStudents = () => {
        return students.filter(filterStudentsByCourse)
            .filter(filterStudentsBySemester)
            .map((s) => {
                return <li key={s.id}> Student {s.firstname} {s.lastname} with ID {s.id} joined on {s.jD.toISOString()}</li>
            })
    }

    return (
        <div id="studentList">
            <Selector onChangeCourse={ChangeCourse} onChangeSemester={ChangeSemester}/>
            <h3> Student List </h3>
            <ul>
                {
                    getStudents()
                }
            </ul>
        </div>
    )
}

export default StudentData