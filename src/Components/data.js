const data = [
    {
        title: 'The Fool',
        cover: 'https://tarotx.net/wp-content/uploads/2019/05/the-fool-thoth-tarot.png',
        content: 'Curious, interested in experimentation, looking for a change. Planning in life (a new round in the circle of eternity). The positive disintegration of structures and confinement, altruistic idealism, infinite imagination, perception of the universe.'
    },
    {
        title: 'The Magus',
        cover: 'https://tarotx.net/wp-content/uploads/2019/05/the-magus.png',
        content: 'Resolution, Self-made. Dynamic, the power of volition, full of energy.'
    },
    {
        title: 'The Priestess',
        cover: 'https://tarotx.net/wp-content/uploads/2019/05/the-pristess-thoh-tarot.png',
        content: 'Longing for inner sources. Being guided, touched, becomes the original cause. Perception based on intuition, mental intelligence, patience. The consciousness of the moon, the wisdom of the mothers heart.'
    },
    {
        title: 'The Empress',
        cover: 'https://tarotx.net/wp-content/uploads/2019/05/the-empress-thoth-tarot.png',
        content: 'Devotion and the mother’s love (open and ready to receive). Love the body, the pleasure, love the abundance, ensure, safety, reveal new things.'
    },
    {
        title: 'The Emperor',
        cover: 'https://tarotx.net/wp-content/uploads/2019/05/the-emperor-thoth-tarot.png',
        content: 'Domination (of the mind to nature). Justice and order. Courage and leadership capacity.'
    },
    {
        title: 'The Hierophant',
        cover: 'https://tarotx.net/wp-content/uploads/2019/05/the-hierophant-thoth.png',
        content: 'To search for the mysterious truth. Knowledge and understanding are the independent experiences of science and dogma religious.'
    },
    {
        title: 'The Lovers',
        cover: 'https://tarotx.net/wp-content/uploads/2019/05/the-lovers-thoth.png',
        content: 'Consecration and unity of opposites. Complete unity, becoming one. Recognition and free to decide from the bottom of the heart.'
    },
    {
        title: 'The Chariot',
        cover: 'https://tarotx.net/wp-content/uploads/2019/05/the-chariot-thoth.png',
        content: 'The desire to conquer, the spirit of adventure, brave. The best thing can be achieved: Holy Grail.'
    },
    {
        title: 'The Adjustment',
        cover: 'https://tarotx.net/wp-content/uploads/2019/05/the-adjustment-thoth.png',
        content: '	Deep will, seeking harmony through mastery of reality. Responsible, self-awareness, objectivity.'
    },
    {
        title: 'The Hermit',
        cover: 'https://tarotx.net/wp-content/uploads/2019/05/hermit-thoth.jpg',
        content: 'Living in seclusion, escaping the burdens, retreating to the ego, isolating oneself. Truth, knowledge, seeking the self.'
    },
    {
        title: 'The Fortune',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/the-fortune-thoth.png',
        content: 'Develop and continuous decline (alternation, endless change, new beginning). Accept fate, understand the purpose of life, and the transformation of lower things on higher things.'
    },
    {
        title: 'The Lust',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/the-lust-thoth.png',
        content: 'Energy, passion, prestige. Joy in life, initiation, the transformation of sensuality (changing the nature of the animal through acceptance which is full of love).'
    },
    {
        title: 'The Hanged Man',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/the-hanged-man-thoth.png',
        content: 'Sacrifice and devotion (accepting the arrangement of fate and seeking deep hidden meanings). Redemption, maturity, the search for wisdom, salvation focus.'
    },
    {
        title: 'The Death',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/thoth-tarot-death.png',
        content: 'Die and be born, grow and die. The transformation. Make room for new things.'
    },
    {
        title: 'The Art',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/the-art-thoth.png',
        content: 'Solve et coagula (dissolving and bonding): the reunion of what has disintegrated at a new level. Appropriate measurement (balance and harmony).'
    },
    {
        title: 'The Devil',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/the-devil-thoth.png',
        content: 'Dark magic, ritualized sexual activity, the transformation of the self through group rituals. Reverse: the Inquisition on behalf of God that burned the people (mostly women) who were supposed to be witches.'
    },
    {
        title: 'The Tower',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/the-tower-thoth.png',
        content: 'Destruction of shape, nullification, and variation of values. In fact, enlightenment in awareness is struck like a lightning stream and destroying lies and rigid thoughts.'
    },
    {
        title: 'The Start',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/the-star-thoth.png',
        content: 'Introspection, see through the perfection of the Universe, innovate and regenerate.'
    },
    {
        title: 'The Moon',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/the-moon-thoth.png',
        content: 'Go down to the world below, the journey goes into the deep unconscious. The strange path goes into the depths of the soul, confronts the night, with fears, understand yourself most profoundly.'
    },
    {
        title: 'The Sun',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/the-sun-thoth.png',
        content: 'Strive for light, reconcile with the dark side and realize the deepest self. Exciting, accepting life, full of life, spacious, warm, fresh, confident.'
    },
    {
        title: 'The Aeon',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/the-aeon-thoth.png',
        content: 'Recognize the great correlations, expanded perceptions and the liberation of previously hidden powers.'
    },
    {
        title: 'The Universe',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/the-universe-thoth.png',
        content: 'The unity of the universe (the symbiosis of Cupid and the spirituality). Solution for confinement, conclusions of karma (karma).'
    },
    {
        title: 'Ace of Wands',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/ace-of-wands-thoth.png',
        content: 'Energy, initiative, passion, willingness to take risks. Energy, initiative, passion, willingness to take risks.'
    },
    {
        title: '2 of Wands',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/2-of-wands-thoth.png',
        content: 'Assertiveness, Conquer and rule. Motivation, courage to act.Will (creative).'
    },
    {
        title: '3 of Wands',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/3-of-wands-thoth.png',
        content: 'Creativity, confidence, new start. Trust, safety, success. Power and strength are strengthened; trust, flexibility, and harmony. The will and power are in harmony with the law of the universe.'
    },
    {
        title: '4 of Wands',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/4-of-wands-thoth.png',
        content: 'Order (unifying, perfecting and overcoming the opposites). Control (principle of power). 	Complete, inner perfection, spiritual ideals. Overestimating yourself; blasphemy, insensitivity.'
    },
    {
        title: '5 of Wands',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/5-of-wands-thoth.png',
        content: 'Challenging, stressful, impulsive. Relieve stress (mostly due to controversy). Demonstrating self-ability (sports competition). Arrange and master conflicts, arguing is the father of everything (Heraclit).'
    },
    {
        title: '6 of Wands',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/6-of-wands-thoth.png',
        content: 'Joy, optimism, struggle to win. The ultimate victory, extreme. Warm feelings, bright personality. Self-importance, emotional abundance, and personal worship.'
    },
    {
        title: '7 of Wands',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/6-of-wands-thoth.png',
        content: 'Resist the outside world. Brave, courage, fighting spirit. Indecisive, ignorant, the difference between instinct (courage) and spirit (feeling). The character of devotion to heroism (reckless behavior, surpassing oneself, renewable capacity).'
    },
    {
        title: '8 of Wands',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/8-of-wands-thoth.png',
        content: 'Ideas, actions, and communication (fast). Knowledge, progress, development (new ways), thinking and/or implementing old goals (solving problems). Flexible, expandable, intellectual capacity. Unexpected motivation, mental activity.'
    },
    {
        title: '9 of Wands',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/9-of-wands-thoth.png',
        content: 'Spiritual truth (urgent search of difference). "The marriage of heaven and earth" (unity of conscious and unconscious capacity). Intellectual and emotional harmony. Space network (esoteric image structure of the world).'
    },
    {
        title: '10 of Wands',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/10-of-wands-thoth.png',
        content: 'Capacity orientation, self-righteousness, fairness, and order (aggression is repressed). Structure growth. Intellectual characteristics of the problem; the depth of truth. Responsibility and self-determination.'
    },
    {
        title: 'Prince of Wands',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/prince-of-wands-thoth.png',
        content: 'Active, arrogant, eager to adventure. Rich experience (travel and adventure). Attractive, open, enthusiastic. Fierce and tense.'
    },
    {
        title: 'Princess of Wands',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/princess-of-wands-thoth.png',
        content: 'Passion and sexual attraction (extrovert emotion). The love of life, love, sublimation. Enthusiastic, brave, beauty, power. The enthusiasm and the power of love that has a lot of passion.'
    },
    {
        title: 'Queen of Wands',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/queen-of-wands-thoth.png',
        content: 'Change and transformation (strong willpower). Become wise, love and sexual sublimation. Independent, close to nature, righteous, compassionate (warm, steadfast, loyal). Strong attraction and creative vision.'
    },
    {
        title: 'Knight of Wands',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/knight-of-wands-thoth.png',
        content: 'Open and immense (affirmative sovereignty). Take advantage of personal potential. Ideal humanity, intellectual activity (dynamic, capable of enthusiasm, willpower). The Creators affirmation (becoming someone with an inner image; knowing God).'
    },
    {
        title: 'Ace of Cups',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/ace-of-cups-thoth.png',
        content: 'The desire to be attached (love). Unity (dedication touches "the secret of life"). Receptive, dedication, harmony. "Secret of love" (the secret of being one, experiencing the grace, faith, transformation, enlightenment, accomplishment).'
    },
    {
        title: '2 of Cups',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/2-of-cups-thoth.png',
        content: 'The link between men and women. Emotional and physical exchanges. Focus on emotional harmony. The happiness of love (balance of extremes).'
    },
    {
        title: '3 of Cups',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/3-of-cups-thoth.png',
        content: 'Grow and benefited (receive and give back the feeling of "being loved by others"). Developed and perfected inner. Desire, pleasure, primitive sensuality. Full of love.'
    },
    {
        title: '4 of Cups',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/4-of-cups-thoth.png',
        content: 'Protective instincts, emotional strength, the devotion of the mother. The ideal standards of the family (safety, prosperity, affection). 	Love, emotion (emotional platform). Stability of emotion and emotional control (maternal love).'
    },
    {
        title: '5 of Cups',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/5-of-cups-thoth.png',
        content: 'Frustration and suffering. Splitting, tears, new hope. Separation, wakefulness, big changes. Bitterness, depression, still in crisis. Feeling (painful), a new consciousness.'
    },
    {
        title: '6 of Cups',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/6-of-cups-thoth.png',
        content: 'Emotional (emotional attachment and profound closeness). Emotional desire and creative capacity (balanced and harmonious due to the search for inner strength). Causal rooting, emotional power (sensuality). Inner is the source of emotional power.'
    },
    {
        title: '7 of Cups',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/7-of-cups-thoth.png',
        content: 'Drowsiness, longing, escape from reality. Dissolve, the state of dullness ("find treasure under the rainbow"). Warn of false hopes and promises. Desire, lust (falling into a muddy of false pleasure), lies, and mistakes. The tempting sweetness of short joy.'
    },
    {
        title: '8 of Cups',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/8-of-cups-thoth.png',
        content: 'Abandon, self-denial, suffer. Seek purpose and meaning in seclusion (spiritualization). Giving control to others, transformation. Sorrow, suicide, self-pity. Abandoned the values; break down form.'
    },
    {
        title: '9 of Cups',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/9-of-cups-thoth.png',
        content: 'Love opens everything: optimism and trust in the future; seek fullness in a higher goal of life. Love opens everything: optimism and trust in the future; seek fullness in a higher goal of life. Goodness, happiness in the inner and outer. The inner manifestation of love; great satisfaction and joy in life.'
    },
    {
        title: '10 of Cups',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/10-of-cups-thoth.png',
        content: 'Seek the path of inner perfection. Emotional satisfaction in intellectual ideals. Optimistic, confident, warm feelings. The emotional, false sentiment, inner emptiness. Longing for eternity and slow ending; power to enjoy the extreme and let go.'
    },
    {
        title: 'Prince of Cups',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/prince-of-cups-thoth.png',
        content: 'Sacrifice and dedication. Connect with the Upper Self (the statue of the Lord crucified on the cross = "return to father"). Love, sympathy, sincerity, warmth. Selfish, lack of sensitivity, innocence. The bridge between emotion and reason.'
    },
    {
        title: 'Princess of Cups',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/princess-of-cups-thoth.png',
        content: 'The desire to unite into the universe (divine union with others; sexual coercion that goes beyond the limit). Explore the inner world; brave and plunge into the deepest depths of the soul. Aesthetics, fantasy, intuition, graceful, tender, sensitive. The hidden deep things that are hard to understand, and the urge to aspire to the emotional and dreaming world.'
    },
    {
        title: 'Queen of Cups',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/queen-of-cups-thoth.png',
        content: 'Remove the boundary between dream and reality (motivation to overcome barriers and eliminate limitations). Inner knowledge, inner intellect ("advancing into nothingness"). Intuitive understanding, depth of experience (visionary, inner light). The wisdom of femininity (the vastness of collective unconsciousness).'
    },
    {
        title: 'Knight of Cups',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/knight-of-cups-thoth.png',
        content: 'Sacrificing and renouncing instincts (separate from mother, desire to be free from sinful sexual disorders). Self-salvation by giving up. Intuitive understanding, sympathy, desire to help, cautious, intellectual. Temptation, deception, instability, auxiliary syndrome.'
    },
    {
        title: 'Ace of Swords',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/ace-of-swords-thoth.png',
        content: 'Mindful activities (thoughts shared by feelings in the form of the source of thinking, difference, independence, and organization). Change in awareness, insight, and wisdom. Objectivity. The ability to build firm ideas and beliefs of reason.'
    },
    {
        title: '2 of Swords',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/two-of-swords-thoth.png',
        content: 'The desire to balance knowledge. Find the balance by seeking knowledge. The harmony of different things. The stressful state is not resolved (because of the balance of forces, stress cannot be reduced). Balanced justice.'
    },
    {
        title: '3 of Swords',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/3-of-swords-thoth.png',
        content: 'Sadness, tears, despair, weakness, depending on the pity of others. Look through and dig deep into the inner, even if it will cause hurt and pain. Awareness, purpose in life, perfection, and present through renunciation and sacrifice. Disruption, separation, estrangement, and delusion.'
    },
    {
        title: '4 of Swords',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/4-of-swords-thoth.png',
        content: 'Stability and stillness. Delay and peace (self-awareness and rebirth through suffering experience). Social justice, sympathy. The forced withdrawal (illness), loneliness. The truce shows the prospect of peace.'
    },
    {
        title: '5 of Swords',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/5-of-swords-thoth.png',
        content: 'Passive suffering from a negative experience. Recognize your own limits. The understanding of correlations leads to the intention to convert. Harm and evil become worse.'
    },
    {
        title: '6 of Swords',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/6-of-swords-thoth.png',
        content: 'Seek truths (start looking for new horizons and new knowledge that dig deep into the secrets of the world). The balance between spirit and nature. Objective knowledge, justice, understanding, comprehensive views. Think whole, achieve tangible results for invisible things.'
    },
    {
        title: '7 of Swords',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/7-of-swords-thoth.png',
        content: 'Cunning or innocence and stupid trust. Discover yourself or reveal the true nature of others. Wisdom, insidiousness, surprising and wise attack. Deception, intrigue, dishonesty.'
    },
    {
        title: '8 of Swords',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/8-of-swords-thoth.png',
        content: 'The restlessness, and inner disturbance (exaggerated thoughts). The insight into the total correlation (relativity in space and time). Many benefits, dialectic talent, and quick intellectual grasp. Structure of consciousness and memory.'
    },
    {
        title: '9 of Swords',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/9-of-swords-thoth.png',
        content: 'The destructive power is offensive. Despair, boredom, and suffering. The fear of being as a guide on the path to maturity. Shame, guilt, fear, disgrace, suffering, hate. Encountering darkness; martyrdom; terrorist period of the Inquisition. '
    },
    {
        title: '10 of Swords',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/10-of-swords-thoth.png',
        content: 'Departure, conversion, disruption. Renunciation and separation as an act of liberation. Inference; end of a cycle.'
    },
    {
        title: 'Prince of Swords',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/prince-of-swords-thoth.png',
        content: 'Unexpected change. Seek awareness and solutions. Break down all the chains, overcome difficulties. Creative spirit (exciting ideas and thoughts).'
    },
    {
        title: 'Princess of Swords',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/princess-of-swords-thoth.png',
        content: 'Impulsiveness, turmoil, recklessness (intention to act in hasty thoughts). Self-improvement (shaped fluctuations). Transparent insight, clairvoyance, objectivity. The rise, revolution (intellectual), revival.'
    },
    {
        title: 'Queen of Swords',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/queen-of-swords-thoth.png',
        content: 'The aspiration to freedom, self-determination. Independence. Intelligence, wisdom, resourcefulness.'
    },
    {
        title: 'Knight of Swords',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/knight-of-swords-thoth.png',
        content: 'Active, intelligent, longing for knowledge, "the spirit of the storm". Intellectual strategy; caution in thinking, which sees things in their true nature and changes them. Mental strength (intellectual, intelligent, abstract thinking).'
    },
    {
        title: 'Ace of Disks',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/ace-of-disks-thoth.png',
        content: 'Urge Earth energy with the purpose to be aware. Great happiness (ideas in physical form). The shine in the inner and outer. Wealth and power (the source of tangible matter, tangible forms of energy).'
    },
    {
        title: '2 of Disks',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/2-of-disk-thoth.png',
        content: 'Change. Transfer. Flexibility is the positive side of change. Polarity (at a higher level, all opposites are just illusions or different natural products of the same energy stream).'
    },
    {
        title: '3 of Disks',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/3-of-disks-thoth.png',
        content: 'Self-development through work; build, materialize, and bind yourself. The development, recognition, the development of personal talents. Growth (economically). The increase of matter (the crystallization of forces).'
    },
    {
        title: '4 of Disks',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/4-of-disks-thoth.png',
        content: 'Assurance, fixation, and stability. The fulfillment of mundane power through condensed power. Calmness. Reinforcing and dominating power.'
    },
    {
        title: '5 of Disks',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/5-of-disks-thoth.png',
        content: 'Readiness to change. Crisis. The volatility, the change, the try-out. The shadow Failure, collapse, disappointment. Increased experience through the growing crisis.'
    },
    {
        title: '6 of Disks',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/6-of-disk-thoth.png',
        content: 'Overcoming the crisis, gaining material. Harmony and abundance (full of prosperity). Charity, brotherly love, patronage. Happiness and prosperity (heavenly conditions).'
    },
    {
        title: '7 of Disks',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/7-of-disks-thoth.png',
        content: 'Inner emptiness; endurance. "No more effort ... all capital has been exhausted and lost. Thats all." (Crowley). The confrontation with the initial fear of the collective. Wait (the time when the results come has not yet appeared).'
    },
    {
        title: '8 of Disks',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/8-of-disks-thoth.png',
        content: 'Dedication and a comprehensive view (through putting things in order). Recognition of detailed correlation. Self-discipline and careful review of details (economic method). Adapt to the requirements of time (neutral objective).'
    },
    {
        title: '9 of Disks',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/9-of-disks-thoth.png',
        content: 'Materialization and happiness. Increase wealth, prosperity (growth means material success). Happiness, achievement, financial luck. Satisfaction, assurance, material adequacy.'
    },
    {
        title: '10 of Disks',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/10-of-disks-thoth.png',
        content: 'Strive for achievement, wealth, and assurance. A solid foundation, valuable circumstances. Success and prosperity (solid foundation). The fulfillment of human goals or the culmination of earthly happiness; this card is the culmination of the Disk suit and the Minor Arcana.'
    },
    {
        title: 'Prince of Disks',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/prince-of-disks.png',
        content: 'Diligence, concentration, and endurance (perseverance and hard work with sensual and industrious temperament). Stable through work (growth, persistence, maturity, and success). Reliable, calm, intentional. Pragmatic people who only look at the nature of people when working and measuring things.'
    },
    {
        title: 'Princess of Disks',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/princess-of-disks-thoth.png',
        content: 'Seek emotional security. Physical connection: pregnancy and childbirth. Sexuality, love and emotional warmth. Innovation, development, and motherhood (aspects that are productive or creative and nurture from contacting with the Great Goddess and Mother Earth).'
    },
    {
        title: 'Queen of Disks',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/queen-of-disks-thoth.png',
        content: 'Striving to have material assurance. Family makes a stable and safe foundation. Feminine, luxury, full of fertility. Emotional life is strengthened, united with all forms of life, matriarchy.'
    },
    {
        title: 'Knight of Disks',
        cover: 'https://tarotx.net/wp-content/uploads/2019/06/knight-of-disks-thoth.png',
        content: 'Strive to have wealth, security, and tangible things. Maintenance, stability, and eternal value. Perseverance, reason, strength, and patience (strict, authoritarian, influential, and tenacious). The senior ("owner of natural resources") who controls, exploits, and subjugates Mother Nature to follow his own needs.'
    },
]

export default data