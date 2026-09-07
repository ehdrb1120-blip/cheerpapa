// === 0. 스크립트 파싱 즉시 0초 BGM 오토플레이 가동 ===
let bgmAudio = new Audio('audio/bgm_cheerful.mp3?v=5000');
bgmAudio.loop = true;
bgmAudio.volume = 0.25;
try {
    bgmAudio.play().catch(() => {});
} catch (e) {}

// === 1. 상태 관리 ===
let currentHour = 3;
let currentMinute = 0;
let currentMode = "learn"; // 'learn', 'quiz', 'game'
let quizDifficulty = "easy"; // 'easy', 'medium', 'hard'
let gameDifficulty = "easy"; // 'easy', 'medium', 'hard'
let isHintVisible = true;
let isTtsEnabled = true;
let isBgmEnabled = true;
let starCount = parseInt(localStorage.getItem("clock_star_count") || "0", 10);
let currentQuizIndex = 0;
let quizScore = 0;
let streakCount = 0;
let gameTimer = 45;
let gameTimerInterval = null;
let gameScore = 0;
let gameTargetHour = 7;
let gameTargetMinute = 45;
let isDraggingHand = false;
let elapsedDifficulty = "easy";
let elapsedScore = 0;
let elapsedStreak = 0;
let currentElapsedQuestion = null;

class MarimbaBGM {
    constructor() {
        this.ctx = null;
        this.isPlaying = false;
        this.timer = null;
        this.noteIndex = 0;
        this.notes = [
            261.63, 329.63, 392.00, 523.25, 493.88, 392.00, 440.00, 349.23,
            392.00, 329.63, 261.63, 293.66, 329.63, 293.66, 0, 0,
            523.25, 392.00, 329.63, 392.00, 440.00, 523.25, 493.88, 392.00,
            523.25, 493.88, 440.00, 392.00, 523.25, 0, 0, 0
        ];
    }
    start() {
        if (this.isPlaying) return;
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!this.ctx) this.ctx = new AC();
        if (this.ctx.state === "suspended") this.ctx.resume();
        this.isPlaying = true;
        this.noteIndex = 0;
        this.loop();
    }
    stop() {
        this.isPlaying = false;
        if (this.timer) clearTimeout(this.timer);
    }
    loop() {
        if (!this.isPlaying) return;
        const freq = this.notes[this.noteIndex % this.notes.length];
        if (freq > 0 && this.ctx) {
            try {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = "sine";
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
                gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.35);
            } catch (e) {}
        }
        this.noteIndex++;
        this.timer = setTimeout(() => this.loop(), 250);
    }
}
const marimbaBgm = new MarimbaBGM();

function initBgm() {
    if (!bgmAudio) {
        bgmAudio = new Audio('audio/bgm_cheerful.mp3?v=2000');
        bgmAudio.loop = true;
        bgmAudio.volume = 0.22;
    }
}

function getBgmElem() {
    return document.getElementById("bgmAudioElem");
}

function stopBgm() {
    const bgm = getBgmElem();
    if (bgm) bgm.pause();
    if (bgmAudio) bgmAudio.pause();
    marimbaBgm.stop();
}

function playBgm() {
    if (!isBgmEnabled) return;
    const intro = document.getElementById("introScreen");
    // If not on introScreen, do not play BGM
    if (intro && (intro.style.display === "none" || intro.classList.contains("fade-out"))) {
        stopBgm();
        return;
    }

    if (bgmAudio) {
        bgmAudio.volume = 0.25;
        bgmAudio.play().then(() => {
            marimbaBgm.stop();
        }).catch(err => {
            console.log("MP3 autoplay wait, fallback to synth:", err);
            marimbaBgm.start();
        });
    }

    const bgmElem = getBgmElem();
    if (bgmElem) {
        bgmElem.volume = 0.25;
        bgmElem.play().catch(() => {});
    }
}

function toggleBgm() {
    isBgmEnabled = !isBgmEnabled;
    const introBtn = document.getElementById("introBgmToggleBtn");
    if (isBgmEnabled) {
        if (introBtn) introBtn.innerHTML = "🎵 숲속 마림바 배경음악 켜짐 🔊";
        playBgm();
    } else {
        if (introBtn) introBtn.innerHTML = "🔇 배경음악 꺼짐";
        stopBgm();
    }
}

// === 2. Web Audio 효과음 클래스 ===
class SoundFX {
    constructor() { this.ctx = null; }
    init() {
        if (!this.ctx) {
            const AC = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AC();
        }
        if (this.ctx.state === "suspended") {
            this.ctx.resume();
        }
    }
    playClick() {
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
    }
    playSuccess() {
        this.init();
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.09);
            gain.gain.setValueAtTime(0.2, this.ctx.currentTime + idx * 0.09);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.09 + 0.25);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + idx * 0.09);
            osc.stop(this.ctx.currentTime + idx * 0.09 + 0.25);
        });
    }
    playFanfare() {
        this.init();
        [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.12);
            gain.gain.setValueAtTime(0.3, this.ctx.currentTime + idx * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.12 + 0.4);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + idx * 0.12);
            osc.stop(this.ctx.currentTime + idx * 0.12 + 0.4);
        });
    }
}
const sfx = new SoundFX();

function unlockAudio() {
    sfx.init();
    if (sfx.ctx && sfx.ctx.state === "suspended") {
        sfx.ctx.resume();
    }
    if (marimbaBgm.ctx && marimbaBgm.ctx.state === "suspended") {
        marimbaBgm.ctx.resume();
    }
}
window.addEventListener("touchstart", unlockAudio, { once: true });
window.addEventListener("click", unlockAudio, { once: true });

let currentAudioElement = null;

