import { useOutletContext, Link } from 'react-router'
export default function Students() {
    const outletContext = useOutletContext();
  return (
    <>
    <div>Students</div>
    {outletContext.students.map(
        (student)=><h3 key={student.id}>
            {student.name} <Link to={`/student/${student.id}`}>Details</Link>
            </h3>)
    }
    </>
  )
}
