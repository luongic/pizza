import toast from "./toast";

function login(data) {
    
    const getUsers = ((JSON.parse(localStorage.getItem('users'))) ?? [])

    console.log( data.email,  data.password);

    const user = getUsers.find(exits => ( exits.email === data.email && exits.password === data.password) );

    if (user){
        toast({
            title: "Đăng nhập thành công thành công",
            message: `Chúc mừng bạn đã đăng ký tài khoản thành công`,
            type: "success",
            duration: 3000
        })
    }
    else {

        toast({
            title: "Đăng không thành công",
            message: `Email hoặc mật khẩu không đúng`,
            type: "error",
            duration: 3000
        })
    }

    

 
}

export default login;