function playNeuralAudio(audioKey, fallbackText) {
    if (!isTtsEnabled) return;
    if (fallbackText) {
        speakWebSpeech(fallbackText);
    } else {
        const formattedHour = String(currentHour).padStart(2, '0');
        const formattedMin = String(currentMinute).padStart(2, '0');
        speakWebSpeech(`지금은 ${formattedHour}시 ${formattedMin}분 입니다.`);
    }
}

let cachedNaturalFemaleVoice = null;
function getNaturalFemaleVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    const koVoices = voices.filter(v => v.lang.includes('ko') || v.lang.includes('KO'));
    if (koVoices.length === 0) return null;

    let selected = koVoices.find(v => /SunHi|JiMin|SeoHyeon|YuJin/i.test(v.name));
    if (!selected) {
        selected = koVoices.find(v => /Google|Yuna|Sora/i.test(v.name));
    }
    if (!selected) {
        selected = koVoices.find(v => /Natural|Neural|Online/i.test(v.name) && !/Heami|InJoon|Kwangha|Desktop|Male|남성/i.test(v.name));
    }
    if (!selected) {
        selected = koVoices.find(v => !/Heami|InJoon|Kwangha|Desktop|Male|남성/i.test(v.name));
    }
    if (!selected) {
        selected = koVoices[0];
    }
    cachedNaturalFemaleVoice = selected || null;
    return cachedNaturalFemaleVoice;
}

if ('speechSynthesis' in window) {
    getNaturalFemaleVoice();
    window.speechSynthesis.onvoiceschanged = () => { getNaturalFemaleVoice(); };
}

function speakWebSpeech(text) {
    if (!isTtsEnabled || !text) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'ko-KR';
        utter.rate = 0.92;
        utter.pitch = 1.18;

        const femaleVoice = cachedNaturalFemaleVoice || getNaturalFemaleVoice();
        if (femaleVoice) {
            utter.voice = femaleVoice;
        }
        window.speechSynthesis.speak(utter);
    }
}

function speakText(text) {
    if (!isTtsEnabled) return;
    if (text) {
        speakWebSpeech(text);
    } else {
        const formattedHour = String(currentHour).padStart(2, '0');
        const formattedMin = String(currentMinute).padStart(2, '0');
        speakWebSpeech(`지금은 ${formattedHour}시 ${formattedMin}분 입니다.`);
    }
}

// === 3. 시계 SVG 렌더링 & 바늘 각도 계산 ===
function initClockSvg() {
    const ticksGroup = document.getElementById("ticksGroup");
    const numbersGroup = document.getElementById("numbersGroup");
    const minuteHintsGroup = document.getElementById("minuteHintsGroup");

    ticksGroup.innerHTML = "";
    numbersGroup.innerHTML = "";
    minuteHintsGroup.innerHTML = "";

    const centerX = 200;
    const centerY = 215; // 알람시계 종 고려 센터 (200, 215)

    // 60개 눈금선 생성
    for (let i = 0; i < 60; i++) {
        const angleRad = (i * 6 - 90) * (Math.PI / 180);
        const isMajor = i % 5 === 0;
        const innerR = isMajor ? 132 : 138;
        const outerR = 145;

        const x1 = centerX + innerR * Math.cos(angleRad);
        const y1 = centerY + innerR * Math.sin(angleRad);
        const x2 = centerX + outerR * Math.cos(angleRad);
        const y2 = centerY + outerR * Math.sin(angleRad);

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("class", `tick-line ${isMajor ? 'major' : ''}`);
        ticksGroup.appendChild(line);
    }

    // ✨ 클래식 또렷한 검은색 시계 숫자 1~12 생성
    for (let num = 1; num <= 12; num++) {
        const angleRad = (num * 30 - 90) * (Math.PI / 180);
        const numR = 115;
        const x = centerX + numR * Math.cos(angleRad);
        const y = centerY + numR * Math.sin(angleRad);

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.setAttribute("class", "clock-num");
        text.textContent = num;
        numbersGroup.appendChild(text);
    }

    // 5분 단위 초록색 분(Minute) 힌트 생성 (5, 10, 15... 60)
    for (let num = 1; num <= 12; num++) {
        const angleRad = (num * 30 - 90) * (Math.PI / 180);
        const hintR = 150;
        const x = centerX + hintR * Math.cos(angleRad);
        const y = centerY + hintR * Math.sin(angleRad);

        const minVal = num * 5;
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        text.setAttribute("class", "minute-hint-text");
        text.textContent = `${minVal}분`;
        minuteHintsGroup.appendChild(text);
    }

    updateClockVisuals();
}

function updateClockVisuals() {
    const hourHandGroup = document.getElementById("hourHandGroup");
    const minuteHandGroup = document.getElementById("minuteHandGroup");
    const digiTimeText = document.getElementById("digiTimeText");

    const centerX = 200;
    const centerY = 215;

    // 각도 계산:
    // 분침: 1분당 6도
    const minuteAngle = currentMinute * 6;
    // 시침: 1시간당 30도 + 1분당 0.5도
    const displayHour = currentHour % 12;
    const hourAngle = displayHour * 30 + currentMinute * 0.5;

    // SVG 일체형 바늘 회전 적용 (중앙 200, 215 축으로 완벽하게 피봇 회전)
    if (hourHandGroup) {
        hourHandGroup.setAttribute("transform", `rotate(${hourAngle} ${centerX} ${centerY})`);
    }
    if (minuteHandGroup) {
        minuteHandGroup.setAttribute("transform", `rotate(${minuteAngle} ${centerX} ${centerY})`);
    }

    // 디지털 시계 텍스트 갱신
    const formattedHour = String(currentHour).padStart(2, '0');
    const formattedMin = String(currentMinute).padStart(2, '0');
    digiTimeText.textContent = `${formattedHour}시 ${formattedMin}분`;
}

function clearSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    }
}

