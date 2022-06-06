
const StaffData = () => {
    const staff = [
        {
            id: 1,
            firstname: "Philipp",
            lastname: "Lippo",
            gender: "Male",
            email: "Lippo@gmail.com",
            DOB: "1999-04-02",
            jD: new Date()
        },
        {
            id: 2,
            firstname: "Mario",
            lastname: "Xithsid",
            gender: "Male",
            email: "Xithsid@gmail.com",
            DOB: "1980-05-01",
            jD: new Date()
        },
        {
            id: 3,
            firstname: "Lucas",
            lastname: "Mavellen",
            gender: "Female",
            email: "Mavellen@gmail.com",
            DOB: "2005-06-05",
            jD: new Date()
        },
        {
            id: 4,
            firstname: "Adrian",
            lastname: "Alexon",
            gender: "Female",
            email: "Alexon@gmail.com",
            DOB: "2001-01-12",
            jD: new Date()
        }
    ]
    return (
        <div id="staffList">
            <h3> Staff List </h3>
            <ul>
                {
                    staff.map((staff) => {
                        return <li key={staff.id}> {staff.firstname} {staff.lastname} </li>
                    })
                }
            </ul>
        </div>
    )
}

export default StaffData