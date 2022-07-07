import axios from "axios";

async function verifyUsers(firstUser: string, secondUser: string) {

    await axios.get(`http://api.github.com/users/${firstUser}`)

        .catch((error) => {
            throw { type: "not_found", message: error.response.data };
        });

    await axios.get(`http://api.github.com/users/${secondUser}`)

        .catch((error) => {
            throw { type: "not_found", message: error.response.data };
        });

    return;
}

export async function getApiInfo(username: string) {
    
    const info = await axios
        .get(`http://api.github.com/users/${username}/repos`)
        .catch((error) => {
            throw { type: "not_found", message: error.response.data };
        });
    
    return info;
}

const userService = {
    verifyUsers,
    getApiInfo
}

export default userService