function adjustTime(hourDelta, minDelta) {
    clearSelection();
    sfx.playClick();

    currentMinute += minDelta;
    if (currentMinute >= 60) {
        currentHour += Math.floor(currentMinute / 60);
        currentMinute %= 60;
    } else if (currentMinute < 0) {
        const hoursSubbed = Math.ceil(Math.abs(currentMinute) / 60);
        currentHour -= hoursSubbed;
        currentMinute = (currentMinute % 60 + 60) % 60;
    }

    currentHour += hourDelta;
    if (currentHour > 12) currentHour = (currentHour - 1) % 12 + 1;
    if (currentHour <= 0) currentHour = (currentHour + 11) % 12 + 1;

    updateClockVisuals();
    onTimeChanged();
}

function onTimeChanged() {
    const speechBadge = document.getElementById("speechBadge");
    const speechSubDesc = document.getElementById("speechSubDesc");

    const formattedHour = String(currentHour).padStart(2, '0');
    const formattedMin = String(currentMinute).padStart(2, '0');

    // 단일 배경 유지 (시간대별 배경 전환 제거)
    document.body.classList.remove("dusk-mode", "night-mode");

    if (speechBadge) {
        speechBadge.textContent = `${formattedHour}시 ${formattedMin}분`;
    }

    if (speechSubDesc) {
        let subMsg = `<span class="sub-badge red">🔴 시침: ${currentHour}시</span> <span class="sub-badge green">🟢 분침: ${currentMinute}분</span> 가리키고 있어!`;
        if (currentMinute === 0) {
            subMsg = `<span class="sub-badge red">🔴 시침: ${currentHour}시</span> <span class="sub-badge green">🔔 딱 ${currentHour}시 정각이야!</span>`;
        } else if (currentMinute === 30) {
            subMsg = `<span class="sub-badge red">🔴 시침: ${currentHour}시</span> <span class="sub-badge green">⏰ ${currentHour}시 반 (30분)이야!</span>`;
        }
        speechSubDesc.innerHTML = subMsg;
    }

    let speakMsg = `지금은 ${currentHour}시 ${currentMinute}분이야!`;
    if (currentMinute === 0) speakMsg = `지금은 딱 ${currentHour}시 정각이야!`;
    else if (currentMinute === 30) speakMsg = `지금은 ${currentHour}시 30분이야!`;

    if (currentMode === "learn") {
        speakText(speakMsg);
    }
}

// === 4. 캔버스 파티클 효과 (반짝이는 기쁨의 별 파티클) ===
function initWarpCanvas() {
    const canvas = document.getElementById("warpCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 65 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 10 + 4,
        color: ["#ff5566", "#2ed573", "#ffc83b", "#a0e0ff", "#ffffff"][Math.floor(Math.random() * 5)],
        speedY: Math.random() * 1.5 + 0.5
    }));

    function draw() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.y -= p.speedY;
            if (p.y < -20) p.y = height + 20;
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });

        if (document.getElementById("introScreen") && !document.getElementById("introScreen").classList.contains("fade-out")) {
            requestAnimationFrame(draw);
        }
    }
    draw();
}

// === 5. 2모드: 퀴즈 맞히기 로직 (초급/중급/고급 3단계 난이도) ===
function generateQuiz() {
    const quizOptionsGrid = document.getElementById("quizOptionsGrid");
    const quizQuestionText = document.getElementById("quizQuestionText");
    const quizFeedback = document.getElementById("quizFeedback");
    const nextQuizBtn = document.getElementById("nextQuizBtn");
    const quizHintBanner = document.getElementById("quizHintBanner");
    const quizPlaceholderBtn = document.getElementById("quizPlaceholderBtn");

    quizFeedback.classList.add("hidden");
    nextQuizBtn.classList.add("hidden");
    if (quizHintBanner) quizHintBanner.classList.remove("hidden");
    if (quizPlaceholderBtn) quizPlaceholderBtn.classList.remove("hidden");

    // 퀴즈용 시각 무작위 생성 (난이도별 분 단위 차등)
    currentHour = Math.floor(Math.random() * 12) + 1;
    
    if (quizDifficulty === "easy") {
        currentMinute = Math.random() < 0.5 ? 0 : 30; // 0분(정각) 또는 30분(반시)
    } else if (quizDifficulty === "medium") {
        currentMinute = Math.floor(Math.random() * 12) * 5; // 5분 단위
    } else {
        currentMinute = Math.floor(Math.random() * 60); // 1분 단위 미세 시계
    }
    updateClockVisuals();

    const correctOption = `${String(currentHour).padStart(2, '0')}시 ${String(currentMinute).padStart(2, '0')}분`;

    // 4지선다 오답 선택지 생성
    const optionsSet = new Set([correctOption]);
    while (optionsSet.size < 4) {
        const dummyH = Math.floor(Math.random() * 12) + 1;
        let dummyM = 0;
        if (quizDifficulty === "easy") {
            dummyM = Math.random() < 0.5 ? 0 : 30;
        } else if (quizDifficulty === "medium") {
            dummyM = Math.floor(Math.random() * 12) * 5;
        } else {
            dummyM = Math.floor(Math.random() * 60);
        }
        const dummyOpt = `${String(dummyH).padStart(2, '0')}시 ${String(dummyM).padStart(2, '0')}분`;
        optionsSet.add(dummyOpt);
    }

    const optionsList = Array.from(optionsSet).sort(() => Math.random() - 0.5);

    if (quizDifficulty === "hard" && currentMinute > 40 && Math.random() < 0.5) {
        const nextHour = (currentHour % 12) + 1;
        const minutesToNext = 60 - currentMinute;
        quizQuestionText.textContent = `아래 알람시계는 [${nextHour}시 ${minutesToNext}분 전]일까요? 올바른 시각을 고르세요!`;
    } else {
        quizQuestionText.textContent = "아래 알람시계가 가리키는 시각을 맞춰보세요!";
    }

    quizOptionsGrid.innerHTML = "";

    optionsList.forEach(optText => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "quiz-opt-btn";
        btn.textContent = optText;
        btn.addEventListener("click", () => handleQuizAnswer(optText, correctOption, btn));
        quizOptionsGrid.appendChild(btn);
    });

    playNeuralAudio("quiz_prompt", "아래 알람시계가 가리키는 시각을 맞춰보세요!");
}

