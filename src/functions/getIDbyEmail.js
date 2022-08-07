

function getIDbyEmail(email) {
    const getUsers = ((JSON.parse(localStorage.getItem('users'))) ?? [])

    const user = getUsers.find(exits => ( exits.email === email ));

    const userID = user.userID

    return userID;
}

export default getIDbyEmail;