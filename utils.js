const fs = require("fs");
const readline = require("readline");

const getAsciiArtLines = async () => {
    const input = fs.createReadStream("ascii-art.txt");

    const rl = readline.createInterface({
        input,
    });

    const asciiArtLines = [];

    rl.on("line", (line) => asciiArtLines.push(line));

    return new Promise((rs) => {
        rl.on("close", () => rs(asciiArtLines));
    });
};

const getAlphabet = async () => {
    const input = fs.createReadStream("alphabet.txt");
    const rl = readline.createInterface({
        input,
    });

    return new Promise((rs) => {
        rl.on("line", (line) => {
            rs(line);
            rl.close();
        });
    });
};

const splitAsciiString = (asciiStr, weightLetter = 4, hightLetter = 5) => {
    let asciiString = asciiStr.split("").filter(el => el !== '\n')
    let asciiArrayLetters = []
    let countAsciiLetters = Math.round(asciiString.length / (weightLetter * hightLetter))

    for (let i = 0; i < countAsciiLetters; i++) {
        let offset = i * weightLetter
        let skipLetter = (countAsciiLetters - 1) * weightLetter
        let asciiLetter = ""
        for (let j = 0; j < hightLetter; j++) {
            asciiLetter += asciiString.slice(offset, offset + weightLetter).join('') + '\n'
            offset += skipLetter + weightLetter
        }
        asciiArrayLetters.push(asciiLetter.slice(0, -1))
    }
    return asciiArrayLetters
}

const createAALRelationAlphabetDict = async (separator = '----') => {
    const asciiArtLines = await getAsciiArtLines();
    const alphabet = await getAlphabet();
    let alphabetSymbols = alphabet.split("");
    let dictAsciiSymbols = {};
    let str = "";
    let j = 0;
    for (let i = 0; i < asciiArtLines.length; i++) {
        if (asciiArtLines[i] != separator) str += asciiArtLines[i] + '\n'
        else {
            dictAsciiSymbols[str.slice(0, -1)] = alphabetSymbols[j]
            j++;
            str = "";
        }
    }
    return new Promise((rs) => {
        rs(dictAsciiSymbols)
    })
}

const convertAsciiArtToString = async (dictRelation_AAL_A, asciiString, weightLetter, hightLetter) => {
    inputAsciiLetters = splitAsciiString(asciiString, weightLetter, hightLetter);
    outputString = "";
    inputAsciiLetters.map((item) => outputString += dictRelation_AAL_A[item]?dictRelation_AAL_A[item]:"")
    return new Promise((rs) => rs(outputString))
}

module.exports = {
    getAlphabet,
    getAsciiArtLines,
    splitAsciiString,
    createAALRelationAlphabetDict,
    convertAsciiArtToString
};