
const Selector = ( {onChangeCourse, onChangeSemester}) => {
    return(
            <div id="coursePicker">
                <select onChange={onChangeCourse}>
                    <option value="ALL">--Choose Course--</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                </select>
                <select onChange={onChangeSemester}>
                    <option value="ALL">--Choose Semester--</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                </select>
            </div>
    )
}

export default Selector