import User from './User';
import possChars from './data/passChars';
import maxLen from './data/maxLen';

function incIndexes(indexes: number[], maxInc: number, toInc: number) {
    if (toInc < 0) {
        indexes[0] = -1;
        return;
    }
    else if (indexes[toInc] + 1 < maxInc) indexes[toInc] ++;
    else {
        indexes[toInc] = 0;
        incIndexes(indexes, maxInc, toInc-1);
    }
    return;
}

function findPassword(user: User) {
    let password: string;
    let indexes = new Array<number>();

    for (let l = 0; l < maxLen; l++) {
        indexes = new Array(l+1).fill(0);

        while (indexes[0] !== -1) {
            password = "";
            for (let i = 0; i < indexes.length; i++) {
                password += possChars[indexes[i]];
            }
            if (user.accessAccount(password)) return password;
            incIndexes(indexes, possChars.length, l);
        }
    }

    return password;
}

console.log(findPassword(new User("ABaslkjdhflkashfgdlasdfC")));