function handleQuizAnswer(selected, correct, btnElement) {
    const quizFeedback = document.getElementById("quizFeedback");
    const nextQuizBtn = document.getElementById("nextQuizBtn");
    const quizHintBanner = document.getElementById("quizHintBanner");
    const quizPlaceholderBtn = document.getElementById("quizPlaceholderBtn");
    const feedbackIcon = document.getElementById("feedbackIcon");
    const feedbackText = document.getElementById("feedbackText");

    const allBtns = document.querySelectorAll(".quiz-opt-btn");
    allBtns.forEach(b => b.disabled = true);

    if (quizHintBanner) quizHintBanner.classList.add("hidden");
    if (quizPlaceholderBtn) quizPlaceholderBtn.classList.add("hidden");

    if (selected === correct) {
        sfx.playSuccess();
        btnElement.classList.add("correct");
        feedbackIcon.textContent = "🐰";
        feedbackText.textContent = "정답입니다! 토돌이 대장이 칭찬해요!";
        quizScore += 10;
        streakCount += 1;
        addStarProgress();
        if (typeof confetti === "function") {
            confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
        }
        playNeuralAudio("correct", "정답입니다! 정말 대단해요!");
    } else {
        btnElement.classList.add("wrong");
        feedbackIcon.textContent = "😅";
        feedbackText.textContent = `아쉬워요! 정답은 [${correct}] 입니다.`;
        streakCount = 0;
        playNeuralAudio("wrong", "아쉬워요! 다시 한번 생각해보세요!");
        allBtns.forEach(b => {
            if (b.textContent === correct) b.classList.add("correct");
        });
    }

    const quizScorePill = document.getElementById("quizScorePill");
    const quizStreakPill = document.getElementById("quizStreakPill");
    if (quizScorePill) quizScorePill.textContent = `🌟 점수: ${quizScore}점`;
    if (quizStreakPill) quizStreakPill.textContent = `🔥 연속 정답: ${streakCount}회`;

    quizFeedback.classList.remove("hidden");
    nextQuizBtn.classList.remove("hidden");
}

// === 6. 3모드: 바늘 맞추기 타임어택 로직 ===
function generateGameTarget() {
    const gameFeedback = document.getElementById("gameFeedback");
    gameFeedback.classList.add("hidden");

    gameTargetHour = Math.floor(Math.random() * 12) + 1;
    if (gameDifficulty === "easy") {
        gameTargetMinute = Math.random() < 0.5 ? 0 : 30;
    } else if (gameDifficulty === "medium") {
        gameTargetMinute = Math.floor(Math.random() * 12) * 5;
    } else {
        gameTargetMinute = Math.floor(Math.random() * 60);
    }

    const formattedH = String(gameTargetHour).padStart(2, '0');
    const formattedM = String(gameTargetMinute).padStart(2, '0');
    document.getElementById("gameTargetTimeText").textContent = `${formattedH}시 ${formattedM}분`;

    // 플레이어 초기 시계는 12시 00분으로 초기화
    currentHour = 12;
    currentMinute = 0;
    updateClockVisuals();

    playNeuralAudio("target_game", `${gameTargetHour}시 ${gameTargetMinute}분을 만들어보세요!`);
}

function checkGameAnswer() {
    const gameFeedback = document.getElementById("gameFeedback");
    if (currentHour === gameTargetHour && currentMinute === gameTargetMinute) {
        sfx.playSuccess();
        gameScore += 1;
        addStarProgress();
        gameFeedback.innerHTML = `<span style="color:#26af5f; font-size:1.2rem;">🐰 대단해요! ${gameTargetHour}시 ${gameTargetMinute}분 완성! (+1점)</span>`;
        gameFeedback.classList.remove("hidden");
        if (typeof confetti === "function") {
            confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
        }
        playNeuralAudio("correct", "우와! 완벽하게 맞췄어!");
        setTimeout(() => {
            generateGameTarget();
        }, 1200);
    } else {
        gameFeedback.innerHTML = `<span style="color:#ff4757; font-size:1.1rem;">😅 조금 더 조정해봐요! (현재: ${currentHour}시 ${currentMinute}분)</span>`;
        gameFeedback.classList.remove("hidden");
        playNeuralAudio("wrong", "조금 더 바늘을 맞춰볼까?");
    }
}

// === 7. 뱃지 및 보상 관리 ===
function addStarProgress() {
    starCount += 1;
    if (starCount > 15) starCount = 15;
    localStorage.setItem("clock_star_count", starCount.toString());
    updateStarUI();

    if (starCount >= 15) {
        setTimeout(() => {
            showCertificateModal();
        }, 500);
    }
}

function updateStarUI() {
    document.getElementById("starCount").textContent = `${starCount}/15`;
}

function showCertificateModal() {
    sfx.playFanfare();
    const modal = document.getElementById("badgeModal");
    modal.classList.remove("hidden");
    if (typeof confetti === "function") {
        confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 } });
    }
    playNeuralAudio("cert", "축하합니다! 시계 보기 마스터 칭찬 상장을 받았어요!");
}

