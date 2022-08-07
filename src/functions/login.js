import toast from "./toast";


function login(data) {
    
    const getUsers = ((JSON.parse(localStorage.getItem('users'))) ?? [])

    const user = getUsers.find(exits => ( exits.email === data.email && exits.password === data.password) );

    if (user){
        toast({
            title: "Đăng nhập thành công",
            message: `Đăng nhập thành công vào tài khoản của: ${user.fullname}`,
            type: "success",
            duration: 3000
        })
        return true
    }
    else {

        toast({
            title: "Đăng không thành công",
            message: `Email hoặc mật khẩu không đúng`,
            type: "error",
            duration: 3000
        })
        return
    }

    

 
}

export default login;