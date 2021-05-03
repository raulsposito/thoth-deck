const data = [
    {
        title: 'The Fool',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/05/the-fool-thoth-tarot.png',
        content: 'Curious, interested in experimentation, looking for a change.'
    },
    {
        title: 'The Magus',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/05/the-magus.png',
        content: 'Resolution, Self-made. Dynamic, the power of volition, full of energy.'
    },
    {
        title: 'The Priestess',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/05/the-pristess-thoh-tarot.png',
        content: 'Longing for inner sources. Being guided, touched, becomes the original cause.'
    },
    {
        title: 'The Empress',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/05/the-empress-thoth-tarot.png',
        content: 'Devotion and the mother’s love (open and ready to receive).'
    },
    {
        title: 'The Emperor',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/05/the-emperor-thoth-tarot.png',
        content: 'Domination (of the mind to nature). Justice and order.'
    },
    {
        title: 'The Hierophant',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/05/the-hierophant-thoth.png',
        content: 'To search for the mysterious truth. Knowledge and understanding are the independent experiences of science and dogma religious.'
    },
    {
        title: 'The Lovers',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/05/the-lovers-thoth.png',
        content: 'Consecration and unity of opposites. Recognition and free to decide from the bottom of the heart.'
    },
    {
        title: 'The Chariot',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/05/the-chariot-thoth.png',
        content: 'The desire to conquer, the spirit of adventure, brave. The best thing can be achieved: Holy Grail.'
    },
    {
        title: 'The Adjustment',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/05/the-adjustment-thoth.png',
        content: '	Deep will, seeking harmony through mastery of reality. Responsible, self-awareness, objectivity.'
    },
    {
        title: 'The Hermit',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/05/hermit-thoth.jpg',
        content: 'Living in seclusion, escaping the burdens, retreating to the ego, isolating oneself. Truth, knowledge, seeking the self.'
    },
    {
        title: 'The Fortune',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/the-fortune-thoth.png',
        content: 'Develop and continuous decline (alternation, endless change, new beginning). Accept fate, understand the purpose of life, and the transformation of lower things on higher things.'
    },
    {
        title: 'The Lust',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/the-lust-thoth.png',
        content: 'Energy, passion, prestige. Joy in life, initiation, the transformation of sensuality (changing the nature of the animal through acceptance which is full of love).'
    },
    {
        title: 'The Hanged Man',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/the-hanged-man-thoth.png',
        content: 'Sacrifice and devotion (accepting the arrangement of fate and seeking deep hidden meanings). Redemption, maturity, the search for wisdom, salvation focus.'
    },
    {
        title: 'The Death',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/thoth-tarot-death.png',
        content: 'Die and be born, grow and die. The transformation. Make room for new things.'
    },
    {
        title: 'The Art',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/the-art-thoth.png',
        content: 'Solve et coagula (dissolving and bonding): the reunion of what has disintegrated at a new level. Appropriate measurement (balance and harmony).'
    },
    {
        title: 'The Devil',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/the-devil-thoth.png',
        content: 'Dark magic, ritualized sexual activity, the transformation of the self through group rituals. Reverse: the Inquisition on behalf of God that burned the people (mostly women) who were supposed to be witches.'
    },
    {
        title: 'The Tower',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/the-tower-thoth.png',
        content: 'Destruction of shape, nullification, and variation of values. In fact, enlightenment in awareness is struck like a lightning stream and destroying lies and rigid thoughts.'
    },
    {
        title: 'The Start',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/the-star-thoth.png',
        content: 'Introspection, see through the perfection of the Universe, innovate and regenerate.'
    },
    {
        title: 'The Moon',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/the-moon-thoth.png',
        content: 'Go down to the world below, the journey goes into the deep unconscious. The strange path goes into the depths of the soul, confronts the night, with fears, understand yourself most profoundly.'
    },
    {
        title: 'The Sun',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/the-sun-thoth.png',
        content: 'Strive for light, reconcile with the dark side and realize the deepest self. Exciting, accepting life, full of life, spacious, warm, fresh, confident.'
    },
    {
        title: 'The Aeon',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/the-aeon-thoth.png',
        content: 'Recognize the great correlations, expanded perceptions and the liberation of previously hidden powers.'
    },
    {
        title: 'The Universe',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/the-universe-thoth.png',
        content: 'The unity of the universe (the symbiosis of Cupid and the spirituality). Solution for confinement, conclusions of karma (karma).'
    },
    {
        title: 'Ace of Wands',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/ace-of-wands-thoth.png'
    },
    {
        title: '2 of Wands',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/2-of-wands-thoth.png'
    },
    {
        title: '3 of Wands',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/3-of-wands-thoth.png'
    },
    {
        title: '4 of Wands',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/4-of-wands-thoth.png'
    },
    {
        title: '5 of Wands',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/5-of-wands-thoth.png'
    },
    {
        title: '6 of Wands',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/6-of-wands-thoth.png'
    },
    {
        title: '7 of Wands',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/6-of-wands-thoth.png'
    },
    {
        title: '8 of Wands',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/8-of-wands-thoth.png'
    },
    {
        title: '9 of Wands',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/9-of-wands-thoth.png'
    },
    {
        title: '10 of Wands',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/10-of-wands-thoth.png'
    },
    {
        title: 'Prince of Wands',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/prince-of-wands-thoth.png'
    },
    {
        title: 'Princess of Wands',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/princess-of-wands-thoth.png'
    },
    {
        title: 'Queen of Wands',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/queen-of-wands-thoth.png'
    },
    {
        title: 'Knight of Wands',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/knight-of-wands-thoth.png'
    },
    {
        title: 'Ace of Cups',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/ace-of-cups-thoth.png'
    },
    {
        title: '2 of Cups',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/2-of-cups-thoth.png'
    },
    {
        title: '3 of Cups',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/3-of-cups-thoth.png'
    },
    {
        title: '4 of Cups',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/4-of-cups-thoth.png'
    },
    {
        title: '5 of Cups',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/5-of-cups-thoth.png'
    },
    {
        title: '6 of Cups',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/6-of-cups-thoth.png'
    },
    {
        title: '7 of Cups',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/7-of-cups-thoth.png'
    },
    {
        title: '8 of Cups',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/8-of-cups-thoth.png'
    },
    {
        title: '9 of Cups',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/9-of-cups-thoth.png'
    },
    {
        title: '10 of Cups',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/10-of-cups-thoth.png'
    },
    {
        title: 'Prince of Cups',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/prince-of-cups-thoth.png'
    },
    {
        title: 'Princess of Cups',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/princess-of-cups-thoth.png'
    },
    {
        title: 'Queen of Cups',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/queen-of-cups-thoth.png'
    },
    {
        title: 'Knight of Cups',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/knight-of-cups-thoth.png'
    },
    {
        title: 'Ace of Swords',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/ace-of-swords-thoth.png'
    },
    {
        title: '2 of Swords',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/two-of-swords-thoth.png'
    },
    {
        title: '3 of Swords',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/3-of-swords-thoth.png'
    },
    {
        title: '4 of Swords',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/4-of-swords-thoth.png'
    },
    {
        title: '5 of Swords',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/5-of-swords-thoth.png'
    },
    {
        title: '6 of Swords',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/6-of-swords-thoth.png'
    },
    {
        title: '7 of Swords',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/7-of-swords-thoth.png'
    },
    {
        title: '8 of Swords',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/8-of-swords-thoth.png'
    },
    {
        title: '9 of Swords',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/9-of-swords-thoth.png'
    },
    {
        title: '10 of Swords',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/10-of-swords-thoth.png'
    },
    {
        title: 'Prince of Swords',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/prince-of-swords-thoth.png'
    },
    {
        title: 'Princess of Swords',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/princess-of-swords-thoth.png'
    },
    {
        title: 'Queen of Swords',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/queen-of-swords-thoth.png'
    },
    {
        title: 'Knight of Swords',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/knight-of-swords-thoth.png'
    },
    {
        title: 'Ace of Disks',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/ace-of-disks-thoth.png'
    },
    {
        title: '2 of Disks',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/2-of-disk-thoth.png'
    },
    {
        title: '3 of Disks',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/3-of-disks-thoth.png'
    },
    {
        title: '4 of Disks',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/4-of-disks-thoth.png'
    },
    {
        title: '5 of Disks',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/5-of-disks-thoth.png'
    },
    {
        title: '6 of Disks',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/6-of-disk-thoth.png'
    },
    {
        title: '7 of Disks',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/7-of-disks-thoth.png'
    },
    {
        title: '8 of Disks',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/8-of-disks-thoth.png'
    },
    {
        title: '9 of Disks',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/9-of-disks-thoth.png'
    },
    {
        title: '10 of Disks',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/10-of-disks-thoth.png'
    },
    {
        title: 'Prince of Disks',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/prince-of-disks.png'
    },
    {
        title: 'Princess of Disks',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/princess-of-disks-thoth.png'
    },
    {
        title: 'Queen of Disks',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/queen-of-disks-thoth.png'
    },
    {
        title: 'Knight of Disks',
        cover: 'https://cdn-0.tarotx.net/wp-content/uploads/2019/06/knight-of-disks-thoth.png'
    },
]

export default data 