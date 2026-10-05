import { useParams, useOutletContext } from 'react-router'

export default function Student() {
    const {id} = useParams();
    const{students} = useOutletContext()
    const student = students.find(student=>student.id === Number(id))
  return (
    <>
    <h3>
        Student with id: {id} is called {student.name} and is in classroom: {student.classRoom}</h3>
    </>
  )
}