// === 6-2. [4모드] 소요시간 퀴즈 (Elapsed Time Quiz) ===
function generateElapsedQuestion() {
    const templates = [
        { name: "철수", vehicle: "기차", verb: "타고 간 시간", icon: "🚆" },
        { name: "영희", vehicle: "고속버스", verb: "타고 이동한 시간", icon: "🚌" },
        { name: "민수", vehicle: "영화관", verb: "영화 상영 시간", icon: "🎬" },
        { name: "지호", vehicle: "수영장", verb: "수영 강습 시간", icon: "🏊" },
        { name: "수진", vehicle: "도서관", verb: "동화책을 읽은 시간", icon: "📚" },
        { name: "동규", vehicle: "등산로", verb: "산을 오르는 데 걸린 시간", icon: "🏔️" },
        { name: "유나", vehicle: "놀이동산", verb: "신나게 놀았던 시간", icon: "🎡" },
        { name: "하준", vehicle: "비행기", verb: "하늘을 날아간 시간", icon: "✈️" }
    ];

    const item = templates[Math.floor(Math.random() * templates.length)];

    let startHour, startMin, durHours, durMins;

    if (elapsedDifficulty === "easy") {
        startHour = Math.floor(Math.random() * 5) + 7; // 7 ~ 11시
        durHours = Math.floor(Math.random() * 4) + 1;  // 1 ~ 4시간
        durMins = 0;
        startMin = 0;
    } else if (elapsedDifficulty === "medium") {
        startHour = Math.floor(Math.random() * 5) + 7;
        durHours = Math.floor(Math.random() * 4) + 1;
        const minOpts = [0, 15, 30, 45];
        startMin = minOpts[Math.floor(Math.random() * minOpts.length)];
        durMins = minOpts[Math.floor(Math.random() * minOpts.length)];
    } else {
        startHour = Math.floor(Math.random() * 5) + 7;
        durHours = Math.floor(Math.random() * 5) + 2;
        startMin = Math.floor(Math.random() * 12) * 5;
        durMins = Math.floor(Math.random() * 12) * 5;
    }

    let startTotalMins = startHour * 60 + startMin;
    let durTotalMins = durHours * 60 + durMins;
    let endTotalMins = startTotalMins + durTotalMins;

    let endHour24 = Math.floor(endTotalMins / 60);
    let endMin = endTotalMins % 60;

    let startAmPm = (startHour < 12) ? "오전" : "오후";
    let startDispHour = (startHour > 12) ? (startHour - 12) : (startHour === 0 ? 12 : startHour);
    let startStr = `${startAmPm} ${startDispHour}시 ${String(startMin).padStart(2, '0')}분`;

    let endAmPm = (endHour24 < 12) ? "오전" : "오후";
    let endDispHour = (endHour24 > 12) ? (endHour24 - 12) : (endHour24 === 0 ? 12 : endHour24);
    let endStr = `${endAmPm} ${endDispHour}시 ${String(endMin).padStart(2, '0')}분`;

    let correctDurStr = "";
    if (durHours > 0 && durMins > 0) {
        correctDurStr = `${durHours}시간 ${durMins}분`;
    } else if (durHours > 0) {
        correctDurStr = `${durHours}시간`;
    } else {
        correctDurStr = `${durMins}분`;
    }

    let optionsSet = new Set();
    optionsSet.add(correctDurStr);

    let tries = 0;
    while (optionsSet.size < 4 && tries < 50) {
        tries++;
        let wrongDurH = durHours + (Math.floor(Math.random() * 3) - 1);
        let wrongDurM = durMins + (Math.floor(Math.random() * 3) - 1) * 15;
        if (wrongDurH < 0) wrongDurH = 1;
        if (wrongDurM < 0) wrongDurM += 60;
        if (wrongDurM >= 60) wrongDurM -= 60;
        if (wrongDurH === 0 && wrongDurM === 0) wrongDurH = 1;

        let wStr = "";
        if (wrongDurH > 0 && wrongDurM > 0) wStr = `${wrongDurH}시간 ${wrongDurM}분`;
        else if (wrongDurH > 0) wStr = `${wrongDurH}시간`;
        else wStr = `${wrongDurM}분`;

        optionsSet.add(wStr);
    }

    let options = Array.from(optionsSet);
    options.sort(() => Math.random() - 0.5);

    currentElapsedQuestion = {
        item, startStr, endStr,
        startHour: startDispHour, startMin,
        endHour: endDispHour, endMin,
        durHours, durMins,
        correctDurStr, options
    };

    renderElapsedQuestion();
}

function renderElapsedQuestion() {
    if (!currentElapsedQuestion) return;
    const q = currentElapsedQuestion;

    document.getElementById("elapsedQuestionTitle").textContent = 
        `${q.item.icon} ${q.item.name}(이)가 ${q.startStr}에 출발하여 ${q.endStr}에 도착했습니다.`;
    document.getElementById("elapsedQuestionDetail").textContent = 
        `${q.item.name}(이)가 ${q.item.verb}은 총 얼마일까요?`;

    document.getElementById("elapsedFeedback").classList.add("hidden");
    document.getElementById("elapsedPlaceholderBtn").classList.remove("hidden");
    document.getElementById("nextElapsedBtn").classList.add("hidden");
    const retryRow = document.getElementById("elapsedRetryRow");
    if (retryRow) retryRow.classList.add("hidden");

    const hintBanner = document.getElementById("elapsedHintBanner");
    hintBanner.classList.remove("hidden");
    hintBanner.innerHTML = `🐰 <strong>토돌이 대장의 힌트:</strong> 출발(${q.startStr}) ➔ 도착(${q.endStr}) 시간 차이를 계산하세요!`;

    currentHour = q.startHour;
    currentMinute = q.startMin;
    updateClockVisuals();

    const speechMain = document.getElementById("speechMainTime");
    const speechSub = document.getElementById("speechSubDesc");
    if (speechMain) {
        speechMain.innerHTML = `출발시각: <span class="time-highlight-badge">${q.startStr}</span> ⏰`;
    }
    if (speechSub) {
        speechSub.innerHTML = `도착시각 <span class="sub-badge green">${q.endStr}</span> 까지 몇 시간 차이가 날까요?`;
    }

    speakWebSpeech(`소요시간 퀴즈! ${q.item.name}이가 ${q.startStr}에 출발해서 ${q.endStr}에 도착했습니다. 총 얼마나 걸렸을까요?`);

    const grid = document.getElementById("elapsedOptionsGrid");
    grid.innerHTML = "";
    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "quiz-opt-btn";
        btn.textContent = opt;
        btn.onclick = () => checkElapsedAnswer(opt, btn);
        grid.appendChild(btn);
    });
}

