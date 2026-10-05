export default function ProtectedRoute({children}) {
    const user = {username:"demo",password:"test"}
  
    if(user.password==="tes"){
    return (
    <>
    <h2>Secret content:</h2>
    {children}
    </>
    )
    } else {
        return
    }
}
