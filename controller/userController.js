const randomizer = require('../util/randomizer');

exports.getMain = (req, res, next) => {
    res.render('main', {
        randomized: false,
        charList: randomizer.characters,
        lastCharacterPicked: 'random',
        randSkill: false,
        randItem: false,
    });
}

exports.postMain = (req, res, next) => {
    const randChar = req.body.randChar === 'random' ? Math.floor(Math.random() * randomizer.characters.length) : req.body.randChar;
    const randSkill = req.body.randSkill ? true : false;
    const randItem = req.body.randItem ? Math.floor(Math.random() * randomizer.itemTier.length) : false;

    res.render('main', {
        randomized: true,
        charList: randomizer.characters,
        lastCharacterPicked: req.body.randChar,
        randChar: randomizer.characters[randChar],
        randSkill: randSkill,
        randItem: randomizer.itemTier[randItem]
    });
}