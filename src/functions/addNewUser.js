import toast from "./toast";



function addNewUser(data) {
    
    const getUsers = ((JSON.parse(localStorage.getItem('users'))) ?? [])

    const UserID = () => {
        const lastID = ((JSON.parse(localStorage.getItem('users')))?? [])
        if (lastID.length === 0){
            return 240920
        }
        else{
            return (lastID.at(-1).userID + 1)
        }
    }

    const id = UserID()

    const newBill = {
        ...data,
        userID: id,
    }

    const user = getUsers.find(exits => (exits.phone === data.phone || exits.email === data.email) );

    if (user){
        toast({
            title: "Đăng ký không thành công",
            message: `Email hoặc SĐT này đã được đăng ký`,
            type: "error",
            duration: 3000
        })
        return true
    }
    else {
        console.log(newBill);
        getUsers.push(newBill)
        localStorage.setItem('users', JSON.stringify(getUsers))
        toast({
            title: "Đăng ký thành công",
            message: `Chúc mừng bạn đã đăng ký tài khoản thành công`,
            type: "success",
            duration: 3000
        })
        return false
    }

    

 
}

export default addNewUser;