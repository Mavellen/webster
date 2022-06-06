import StudentData from './StudentData'
import StaffData from './StaffData'
import ChangeButtons from './ChangeButtons'

import { useState } from 'react'

const AdminView = () =>{
    const [students, changeDisplay] = useState(true)
    
    return(
        <div>
            <div>
                <button onClick={() => changeDisplay(true)}> Show Students </button>
                <button onClick={() => changeDisplay(false)}> Show Staff </button>
            </div>
            { (students === true) &&
                <div id="Students">
                    <StudentData/>
                </div>
            }
            { (students === false) &&
                <div id="Staff">
                    <StaffData/>
                </div>
            }
            <ChangeButtons toShow={(students===true)? true : false }/>
        </div>
    )
}

export default AdminView