function resetElapsedOptionSelection() {
    const allBtns = document.querySelectorAll("#elapsedOptionsGrid .quiz-opt-btn");
    allBtns.forEach(b => {
        b.disabled = false;
        b.classList.remove("wrong", "correct");
    });
    const feedback = document.getElementById("elapsedFeedback");
    if (feedback) feedback.classList.add("hidden");
    const retryRow = document.getElementById("elapsedRetryRow");
    if (retryRow) retryRow.classList.add("hidden");
    const placeholderBtn = document.getElementById("elapsedPlaceholderBtn");
    if (placeholderBtn) placeholderBtn.classList.remove("hidden");
    const nextBtn = document.getElementById("nextElapsedBtn");
    if (nextBtn) nextBtn.classList.add("hidden");
    const hintBanner = document.getElementById("elapsedHintBanner");
    if (hintBanner) hintBanner.classList.remove("hidden");
}

function checkElapsedAnswer(selectedOpt, btnElem) {
    if (!currentElapsedQuestion) return;
    const q = currentElapsedQuestion;
    const isCorrect = (selectedOpt === q.correctDurStr);

    const feedback = document.getElementById("elapsedFeedback");
    const feedbackIcon = document.getElementById("elapsedFeedbackIcon");
    const feedbackText = document.getElementById("elapsedFeedbackText");
    const retryRow = document.getElementById("elapsedRetryRow");
    const nextBtn = document.getElementById("nextElapsedBtn");
    const placeholderBtn = document.getElementById("elapsedPlaceholderBtn");

    if (isCorrect) {
        const allBtns = document.querySelectorAll("#elapsedOptionsGrid .quiz-opt-btn");
        allBtns.forEach(b => b.disabled = true);
        btnElem.classList.add("correct");
        sfx.playSuccess();
        elapsedScore += 1;
        elapsedStreak += 1;
        addStarProgress();

        feedbackIcon.textContent = "🐰✨";
        feedbackText.textContent = `정답입니다! 총 ${q.correctDurStr} 걸렸어요! 🎉`;
        feedback.style.borderColor = "#2ed573";
        feedback.style.background = "#e4f7eb";
        feedback.style.color = "#26af5f";
        feedback.classList.remove("hidden");

        if (typeof confetti === "function") {
            confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        }
        playNeuralAudio("correct", `우와 정답이에요! 총 ${q.correctDurStr} 동안 걸렸어요!`);

        if (retryRow) retryRow.classList.add("hidden");
        if (placeholderBtn) placeholderBtn.classList.add("hidden");
        if (nextBtn) nextBtn.classList.remove("hidden");
    } else {
        btnElem.classList.add("wrong");
        btnElem.disabled = true; // 틀린 선택지만 비활성화하여 다른 보기를 즉시 재선택 가능하게 함!
        sfx.playWrong();
        elapsedStreak = 0;

        feedbackIcon.textContent = "🐰💧";
        feedbackText.textContent = `아쉬워요! 다른 정답지를 다시 골라보세요! 💡`;
        feedback.style.borderColor = "#ff7675";
        feedback.style.background = "#ffeae6";
        feedback.style.color = "#d63031";
        feedback.classList.remove("hidden");

        playNeuralAudio("wrong", `아쉬워요! 다른 정답지를 다시 골라보세요!`);

        if (placeholderBtn) placeholderBtn.classList.add("hidden");
        if (nextBtn) nextBtn.classList.add("hidden");
        if (retryRow) retryRow.classList.remove("hidden");
    }

    document.getElementById("elapsedScorePill").textContent = `🌟 점수: ${elapsedScore}점`;
    document.getElementById("elapsedStreakPill").textContent = `🔥 연속 정답: ${elapsedStreak}회`;
}

// === 8. 이벤트 리스너 & 모드 전환 ===
function switchMode(newMode) {
    sfx.playClick();
    stopBgm(); // 학습 페이지 모드 진입 시 BGM 100% 강제 차단!
    currentMode = newMode;

    document.querySelectorAll(".nav-tab").forEach(tab => {
        tab.classList.toggle("active", tab.dataset.mode === newMode);
    });

    document.querySelectorAll(".interactive-panel").forEach(panel => {
        panel.classList.remove("active");
    });

    if (newMode === "learn") {
        document.getElementById("panelLearn").classList.add("active");
        playNeuralAudio("learn_mode", "기초 배우기 모드야! 시침과 분침을 자유롭게 조작해봐.");
    } else if (newMode === "quiz") {
        document.getElementById("panelQuiz").classList.add("active");
        generateQuiz();
    } else if (newMode === "game") {
        document.getElementById("panelGame").classList.add("active");
        generateGameTarget();
    } else if (newMode === "elapsed") {
        document.getElementById("panelElapsed").classList.add("active");
        generateElapsedQuestion();
    }
}

