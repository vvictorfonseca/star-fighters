import battleRepository from "../repositories/battleRepository.js";
import userService from "./userService.js"

async function compareStars(firstUser: string, secondUser: string) {
    
    const infoFirstUser = await userService.getApiInfo(firstUser)
    const infoSecondUser = await userService.getApiInfo(secondUser)

    let countFirstUser: number = 0;
    let countSecondUser: number = 0;

    infoFirstUser.data.forEach(
        (info) => (countFirstUser += info.stargazers_count)
    )

    infoSecondUser.data.forEach(
        (info) => (countSecondUser += info.stargazers_count)
    )

    const firstUserExists = await battleRepository.getUserByUserName(firstUser);
    const secondUserExists = await battleRepository.getUserByUserName(secondUser);

    if(!firstUserExists.rows.length) {
        await battleRepository.createNewUser(firstUser);
    }

    if(!secondUserExists.rows.length) {
        await battleRepository.createNewUser(secondUser);
    }

    if (countFirstUser > countSecondUser) {

        await battleRepository.updateUserByUsername(firstUser, 1, 0, 0)
        await battleRepository.updateUserByUsername(secondUser, 0, 1, 0)

        return {
            "winner": firstUser,
            "loser": secondUser,
            "draw": false
        }
    
    } else if (countFirstUser < countSecondUser) {

        await battleRepository.updateUserByUsername(secondUser, 1, 0, 0)
        await battleRepository.updateUserByUsername(firstUser, 0, 1, 0)
        
        return {
            "winner": secondUser,
            "loser": firstUser,
            "draw": false
        }
    
    } else {

        await battleRepository.updateUserByUsername(firstUser, 0, 0, 1)
        await battleRepository.updateUserByUsername(secondUser, 0, 0, 1)
        
        return {
            "winner": null,
            "loser": null,
            "draw": true
        }
    }
}

export default compareStars