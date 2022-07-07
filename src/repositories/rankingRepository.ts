import connection from "../config/database.js";

async function getRanking(){
    return connection.query(`
        SELECT username, wins, losses, draws 
        FROM fighters
        ORDER BY wins DESC, draws DESC`);
}

const rankingRepository = {
    getRanking
}

export default rankingRepository