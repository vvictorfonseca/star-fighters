import connection from "../config/database.js";

async function getUserByUserName(username: string) {
    return connection.query(`
        SELECT * FROM fighters
        WHERE username = $1`,
        [username]);
}

async function createNewUser(username: string) {
    return connection.query(`
        INSERT INTO fighters
        VALUES($1, $2, $3, $4)`,
        [username, 0, 0, 0]);
}

async function updateUserByUsername(username: string, wins: number, losses: number, draws: number) {
    return connection.query(`
        UPDATE fighters
        SET wins = wins + $1, losses = losses + $2, draws = draws + $3
        WHERE username = $4`,
        [wins, losses, draws, username]);
}

const battleRepository = {
    getUserByUserName,
    createNewUser,
    updateUserByUsername
}

export default battleRepository