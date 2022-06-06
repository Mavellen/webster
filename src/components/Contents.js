import LoginForms from "./LoginForms";
import StaffView from "./StaffView";
import AdminView from "./AdminView";

import {useState} from "react";

const Contents = () => {
    const [isStaff, isStaffUpdate] = useState(false)
    const [isAdmin, isAdminUpdate] = useState(false)

    const StaffUpdate = () => {
        isStaffUpdate(true)
    }
    const AdminUpdate = () => {
        isAdminUpdate(true)
    }
    return (
            <div>
                <div id="contentView">
                   { (isStaff === false && isAdmin === false) && <LoginForms staffUpdate={StaffUpdate} adminUpdate={AdminUpdate}/> }
                   { (isStaff === true) && <StaffView/> }
                   { (isAdmin === true) && <AdminView/> }
                </div>
            </div>
    )
}

export default Contents