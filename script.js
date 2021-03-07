let img_src = {
    1: ["project",
        "./assets/images/artistic-brush.png",
        "./assets/images/artistic-brush-active.png",
    ],
    2: ['aboutMe',
        "./assets/images/user-icon.png",
        "./assets/images/user-icon-active.png",
    ],
    3: ['contacts',
        "./assets/images/sms-speech-bubble.png",
        "./assets/images/sms-speech-bubble-active.png",
    ],
    4: ['userInfo',
        "./assets/images/computer-screen.png",
        "./assets/images/computer-screen-active.png",
    ]
}
let imgOff = -1
function call(key) {
    if (imgOff !== -1)
        document.getElementById(`${img_src[imgOff][0]}`).src = img_src[imgOff][1]
    document.getElementById('setting').innerHTML = ''
    document.getElementById('setting').insertAdjacentHTML('afterbegin', img_src[key][0])
    document.getElementById(`${img_src[key][0]}`).src = img_src[key][2]
    imgOff = key
}