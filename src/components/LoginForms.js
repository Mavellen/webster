import { useState } from 'react'

var staffAttempts = 0;
var adminAttemps = 0;
const LoginForms = ({staffUpdate, adminUpdate}) => {
    const [UsernameStaff, setUsernameStaff] = useState('')
    const [PasswordStaff, setPasswordStaff] = useState('')
    const [UsernameAdmin, setUsernameAdmin] = useState('')
    const [PasswordAdmin, setPasswordAdmin] = useState('')
    
    const [staffDisable, setStaffDisable] = useState(false)
    const [adminDisable, setAdminDisable] = useState(false)

    const clearInput = () => {
        setUsernameStaff('');
        setUsernameAdmin('');
        setPasswordStaff('');
        setPasswordAdmin('');
    }

    const onSubmitStaff = (e) => {
        e.preventDefault()
        if(!UsernameStaff){
            alert('Please add a username');
            clearInput()
        }
        else if(!PasswordStaff){
            alert("Please add a password")
            clearInput()
        }
        if(UsernameStaff === "Staff" && PasswordStaff === "Staff"){
            staffAttempts = 0
            staffUpdate()
        }
        else{
            alert("Login Credentials Incorrect!")
            staffAttempts ++
            if(staffAttempts >= 3){
                setStaffDisable(true)
            }
        }
    }
    const onSubmitAdmin = (e) => {
        e.preventDefault()
        if(!UsernameAdmin){
            alert('Please add a username');
            clearInput()
        }
        else if(!PasswordAdmin){
            alert("Please add a password")
            clearInput()
        }
        if(UsernameAdmin === "Admin" && PasswordAdmin === "Admin"){
            adminAttemps = 0
            adminUpdate()
        }
        else{
            alert("Login Credentials Incorrect!")
            adminAttemps ++
            if(adminAttemps >= 3){
                setAdminDisable(true)
            }
        }
    }

    return(
        <div className="loginForms">
            <div id="staffLogin">
                <form onSubmit={onSubmitStaff}>
                    <h3> Staff Login </h3>
                    <label> Username </label>
                    <br/>
                    <input type="text" placeholder="Add Username" value={UsernameStaff}
                           onChange={(e) => setUsernameStaff(e.target.value)}
                           disabled={staffDisable}
                    />
                    <br/>
                    <label> Password </label>
                    <br/>
                    <input type="password" placeholder="Add Password" value={PasswordStaff}
                           onChange={(e) => setPasswordStaff(e.target.value)}
                           disabled={staffDisable}
                    />
                    <br/>
                    <input type="submit" id="sS" value="submit" disabled={staffDisable}/>
                </form>
            </div>
            <div id="adminLogin">
                <form onSubmit={onSubmitAdmin}>
                    <h3> Admin Login </h3>
                    <label> Username </label>
                    <br/>
                    <input type="text" placeholder="Add Username" value={UsernameAdmin}
                           onChange={(e) => setUsernameAdmin(e.target.value)}
                           disabled={adminDisable}
                    />
                    <br/>
                    <label> Password </label>
                    <br/>
                    <input type="password" placeholder="Add Password" value={PasswordAdmin}
                           onChange={(e) => setPasswordAdmin(e.target.value)}
                           disabled={adminDisable}
                    />
                    <br/>
                    <input type="submit" id="sA" value="submit" disabled={adminDisable}/>
                </form>
            </div>
        </div>
    )
}

export default LoginForms