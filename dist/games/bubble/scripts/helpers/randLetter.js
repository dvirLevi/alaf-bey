const letterAndSound = [{
        letter: "א",
        sound: "1.mp3",
        id: 1
    },
    {
        letter: "בּ",
        sound: "2.mp3",
        id: 2
    },
    {
        letter: "ב",
        sound: "3.mp3",
        id: 3
    },
    {
        letter: "גּ",
        sound: "4.mp3",
        id: 4
    },
    {
        letter: "ג",
        sound: "5.mp3",
        id: 5
    },
    {
        letter: "דּ",
        sound: "6.mp3",
        id: 6
    },
    {
        letter: "ד",
        sound: "7.mp3",
        id: 7
    },
    {
        letter: "ה",
        sound: "8.mp3",
        id: 8
    },
    {
        letter: "ו",
        sound: "9.mp3",
        id: 9
    },
    {
        letter: "ז",
        sound: "10.mp3",
        id: 10
    },
    {
        letter: "ח",
        sound: "11.mp3",
        id: 11
    },
    {
        letter: "ט",
        sound: "12.mp3",
        id: 12
    },
    {
        letter: "י",
        sound: "13.mp3",
        id: 13
    },
    {
        letter: "כּ",
        sound: "14.mp3",
        id: 14
    },
    {
        letter: "כ",
        sound: "15.mp3",
        id: 15
    },
    {
        letter: "ך",
        sound: "16.mp3",
        id: 16
    },
    {
        letter: "ל",
        sound: "17.mp3",
        id: 17
    },
    {
        letter: "מ",
        sound: "18.mp3",
        id: 18
    },
    {
        letter: "ם",
        sound: "19.mp3",
        id: 19
    },
    {
        letter: "נ",
        sound: "20.mp3",
        id: 20
    },
    {
        letter: "ן",
        sound: "21.mp3",
        id: 21
    },
    {
        letter: "ס",
        sound: "22.mp3",
        id: 22
    },
    {
        letter: "ע",
        sound: "23.mp3",
        id: 2
    },
    {
        letter: "פּ",
        sound: "24.mp3",
        id: 24
    },
    {
        letter: "פ",
        sound: "25.mp3",
        id: 25
    },
    {
        letter: "ף",
        sound: "26.mp3",
        id: 26
    },
    {
        letter: "צ",
        sound: "27.mp3",
        id: 27
    },
    {
        letter: "ץ",
        sound: "28.mp3",
        id: 28
    },
    {
        letter: "ק",
        sound: "29.mp3",
        id: 29
    },
    {
        letter: "ר",
        sound: "30.mp3",
        id: 30
    },

    {
        letter: "שׁ",
        sound: "31.mp3",
        id: 31
    },
    {
        letter: "שֹ",
        sound: "32.mp3",
        id: 32
    },
    {
        letter: "תּ",
        sound: "33.mp3",
        id: 33
    },
    {
        letter: "ת",
        sound: "34.mp3",
        id: 34
    },
]

const randLetter = () => {
    let n = rand(0, letterAndSound.length - 1);
    return letterAndSound[n]
}

export default randLetter