import {useState} from 'react'

const ChangeButtons = ({toShow, toRun}) => {
    const [action, actionChanger] = useState('')

    const [id, changeID] = useState('')
    const [fName, changeFName] = useState('')
    const [lName, changeLName] = useState('')
    const [gender, changeGender] = useState(false)
    const [email, changeEmail] = useState('')
    const [dob, changeDob] = useState('')
    const [jd, changeJd] = useState('')
    const [department, changeDepartment] = useState('')
    
    const makeObject = (e) => {
        e.preventDefault()

        const formatter = new Intl.DateTimeFormat("en-us", {year: "numeric", month: "2-digit", day: "2-digit"})
        var date = new Date();
        date = formatter.format(date)
        const todaysDate = date.split("/")
        const inputDate = dob.split("-")

        var proceed = true
        const inputJS = jd.split("-")
        if(inputJS[0] > todaysDate[2]){
            alert("Invalid Joining Date")
            proceed = false
        }
        else if(inputJS[0] === todaysDate[2]){
            if(inputJS[1] > todaysDate[1]){
                alert("Invalid Joining Date")
                proceed = false
            }
            else if(inputJS[1] === todaysDate[1]){
                if(inputJS[2] > todaysDate[0]){
                    alert("Invalid Joining Date")
                    proceed = false
                }
            }
        }
        if(proceed){
            if((todaysDate[2] - inputDate[0] >= 17 && (todaysDate[2] - inputDate[0]) <= 60)){
                if(todaysDate[1] === inputDate[1]){
                    if((todaysDate[0] - inputDate[2]) > 0){
                        var obj = {
                            id: id, fName: fName, lName: lName, gender: gender, email: email, dob: dob, department: department, jd: jd
                        }
                        if(toShow) obj.p = true
                        else obj.p = false
                        if(action==='Add') obj.type = 'add'
                        else if(action==='Update') obj.type = 'update'
                        else if(action==='Delete') obj.type = 'delete'
                    }
                    else {
                        alert("INVALID DOB")
                    }
                }
            }
            else {
                alert("INVALID DOB")
            }
        }
    }
    
    const changeDep = (e) => {
        changeDepartment(e.target.value)
    }


    return (
        <div id="sChange">
            <div>
                <button onClick={() => {
                    actionChanger("Add")
                }}> Add {(toShow===true)? "Student" : "Staff"}</button>
                <button onClick={() => {
                    actionChanger("Update")
                }}> Update {(toShow===true)? "Student" : "Staff"}</button>
                <button onClick={() => {
                    actionChanger("Delete")
                }}> Delete {(toShow===true)? "Student" : "Staff"}</button>
            </div>
            <div >
                { (toShow===false && ( action==="Add" || action==="Update" )) &&
                    <form onSubmit={makeObject}>
                        <h3> {action} Staff </h3>
                        <label> Staff ID </label>                       <br/>
                        <input type="text" placeholder="ID" value={id} onChange={(e) => changeID(e.target.value)} required/>          <br/>
                        <label> Staff's First Name </label>             <br/>
                        <input type="text" placeholder="First Name" value={fName} onChange={(e) => changeFName(e.target.value)} required/>  <br/>
                        <label> Staff's Last Name </label>              <br/>
                        <input type="text" placeholder="Last Name" value={lName} onChange={(e) => changeLName(e.target.value)}/>            <br/>
                        <label> Gender </label>                         <br/>
                        <input type="radio" placeholder="Gender" value={gender} onChange={() => changeGender(true)}/> Male<br/>
                        <input type="radio" placeholder="Gender" value={gender} onChange={() => changeGender(false)}/> Female<br/>
                        <label> Email </label>                          <br/>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => changeEmail(e.target.value)} required/>      <br/>
                        <label> Staff's DOB </label>                    <br/>
                        <input type="date" placeholder="Dob YYYY-MM-DD" onChange={(e) => changeDob(e.target.value)} required/>           <br/>
                        <input type="submit" id="submitter" value="submit"/>
                    </form>
                }
                { (toShow===false && ( action==="Delete" )) &&
                    <form onSubmit={makeObject}>
                        <h3> Delete Staff </h3>
                        <label> Staff ID </label>
                        <input type="text" placeholder="ID" value={id} onChange={(e) => changeID(e.target.value)} required/>
                        <input type="submit" id="submitter" value="submit"/>
                    </form>
                }
            </div>
            <div>
                { (toShow===true && ( action==="Add" || action==="Update" )) &&
                    <form onSubmit={makeObject}>
                        <h3> {action} Student </h3>
                        <label> Student ID </label>                       <br/>
                        <input type="text" placeholder="ID" value={id} onChange={(e) => changeID(e.target.value)} required/>          <br/>
                        <label> Students's First Name </label>             <br/>
                        <input type="text" placeholder="First Name" value={fName} onChange={(e) => changeFName(e.target.value)} required/>  <br/>
                        <label> Students's Last Name </label>              <br/>
                        <input type="text" placeholder="Last Name" value={lName} onChange={(e) => changeLName(e.target.value)}/>            <br/>
                        <label> Students's DOB </label>                    <br/>
                        <input type="date" placeholder="Dob YYYY-MM-DD" onChange={(e) => changeDob(e.target.value)} required/>                 <br/>
                        <label> Gender </label>                         <br/>
                        <input type="radio" placeholder="Gender" value={gender} onChange={() => changeGender(true)}/> Male<br/>
                        <input type="radio" placeholder="Gender" value={gender} onChange={() => changeGender(false)}/> Female<br/>
                        <label> Email </label>                          <br/>
                        <input type="text" placeholder="Email" value={email} onChange={(e) => changeEmail(e.target.value)} required/>      <br/>
                        <label> Students Joining Date </label>      <br/>
                        <input type="date" placeholder="Joining Date YYYY-MM-DD" onChange={(e) => changeJd(e.target.value)} required/> <br/>
                        <select name="Department" value={department} onChange={changeDep} required>
                            <option> Choose a Department </option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Physics">Physics</option>
                        </select>
                        <input type="submit" id="submitter" value="submit"/>
                    </form>
                }
                { (toShow===true && ( action==="Delete" )) &&
                    <form onSubmit={makeObject}>
                        <h3> Delete Student </h3>
                        <label> Student ID </label>
                        <input type="text" placeholder="ID" value={id} onChange={(e) => changeID(e.target.value)} required/>
                        <input type="submit" id="submitter" value="submit"/>
                    </form>
                }
            </div>
        </div>
    )
}

export default ChangeButtons