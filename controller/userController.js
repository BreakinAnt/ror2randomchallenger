const randomizer = require('../util/randomizer');

exports.getMain = (req, res, next) => {
    res.render('main', {
        randomized: false,
        charList: randomizer.characters,
        artList: randomizer.artefacts,
        lastCharacterPicked: 'random',
        lastArtifactsPicked: 0,
        randSkill: false,
        randItem: false,
    });
}

exports.postMain = (req, res, next) => {
    const randChar = req.body.randChar === 'random' ? Math.floor(Math.random() * randomizer.characters.length) : req.body.randChar;
    const randSkill = req.body.randSkill ? true : false;
    const randItem = req.body.randItem ? Math.floor(Math.random() * randomizer.itemTier.length) : false;
    const randArtifacts = req.body.randArtifacts;

    if(randArtifacts > 0){
        for (let i = randomizer.artefacts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomizer.artefacts[i], randomizer.artefacts[j]] = [randomizer.artefacts[j], randomizer.artefacts[i]];
        }
    }

    res.render('main', {
        randomized: true,
        charList: randomizer.characters,
        artList: randomizer.artefacts,
        lastCharacterPicked: req.body.randChar,
        lastArtifactsPicked: randArtifacts,
        randChar: randomizer.characters[randChar],
        randSkill: randSkill,
        randItem: randomizer.itemTier[randItem],
        randArtifacts: randomizer.artefacts
    });
}