function setupEventListeners() {
    // 인트로 시작 버튼 (학습 페이지 진입 시 BGM 100% 정지!)
    document.getElementById("startExplorationBtn").addEventListener("click", () => {
        sfx.playClick();
        stopBgm();
        const intro = document.getElementById("introScreen");
        intro.classList.add("fade-out");
        setTimeout(() => {
            intro.style.display = "none";
            document.getElementById("mainAppContainer").classList.remove("hidden-initial");
            switchMode(currentMode);
        }, 500);
    });

    // 홈 이동 버튼 (첫 화면 진입 시 BGM 재개!)
    document.getElementById("reopenIntroBtn").addEventListener("click", () => {
        sfx.playClick();
        const intro = document.getElementById("introScreen");
        intro.style.display = "flex";
        intro.classList.remove("fade-out");
        document.getElementById("mainAppContainer").classList.add("hidden-initial");
        playBgm();
        initWarpCanvas();
    });

    // 인트로 모드 선택 카드
    document.querySelectorAll(".mode-card").forEach(card => {
        card.addEventListener("click", () => {
            sfx.playClick();
            document.querySelectorAll(".mode-card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            currentMode = card.dataset.mode;
        });
    });

    // 상단 탭 스위처
    document.querySelectorAll(".nav-tab").forEach(tab => {
        tab.addEventListener("click", () => switchMode(tab.dataset.mode));
    });

    // 난이도 버튼 (퀴즈 모드)
    document.querySelectorAll(".diff-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            sfx.playClick();
            document.querySelectorAll(".diff-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            quizDifficulty = btn.dataset.diff;
            generateQuiz();
        });
    });

    // 난이도 버튼 (게임 모드)
    document.querySelectorAll(".game-diff-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            sfx.playClick();
            document.querySelectorAll(".game-diff-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            gameDifficulty = btn.dataset.diff;
            generateGameTarget();
        });
    });

    // 난이도 버튼 (소요시간 퀴즈 모드)
    document.querySelectorAll(".elapsed-diff-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            sfx.playClick();
            document.querySelectorAll(".elapsed-diff-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            elapsedDifficulty = btn.dataset.diff;
            generateElapsedQuestion();
        });
    });

    // BGM 토글 버튼
    const bgmToggleBtn = document.getElementById("bgmToggleBtn");
    if (bgmToggleBtn) {
        bgmToggleBtn.addEventListener("click", () => {
            sfx.playClick();
            toggleBgm();
        });
    }

    // 힌트 토글 버튼
    const hintToggleBtn = document.getElementById("hintToggleBtn");
    hintToggleBtn.addEventListener("click", () => {
        sfx.playClick();
        isHintVisible = !isHintVisible;
        const minuteHintsGroup = document.getElementById("minuteHintsGroup");
        if (isHintVisible) {
            minuteHintsGroup.classList.remove("hidden");
            hintToggleBtn.classList.add("active");
            hintToggleBtn.innerHTML = "💡 분(Minute) 힌트 ON";
        } else {
            minuteHintsGroup.classList.add("hidden");
            hintToggleBtn.classList.remove("active");
            hintToggleBtn.innerHTML = "💡 힌트 OFF";
        }
    });

    // TTS 토글
    const ttsToggleBtn = document.getElementById("ttsToggleBtn");
    ttsToggleBtn.addEventListener("click", () => {
        sfx.playClick();
        isTtsEnabled = !isTtsEnabled;
        ttsToggleBtn.innerHTML = isTtsEnabled ? "🗣️ 목소리 ON" : "🔇 OFF";
        if (!isTtsEnabled && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    });

    // 인트로 BGM 토글 버튼
    const introBgmBtn = document.getElementById("introBgmToggleBtn");
    if (introBgmBtn) {
        introBgmBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            sfx.playClick();
            toggleBgm();
        });
    }

    // 장난감 조작 버튼 클릭 (.toy-btn)
    document.querySelectorAll(".toy-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const type = btn.dataset.type;
            const val = parseInt(btn.dataset.val, 10);
            if (type === "hour") {
                adjustTime(val, 0);
            } else if (type === "min") {
                adjustTime(0, val);
            } else if (type === "min-set") {
                sfx.playClick();
                currentMinute = val;
                updateClockVisuals();
                onTimeChanged();
            }
        });
    });

    // ✨ 🖐️ 시계 SVG 시침/분침 완벽 독립 터치 회전 조작 (Direct Dual-Hand Touch & Drag)
    const svgClock = document.getElementById("analogClockSvg");
    if (svgClock) {
        let activeDragHand = null; // 'hour' 또는 'minute'
        let lastMinuteAngle = null;

        const getSvgCoords = (clientX, clientY) => {
            const rect = svgClock.getBoundingClientRect();
            const scaleX = 400 / rect.width;
            const scaleY = 400 / rect.height;
            const svgX = (clientX - rect.left) * scaleX;
            const svgY = (clientY - rect.top) * scaleY;
            return {
                x: svgX,
                y: svgY,
                dx: svgX - 200,
                dy: svgY - 215,
                dist: Math.hypot(svgX - 200, svgY - 215)
            };
        };

        const getAngleFromCoords = (dx, dy) => {
            let rad = Math.atan2(dy, dx);
            let deg = rad * (180 / Math.PI) + 90;
            if (deg < 0) deg += 360;
            return deg;
        };

        const updateTimeFromPointer = (clientX, clientY, snapToFive = false) => {
            const { dx, dy } = getSvgCoords(clientX, clientY);
            const deg = getAngleFromCoords(dx, dy);

            if (activeDragHand === "hour") {
                // 🔴 시침 조작: 아이들이 시침을 손으로 돌리면 해당 시간으로 정확히 이동
                let hourCalculated = Math.round(deg / 30);
                if (hourCalculated <= 0) hourCalculated = 12;
                if (hourCalculated > 12) hourCalculated = 1;

                if (currentHour !== hourCalculated) {
                    currentHour = hourCalculated;
                    updateClockVisuals();
                    onTimeChanged();
                }
            } else {
                // 🟢 분침 조작: 분침 회전 및 12시 통과 시 시간 연동
                let minCalculated = Math.round(deg / 6);
                if (minCalculated >= 60) minCalculated = 0;

                if (snapToFive && currentMode !== "game") {
                    minCalculated = Math.round(minCalculated / 5) * 5;
                    if (minCalculated >= 60) minCalculated = 0;
                }

                if (lastMinuteAngle !== null) {
                    if (lastMinuteAngle > 300 && deg < 60) {
                        currentHour = (currentHour % 12) + 1;
                    } else if (lastMinuteAngle < 60 && deg > 300) {
                        currentHour = (currentHour - 2 + 12) % 12 + 1;
                    }
                }
                lastMinuteAngle = deg;

                if (currentMinute !== minCalculated) {
                    currentMinute = minCalculated;
                    updateClockVisuals();
                    onTimeChanged();
                }
            }
        };

        const handlePointerDown = (e) => {
            isDraggingHand = true;
            document.body.classList.add("dragging-hand");
            clearSelection();
            sfx.playClick();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            const { dx, dy, dist } = getSvgCoords(clientX, clientY);
            const deg = getAngleFromCoords(dx, dy);

            // 직접 터치된 요소 또는 중심 거리로 시침/분침 판별
            const targetEl = e.target ? e.target.closest("[data-hand]") : null;
            if (targetEl) {
                activeDragHand = targetEl.dataset.hand;
            } else {
                // 시침 길이(약 90px) 주변인 경우 시침 우선 선택
                if (dist <= 118) {
                    activeDragHand = "hour";
                } else {
                    activeDragHand = "minute";
                }
            }

            lastMinuteAngle = deg;
            updateTimeFromPointer(clientX, clientY, false);
        };

        const handlePointerMove = (e) => {
            if (!isDraggingHand) return;
            clearSelection();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            updateTimeFromPointer(clientX, clientY, false);
        };

        const handlePointerUp = () => {
            if (isDraggingHand) {
                isDraggingHand = false;
                document.body.classList.remove("dragging-hand");
                lastMinuteAngle = null;

                // 게임 모드가 아닐 때만 드래그 종료 시 5분 단위 정리 (게임 모드에서는 사용자가 맞춘 위치 100% 보존!)
                if (activeDragHand === "minute" && currentMode !== "game" && gameDifficulty !== "hard") {
                    currentMinute = Math.round(currentMinute / 5) * 5;
                    if (currentMinute >= 60) currentMinute = 0;
                }
                activeDragHand = null;
                updateClockVisuals();
                onTimeChanged();
            }
        };

        svgClock.addEventListener("mousedown", handlePointerDown);
        window.addEventListener("mousemove", handlePointerMove);
        window.addEventListener("mouseup", handlePointerUp);

        svgClock.addEventListener("touchstart", (e) => { e.preventDefault(); handlePointerDown(e); }, { passive: false });
        window.addEventListener("touchmove", (e) => { if (isDraggingHand) { handlePointerMove(e); } }, { passive: true });
        window.addEventListener("touchend", handlePointerUp);
    }

    // 퀴즈 관련 버튼
    document.getElementById("nextQuizBtn").addEventListener("click", () => {
        sfx.playClick();
        generateQuiz();
    });

    document.getElementById("nextElapsedBtn").addEventListener("click", () => {
        sfx.playClick();
        generateElapsedQuestion();
    });

    const retryElapsedBtn = document.getElementById("retryElapsedBtn");
    if (retryElapsedBtn) {
        retryElapsedBtn.addEventListener("click", () => {
            sfx.playClick();
            resetElapsedOptionSelection();
        });
    }

    const skipElapsedBtn = document.getElementById("skipElapsedBtn");
    if (skipElapsedBtn) {
        skipElapsedBtn.addEventListener("click", () => {
            sfx.playClick();
            generateElapsedQuestion();
        });
    }

    // 게임 정답 확인 버튼
    document.getElementById("submitGameAnswerBtn").addEventListener("click", () => {
        checkGameAnswer();
    });

    // 상장 모달 버튼
    document.getElementById("badgeBtn").addEventListener("click", () => {
        sfx.playClick();
        showCertificateModal();
    });

    document.getElementById("modalCloseBtn").addEventListener("click", () => {
        document.getElementById("badgeModal").classList.add("hidden");
    });
    document.getElementById("modalConfirmBtn").addEventListener("click", () => {
        document.getElementById("badgeModal").classList.add("hidden");
    });

    // 배우기 단계 카드 클릭
    document.querySelectorAll(".learn-item").forEach(item => {
        item.addEventListener("click", () => {
            sfx.playClick();
            document.querySelectorAll(".learn-item").forEach(i => i.classList.remove("active"));
            item.classList.add("active");
            const step = item.dataset.step;
            if (step === "1") {
                currentHour = 3; currentMinute = 0;
            } else if (step === "2") {
                currentHour = 3; currentMinute = 15;
            } else if (step === "3") {
                currentHour = 3; currentMinute = 30;
            } else if (step === "4") {
                currentHour = 4; currentMinute = 20;
            }
            updateClockVisuals();
            onTimeChanged();
        });
    });

    // 하루 생활 시각 연습 버튼 클릭
    document.querySelectorAll(".preset-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            sfx.playClick();
            const h = parseInt(btn.dataset.h, 10);
            const m = parseInt(btn.dataset.m, 10);
            currentHour = h;
            currentMinute = m;
            updateClockVisuals();
            onTimeChanged();
        });
    });

    document.getElementById("learnPracticeBtn").addEventListener("click", () => {
        sfx.playClick();
        adjustTime(0, 5);
    });
}

// === 9. DOM 준비 시 시작 ===
document.addEventListener("DOMContentLoaded", () => {
    initWarpCanvas();
    initClockSvg();
    updateStarUI();
    setupEventListeners();

    // 첫 페이지 로드 시 BGM 자동 재생 즉시 시도
    playBgm();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(() => {
            console.log("Clock PWA Service Worker registered!");
        }).catch(err => console.warn(err));
    }
});
