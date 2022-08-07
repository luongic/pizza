import { useContext } from "react";
import { LoginContext } from "./LoginContext";

function MemberInformation () {

    const logincontext = useContext(LoginContext)

    const getUsers = ((JSON.parse(localStorage.getItem('users'))) ?? [])

    const user = getUsers.find(exits => ( exits.userID === logincontext.currentID ));



    return <div className="member">
        Thông tin thành viên {user.fullname}
    </div>

}

export default MemberInformation;