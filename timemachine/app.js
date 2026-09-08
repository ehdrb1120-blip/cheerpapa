/**
 * 🏰 AI 위인 타임머신 모험 V15.0 (대한민국 50대 위인 완벽 시대순 정렬 & 정보 레이블 최적화)
 * Developer: 대부호 마케팅실장 x @cheer.papa
 */

// === 1. 대한민국 50대 위인 풀 데이터베이스 (전원 개별 초상화 JPG 파일 1:1 매핑, 완벽 시대순 정렬) ===
const figuresData = {
    dangun: {
        id: "dangun",
        name: "단군왕검",
        era: "📜 고조선 (B.C. 2333년)",
        role: "우리 민족 최초의 건국 국왕",
        year: "B.C. 2333년",
        warpMessage: "아사달 신단수 아래! B.C. 2333년 고조선으로 슝~!",
        quote: "홍익인간의 뜻으로 세상을 널리 이롭게 하라!",
        avatar: "assets/images/dangun.jpg",
        voiceTypeTag: "🔊 고품질 AI 단군왕검 음성 (노인 국왕 톤)",
        greetingAudio: "assets/audio/dangun_greeting.mp3",
        greeting: "안녕, 반갑구나 탐험가 친구! 나는 고조선을 세운 단군왕검이란다. 홍익인간의 뜻으로 세상을 이롭게 하려 했지! 무엇이든 물어보렴!",
        quickQuestions: ["홍익인간이란 무슨 뜻인가요?", "곰과 호랑이 마늘 이야기는 진짜인가요?", "고조선은 어떤 나라였나요?", "개천절은 왜 단군왕검님과 관련이 있나요?"],
        knowledge: [
            { key: "홍익인간", audio: "assets/audio/dangun_k1.mp3", text: "홍익인간이란 '널리 인간 세상을 이롭게 한다'는 뜻이란다! 서로 돕고 사랑하는 따뜻한 마음이 가장 소중하지!" },
            { key: "곰", audio: "assets/audio/dangun_k2.mp3", text: "곰과 호랑이가 쑥과 마늘을 먹으며 견뎠단다! 곰은 끝까지 참고 견디어 어엿한 사람 웅녀가 되었지!" },
            { key: "고조선", audio: "assets/audio/dangun_k3.mp3", text: "우리 민족 최초의 나라 고조선은 널리 사람을 이롭게 하기 위해 하늘의 뜻을 받아 아사달에 세운 나라란다!" },
            { key: "개천절", audio: "assets/audio/dangun_k4.mp3", text: "기원전 2333년 10월 3일 개천절에 고조선을 세웠단다! 하늘이 열린 날을 기억하는 참 기쁜 날이지!" }
        ],
        badge: { id: "badge_dangun", name: "홍익인간 수호자 📜", desc: "단군왕검의 널리 이로운 지혜 전수받음", icon: "📜" }
    },

    hyeokgeose: {
        id: "hyeokgeose",
        name: "박혁거세",
        era: "🌟 신라 (B.C. 57년)",
        role: "신라 건국 국왕",
        year: "B.C. 57년",
        warpMessage: "알에서 일어난 세상을 밝히는 빛! B.C. 57년 서라벌로 슝~!",
        quote: "붉은 알의 밝은 빛처럼 신라를 훤히 밝히다!",
        avatar: "assets/images/hyeokgeose.jpg",
        voiceTypeTag: "🔊 고품질 AI 박혁거세 음성 (신비로운 국왕 톤)",
        greetingAudio: "assets/audio/hyeokgeose_greeting.mp3",
        greeting: "알에서 태어나 신라를 건국한 박혁거세란다! 붉은 알의 밝은 빛처럼 신라를 훤히 밝히려 했단다!",
        quickQuestions: ["박혁거세라는 이름은 어떤 뜻인가요?", "신라라는 나라 이름은 무슨 뜻인가요?", "서라벌에 사로국을 어떻게 세우셨나요?", "알영 부인은 어떤 분이신가요?"],
        knowledge: [
            { key: "이름", audio: "assets/audio/hyeokgeose_k1.mp3", text: "나정 우물가 붉은 알에서 태어나 세상을 밝게 비춘다는 뜻의 혁거세라는 이름을 얻었단다!" },
            { key: "신라", audio: "assets/audio/hyeokgeose_k2.mp3", text: "신라는 덕업이 일신하고 망라삼방한다는 뜻으로 '매일 새로워지고 세상을 아우른다'는 지혜로운 의미란다!" },
            { key: "사로국", audio: "assets/audio/hyeokgeose_k3.mp3", text: "서라벌 6촌 촌장들의 추대를 받아 나라 이름을 사로국이라 짓고 신라의 첫발을 내딛었지!" },
            { key: "알영", audio: "assets/audio/hyeokgeose_k4.mp3", text: "알영 우물가에서 태어난 알영 부인과 함께 백성들을 성심껏 보살폈단다!" }
        ],
        badge: { id: "badge_hyeokgeose", name: "서라벌의 빛 🌟", desc: "박혁거세의 신비로운 지혜 전수받음", icon: "🌟" }
    },

    jumong: {
        id: "jumong",
        name: "주몽 (동명성왕)",
        era: "🏹 고구려 (B.C. 37년)",
        role: "고구려 건국 영웅",
        year: "B.C. 37년",
        warpMessage: "졸본 땅의 당당한 기상! B.C. 37년 고구려로 슝~!",
        quote: "활 한 자루로 고구려의 위대한 기상을 열다!",
        avatar: "assets/images/jumong.jpg",
        voiceTypeTag: "🔊 고품질 AI 주몽 음성 (청년 영웅 톤)",
        greetingAudio: "assets/audio/jumong_greeting.mp3",
        greeting: "나는 활을 잘 쏘는 고구려의 건국 영웅 주몽이란다! 어떠한 시련이 찾아와도 용기로 극복하여 나라를 세웠지!",
        quickQuestions: ["주몽이라는 이름의 뜻은 무엇인가요?", "고구려는 어떻게 건국하셨나요?", "자라와 물고기가 다리를 놓아주었나요?", "고구려 기상은 어떤 정신인가요?"],
        knowledge: [
            { key: "이름", audio: "assets/audio/jumong_k1.mp3", text: "주몽이란 이름 자체가 활을 잘 쏘는 사람이라는 뜻이란다! 백 발 백 중 활솜씨로 고구려를 세웠지!" },
            { key: "건국", audio: "assets/audio/jumong_k2.mp3", text: "졸본 땅에 고구려를 세우고 용맹하고 당당한 민족의 기상을 다졌단다!" },
            { key: "자라", audio: "assets/audio/jumong_k3.mp3", text: "부여를 탈출할 때 강을 건너기 위해 자라와 물고기들이 다리를 놓아주었다는 전설이 전해진단다!" },
            { key: "기상", audio: "assets/audio/jumong_k4.mp3", text: "고구려의 기상은 시련 앞에서도 굴하지 않는 용기와 당당한 기개란다!" }
        ],
        badge: { id: "badge_jumong", name: "신궁의 명사수 🏹", desc: "주몽의 백발백중 용기 전수받음", icon: "🏹" }
    },

    onjo: {
        id: "onjo",
        name: "온조왕",
        era: "🏞️ 백제 (B.C. 18년)",
        role: "백제 건국 국왕",
        year: "B.C. 18년",
        warpMessage: "한강 강변의 풍요로운 땅! B.C. 18년 백제로 슝~!",
        quote: "백성들과 함께 풍요롭고 아름다운 백제를 세우다!",
        avatar: "assets/images/onjo.jpg",
        voiceTypeTag: "🔊 고품질 AI 온조왕 음성 (젊은 국왕 톤)",
        greetingAudio: "assets/audio/onjo_greeting.mp3",
        greeting: "반갑다! 나는 한강 강변 아름다운 땅에 백제를 세운 온조왕이란다. 백성들과 풍요로운 나라를 만들어갔지!",
        quickQuestions: ["백제는 처음에 어디에 세워졌나요?", "십제에서 백제로 이름이 바뀐 이유는 무엇인가요?", "형 비류와의 터전 이야기도 궁금해요!", "백제 문화는 어떤 아름다움이 있나요?"],
        knowledge: [
            { key: "처음", audio: "assets/audio/onjo_k1.mp3", text: "한강 유역의 풍요롭고 넓은 들판에 위례성을 짓고 터전을 잡았단다!" },
            { key: "백제", audio: "assets/audio/onjo_k2.mp3", text: "백성은 백 자를 써서 처음엔 십제였다가 많은 백성들이 따르자 백제로 이름을 바꾸었단다!" },
            { key: "비류", audio: "assets/audio/onjo_k3.mp3", text: "형 비류는 미추홀로 가고 나는 한산에 터를 잡아 농사짓기 좋은 따뜻한 나라를 일구었단다!" },
            { key: "문화", audio: "assets/audio/onjo_k4.mp3", text: "백제의 문화는 세련되고 검소하면서도 화려한 검이불루 화이불치의 아름다움을 자랑했단다!" }
        ],
        badge: { id: "badge_onjo", name: "백제 터전 건국자 🏞️", desc: "온조왕의 따뜻한 포용력 전수받음", icon: "🏞️" }
    },

    gwanggaeto: {
        id: "gwanggaeto",
        name: "광개토대왕",
        era: "🐎 고구려 (391년)",
        role: "고구려 제19대 태왕",
        year: "391년",
        warpMessage: "만주 벌판 달리는 정복의 현장! 391년 고구려로 슝~!",
        quote: "넓은 국토를 개척하여 고구려의 기상을 세계에 떨치다!",
        avatar: "assets/images/gwanggaeto.jpg",
        voiceTypeTag: "🔊 고품질 AI 광개토대왕 음성 (웅장한 정복왕 톤)",
        greetingAudio: "assets/audio/gwanggaeto_greeting.mp3",
        greeting: "나는 고구려의 19대 왕 광개토대왕이다! 광활한 만주 벌판을 누비며 영토를 크게 넓혔지! 나와 함께 신나는 고구려 모험을 떠나볼까!",
        quickQuestions: ["얼마나 넓은 땅을 개척하셨나요?", "광개토대왕릉비는 왜 만드셨나요?", "개마무사는 어떤 무적 기마부대인가요?", "영락이라는 연호는 무슨 뜻인가요?"],
        knowledge: [
            { key: "땅", audio: "assets/audio/gwanggaeto_k1.mp3", text: "나는 남쪽과 북쪽으로 영토를 크게 넓혀 고구려를 동아시아 최고의 강대국으로 만들었단다!" },
            { key: "비", audio: "assets/audio/gwanggaeto_k2.mp3", text: "아들 장수왕이 나를 기억하며 높이 6미터가 넘는 커다란 광개토대왕릉비를 세워 내 업적을 기록했단다!" },
            { key: "개마", audio: "assets/audio/gwanggaeto_k3.mp3", text: "고구려 개마무사는 말과 군사 모두 튼튼한 철갑 옷을 입어 어떠한 적도 무찌르는 최고의 기마부대였단다!" },
            { key: "영락", audio: "assets/audio/gwanggaeto_k4.mp3", text: "영락이라는 독자적인 연호를 사용해 고구려가 천하의 중심이라는 자부심을 선포했단다!" }
        ],
        badge: { id: "badge_gwanggaeto", name: "만주 정복의 기상 🐎", desc: "광개토대왕의 용맹한 고구려 기상 전수받음", icon: "🐎" }
    },

    jangsu: {
        id: "jangsu",
        name: "장수왕",
        era: "🏰 고구려 (413년)",
        role: "고구려 제20대 국왕",
        year: "413년",
        warpMessage: "평양 수도 남진 정책! 413년 고구려로 슝~!",
        quote: "98세 장수의 지혜로 고구려의 전성기를 완성하다!",
        avatar: "assets/images/jangsu.jpg",
        voiceTypeTag: "🔊 고품질 AI 장수왕 음성 (현명한 장수 국왕 톤)",
        greetingAudio: "assets/audio/jangsu_greeting.mp3",
        greeting: "나는 광개토대왕의 아들이자 98세까지 장수한 장수왕이란다! 평양으로 수도를 옮기고 고구려의 전성기를 이어갔지!",
        quickQuestions: ["평양으로 수도를 왜 옮기셨나요?", "98세까지 장수하신 비결이 무엇인가요?", "광개토대왕릉비는 어떻게 세우셨나요?", "남진 정책으로 어디까지 진출하셨나요?"],
        knowledge: [
            { key: "평양", audio: "assets/audio/jangsu_k1.mp3", text: "평양으로 수도를 옮겨 남쪽으로 진출하는 남진 정책을 추진했단다!" },
            { key: "장수", audio: "assets/audio/jangsu_k2.mp3", text: "규칙적인 식습관과 호탕한 마음가짐으로 98세까지 건강하게 나라를 이끌었단다!" },
            { key: "대왕비", audio: "assets/audio/jangsu_k3.mp3", text: "아버지의 정복 업적을 기리기 위해 만주에 커다란 광개토대왕릉비를 정성껏 세웠단다!" },
            { key: "남진", audio: "assets/audio/jangsu_k4.mp3", text: "남쪽으로 한강 유역까지 진출하여 충주 고구려비를 세우고 영토를 크게 넓혔단다!" }
        ],
        badge: { id: "badge_jangsu", name: "고구려 전성기 🏰", desc: "장수왕의 장수와 전략 지혜 전수받음", icon: "🏰" }
    },

    isabu: {
        id: "isabu",
        name: "이사부 장군",
        era: "🌊 신라 (512년)",
        role: "우산국/독도 복속 장군",
        year: "512년",
        warpMessage: "동해 바다 우산국! 512년 신라로 슝~!",
        quote: "나무 사자로 독도와 우산국을 우리 땅으로 만들다!",
        avatar: "assets/images/isabu.jpg",
        voiceTypeTag: "🔊 고품질 AI 이사부 장군 음성 (용맹한 명장 톤)",
        greetingAudio: "assets/audio/isabu_greeting.mp3",
        greeting: "나는 신라의 지증왕 때 우산국과 독도를 신라의 영토로 만든 이사부 장군이란다!",
        quickQuestions: ["나무 사자로 우산국을 어떻게 복속하셨나요?", "독도는 언제부터 우리 땅이 되었나요?", "신라 지증왕 때 어떤 활약을 하셨나요?", "대가야를 정벌할 때 어떤 지략을 펼치셨나요?"],
        knowledge: [
            { key: "나무사자", audio: "assets/audio/isabu_k1.mp3", text: "나무로 사자를 만들어 우산국 사람들에게 겁을 주고 지혜롭게 복속시켰단다!" },
            { key: "독도", audio: "assets/audio/isabu_k2.mp3", text: "지증왕 13년 512년에 우산국을 신라 영토로 편입하여 독도가 우리 땅이 된 기틀을 마련했단다!" },
            { key: "지증왕", audio: "assets/audio/isabu_k3.mp3", text: "지증왕과 법흥왕을 모시며 신라의 국경을 넓히고 국사 책 편찬을 건의했단다!" },
            { key: "대가야", audio: "assets/audio/isabu_k4.mp3", text: "대가야 정벌 당시 어린 화랑 사다함과 함께 훌륭한 작전으로 승리를 거두었단다!" }
        ],
        badge: { id: "badge_isabu", name: "독도 수호 대장군 🌊", desc: "이사부 장군의 용맹과 기지 전수받음", icon: "🌊" }
    },

    muwang: {
        id: "muwang",
        name: "백제 무왕",
        era: "🎶 백제 (600년)",
        role: "백제 제30대 국왕",
        year: "600년",
        warpMessage: "서동요 노래 흐르는 600년 백제로 슝~!",
        quote: "서동요의 로맨스와 미륵사의 웅장함을 세우다!",
        avatar: "assets/images/muwang.jpg",
        voiceTypeTag: "🔊 고품질 AI 백제 무왕 음성 (로맨틱 국왕 톤)",
        greetingAudio: "assets/audio/muwang_greeting.mp3",
        greeting: "마를 파던 서동에서 백제의 무왕이 된 서동이란다! 신라 선화공주와의 아름다운 서동요 이야기 들어볼래?",
        quickQuestions: ["서동요 노래 이야기를 들려주세요!", "선화공주와 어떻게 인연을 맺으셨나요?", "익산 미륵사는 왜 크게 지으셨나요?", "백제의 국력을 어떻게 일으키셨나요?"],
        knowledge: [
            { key: "서동요", audio: "assets/audio/muwang_k1.mp3", text: "아이들에게 서동요 노래를 부르게 하여 선화공주와 인연을 맺고 익산 미륵사를 세웠단다!" },
            { key: "선화공주", audio: "assets/audio/muwang_k2.mp3", text: "마를 팔던 아이 서동이 신라 최고 미인 선화공주와 운명적인 사랑을 나눈 노래란다!" },
            { key: "미륵사", audio: "assets/audio/muwang_k3.mp3", text: "동양 최대 규모의 석탑인 미륵사지 석탑을 세워 백제의 평화와 번영을 기원했단다!" },
            { key: "국력", audio: "assets/audio/muwang_k4.mp3", text: "익산으로 수도를 옮기려 성을 쌓고 국력을 크게 일으켜 강한 백제를 만들었단다!" }
        ],
        badge: { id: "badge_muwang", name: "서동요 사랑 🎶", desc: "무왕의 로맨스와 지혜 전수받음", icon: "🎶" }
    },

    eulji: {
        id: "eulji",
        name: "을지문덕 장군",
        era: "⚔️ 고구려 (612년)",
        role: "살수대첩 명장",
        year: "612년",
        warpMessage: "살수 강물 터지는 대승! 612년 고구려로 슝~!",
        quote: "살수의 지혜로 수나라 30만 대군을 무찌르다!",
        avatar: "assets/images/eulji.jpg",
        voiceTypeTag: "🔊 고품질 AI 을지문덕 음성 (지혜로운 명장 톤)",
        greetingAudio: "assets/audio/eulji_greeting.mp3",
        greeting: "나는 살수에서 수나라 30만 대군을 물 물리친 고구려의 을지문덕 장군이다!",
        quickQuestions: ["살수대첩은 어떻게 대승을 거두셨나요?", "수나라 적장에게 보낸 시는 무슨 내용인가요?", "고구려의 승리 비결은 무엇이었나요?", "30만 대군을 어떻게 살수로 유인하셨나요?"],
        knowledge: [
            { key: "살수대첩", audio: "assets/audio/eulji_k1.mp3", text: "살수 강물을 둑으로 막았다가 한꺼번에 터뜨려 수나라 대군을 크게 무찌른 살수대첩을 거두었단다!" },
            { key: "적장시", audio: "assets/audio/eulji_k2.mp3", text: "'신통한 기책은 하늘의 이치를 다했고 족함을 알고 그만두기를 바라노라'는 싯귀를 보내 적장의 기를 꺾었단다!" },
            { key: "승리비결", audio: "assets/audio/eulji_k3.mp3", text: "적의 거짓 후퇴에 속지 않고 지형과 강물을 철저히 조사한 유비무환의 지략 덕분이었단다!" },
            { key: "유인", audio: "assets/audio/eulji_k4.mp3", text: "수나라 군대를 평양성 부근까지 유인하여 지치게 만든 뒤 살수에서 궤멸시켰단다!" }
        ],
        badge: { id: "badge_eulji", name: "살수대첩 명장 ⚔️", desc: "을지문덕의 천재적 지략 전수받음", icon: "⚔️" }
    },

    seondeok: {
        id: "seondeok",
        name: "선덕여왕",
        era: "🌟 신라 (634년)",
        role: "신라 제27대 국왕",
        year: "634년",
        warpMessage: "첨성대 별빛 아래! 634년 신라 서라벌로 슝~!",
        quote: "밤하늘의 별을 보며 신라의 미래를 설계한 아름다운 선덕여왕",
        avatar: "assets/images/seondeok.jpg",
        voiceTypeTag: "🔊 고품질 AI 선덕여왕 음성 (상냥한 여왕 톤)",
        greetingAudio: "assets/audio/seondeok_greeting.mp3",
        greeting: "안녕, 신나는 탐험가 친구! 반갑다, 나는 신라의 27대 선덕여왕이란다. 하늘의 별을 관찰하는 첨성대를 세우고 백성을 사랑했지. 나에게 재미있는 이야기를 들어볼래?",
        quickQuestions: ["첨성대는 왜 동그란 돌로 지어졌나요?", "훌륭한 리더가 되는 지혜는 무엇인가요?", "향기 없는 모란꽃 그림 이야기가 사실인가요?", "황룡사 9층 목탑은 왜 세우셨나요?"],
        knowledge: [
            { key: "첨성대", audio: "assets/audio/seondeok_k1.mp3", text: "동양 최고의 천문대 첨성대는 365개 안팎의 돌을 쌓아 일 년을 상징하고, 밤하늘의 별을 보며 농사짓는 시기를 알아낸 지혜로운 건축물이란다." },
            { key: "리더", audio: "assets/audio/seondeok_k2.mp3", text: "진정한 리더는 남을 누르는 게 아니라 타인의 말에 귀 기울이고 훌륭한 친구들을 믿어주는 마음에서 시작된단다." },
            { key: "모란꽃", audio: "assets/audio/seondeok_k3.mp3", text: "당나라에서 온 모란꽃 그림에 나비가 없는 것을 보고 향기가 없음을 알아챘지! 관찰력이 얼마나 중요한지 알 수 있단다." },
            { key: "목탑", audio: "assets/audio/seondeok_k4.mp3", text: "어려운 전쟁 속에서도 백성들의 마음을 하나로 모으기 위해 평화를 기원하며 높고 웅장한 목탑을 세웠단다." }
        ],
        badge: { id: "badge_seondeok", name: "첨성대 별빛 보물 🌟", desc: "선덕여왕의 아름다운 관찰 지혜 전수받음", icon: "🌟" }
    },

    kimyusin: {
        id: "kimyusin",
        name: "김유신 장군",
        era: "⚔️ 신라 (660년)",
        role: "삼국통일 대장군",
        year: "660년",
        warpMessage: "황산벌 전장 속으로! 660년 신라로 슝~!",
        quote: "화랑의 기상으로 삼국통일의 위업을 이루다!",
        avatar: "assets/images/kimyusin.jpg",
        voiceTypeTag: "🔊 고품질 AI 김유신 장군 음성 (내장 MP3)",
        greetingAudio: "assets/audio/kimyusin_greeting.mp3",
        greeting: "나는 삼국통일의 일등공신 신라의 김유신 장군이다! 화랑의 기상과 불굴의 의지로 나라를 하나로 모았지!",
        quickQuestions: ["삼국통일은 어떻게 이루셨나요?", "말의 목을 벤 결단 전설은 진짜인가요?", "승리의 가장 큰 비결은 무엇인가요?", "어린이들에게 전할 용기의 지혜는?"],
        knowledge: [
            { key: "삼국통일", audio: "assets/audio/kimyusin_k1.mp3", text: "화랑의 정신으로 신라 수많은 전투를 이끌고 삼국통일의 기틀을 완성했단다!" },
            { key: "결단전설", audio: "assets/audio/kimyusin_k2.mp3", text: "어릴 적 술집으로 향하던 사랑하는 말의 목을 벤 슬픈 결단처럼 오직 나라를 위해 마음을 다잡았단다!" },
            { key: "승리비결", audio: "assets/audio/kimyusin_k3.mp3", text: "솔선수범하는 리더십과 어떠한 역경에도 꺾이지 않는 당당한 용기 덕분이었단다!" },
            { key: "용기지혜", audio: "assets/audio/kimyusin_k4.mp3", text: "신라, 고구려, 백제가 하나가 되었듯 서로 화합하고 협력하는 마음이 가장 소중하단다!" }
        ],
        badge: {"id": "badge_kimyusin", "name": "삼국통일 대장군 ⚔️", "desc": "김유신 장군의 불굴 용기 전수받음", "icon": "⚔️"}
    },

    gyebaek: {
        id: "gyebaek",
        name: "계백 장군",
        era: "🛡️ 백제 (660년)",
        role: "황산벌 5천 결사대 장군",
        year: "660년",
        warpMessage: "황산벌 마지막 결전! 660년 백제로 슝~!",
        quote: "백제의 마지막 자존심을 지킨 결사 항전!",
        avatar: "assets/images/gyebaek.jpg",
        voiceTypeTag: "🔊 고품질 AI 계백 장군 음성 (내장 MP3)",
        greetingAudio: "assets/audio/gyebaek_greeting.mp3",
        greeting: "나는 황산벌 전투에서 백제의 마지막 자존심을 지킨 계백 장군이다!",
        quickQuestions: ["황산벌 전투는 어떤 싸움이었나요?", "5천 결사대의 기개는 무엇이었나요?", "충신의 숭고한 뜻은 무엇인가요?", "후세 어린이들에게 전할 말씀은?"],
        knowledge: [
            { key: "황산벌", audio: "assets/audio/gyebaek_k1.mp3", text: "5천 결사대로 신라 5만 대군에 맞서 네 번이나 승리를 거둔 장렬한 전투였단다!" },
            { key: "결사대", audio: "assets/audio/gyebaek_k2.mp3", text: "나라의 운명이 기울었을 때 목숨을 바쳐 당당하게 맞선 백제의 기상이었단다!" },
            { key: "충신", audio: "assets/audio/gyebaek_k3.mp3", text: "자신의 이익보다 나라와 백성을 먼저 생각하는 뜨거운 애국심이었지!" },
            { key: "숭고한뜻", audio: "assets/audio/gyebaek_k4.mp3", text: "끝까지 포기하지 않고 최선을 다하는 숭고한 용기를 기억해주렴!" }
        ],
        badge: {"id": "badge_gyebaek", "name": "황산벌 결사대 🛡️", "desc": "계백 장군의 장렬한 기개 전수받음", "icon": "🛡️"}
    },

    gwanchang: {
        id: "gwanchang",
        name: "관창",
        era: "🌟 신라 (660년)",
        role: "신라 화랑 수호자",
        year: "660년",
        warpMessage: "화랑의 용맹한 기상! 660년 황산벌로 슝~!",
        quote: "어린 나이에도 굴하지 않은 신라 화랑의 당당함!",
        avatar: "assets/images/gwanchang.jpg",
        voiceTypeTag: "🔊 고품질 AI 관창 음성 (내장 MP3)",
        greetingAudio: "assets/audio/gwanchang_greeting.mp3",
        greeting: "나는 신라의 어린 화랑 관창이다! 나이는 어렸지만 용맹한 기상으로 나라를 지켰지!",
        quickQuestions: ["화랑은 어떤 청소년 조직이었나요?", "황산벌 전투에서 어떻게 활약하셨나요?", "어린 나이에 용기를 낸 비결은?", "화랑의 세속오계는 무슨 뜻인가요?"],
        knowledge: [
            { key: "화랑조직", audio: "assets/audio/gwanchang_k1.mp3", text: "몸과 마음을 다듬고 학문과 무술을 익혀 나라의 보배가 된 신라의 청소년 조직이란다!" },
            { key: "황산벌활약", audio: "assets/audio/gwanchang_k2.mp3", text: "홀로 적진으로 용감하게 돌진하여 신라 군대의 사기를 크게 높였단다!" },
            { key: "용기비결", audio: "assets/audio/gwanchang_k3.mp3", text: "나라와 백성을 사랑하는 마음에 나이는 아무런 문제가 되지 않았단다!" },
            { key: "세속오계", audio: "assets/audio/gwanchang_k4.mp3", text: "사군이충, 사친이효 등 정의롭고 바른 삶을 살아가기 위한 화랑의 5가지 약속이란다!" }
        ],
        badge: {"id": "badge_gwanchang", "name": "화랑의 수호자 🌟", "desc": "관창의 순수한 용기 전수받음", "icon": "🌟"}
    },

    wonhyo: {
        id: "wonhyo",
        name: "원효대사",
        era: "🏮 신라 (668년)",
        role: "해골물 깨달음 성찰가",
        year: "668년",
        warpMessage: "해골물의 일체유심조 깨달음! 668년 신라로 슝~!",
        quote: "모든 것은 오직 마음먹기에 달렸느니라!",
        avatar: "assets/images/wonhyo.jpg",
        voiceTypeTag: "🔊 고품질 AI 원효대사 음성 (내장 MP3)",
        greetingAudio: "assets/audio/wonhyo_greeting.mp3",
        greeting: "반갑다! 나는 해골물 깨달음으로 모든 것은 마음먹기에 달렸음을 전한 원효대사란다!",
        quickQuestions: ["해골물 깨달음은 무슨 이야기인가요?", "화쟁사상이란 무슨 뜻인가요?", "무애가는 어떤 노래인가요?", "마음 다스리는 법을 알려주세요!"],
        knowledge: [
            { key: "해골물", audio: "assets/audio/wonhyo_k1.mp3", text: "어두운 밤 달게 마신 물이 아침에 보니 해골에 고인 물이었음을 알고 일체유심조의 진리를 깨달았단다!" },
            { key: "화쟁사상", audio: "assets/audio/wonhyo_k2.mp3", text: "다름을 인정하고 서로의 다툼을 하나로 조화시키는 따뜻한 화합의 지혜란다!" },
            { key: "무애가", audio: "assets/audio/wonhyo_k3.mp3", text: "걸림 없는 자유로운 마음으로 백성들에게 춤추고 노래하며 부처님의 가르침을 전했단다!" },
            { key: "마음지혜", audio: "assets/audio/wonhyo_k4.mp3", text: "세상의 모든 것은 오직 자신의 마음가짐에 달려있다는 것을 잊지 마렴!" }
        ],
        badge: {"id": "badge_wonhyo", "name": "해골물 깨달음 🏮", "desc": "원효대사의 일체유심조 지혜 전수받음", "icon": "🏮"}
    },

    uisang: {
        id: "uisang",
        name: "의상대사",
        era: "🏛️ 신라 (676년)",
        role: "부석사 화엄종 국사",
        year: "676년",
        warpMessage: "부석사 뜬돌 전설 속으로! 676년 신라로 슝~!",
        quote: "하나 속에 전체가 있고 전체 속에 하나가 있느니라!",
        avatar: "assets/images/uisang.jpg",
        voiceTypeTag: "🔊 고품질 AI 의상대사 음성 (내장 MP3)",
        greetingAudio: "assets/audio/uisang_greeting.mp3",
        greeting: "나는 영주 부석사를 세우고 화엄사상을 널리 전한 신라의 의상대사란다!",
        quickQuestions: ["부석사 뜬돌 전설은 무엇인가요?", "화엄일승법계도는 어떤 가르침인가요?", "원효대사와는 어떤 인연이었나요?", "어린이들에게 전할 조화의 마음은?"],
        knowledge: [
            { key: "뜬돌전설", audio: "assets/audio/uisang_k1.mp3", text: "선묘 낭자의 용이 부석사를 지키기 위해 큰 바위를 공중에 띄웠다는 신비로운 이야기란다!" },
            { key: "법계도", audio: "assets/audio/uisang_k2.mp3", text: "하나가 곧 전체요 전체가 곧 하나라는 우주의 조화롭고 아름다운 이치를 글로 표현했단다!" },
            { key: "원효인연", audio: "assets/audio/uisang_k3.mp3", text: "당나라 유학길을 함께 떠났던 소중한 벗이자 서로 깊이 존중하던 도반이었단다!" },
            { key: "조화마음", audio: "assets/audio/uisang_k4.mp3", text: "나와 너 우리 모두가 서로 연결되어 있음을 알고 서로를 아껴주렴!" }
        ],
        badge: {"id": "badge_uisang", "name": "부석사 화엄 국사 🏛️", "desc": "의상대사의 하나되는 조화 전수받음", "icon": "🏛️"}
    },

    seolchong: {
        id: "seolchong",
        name: "설총",
        era: "📜 신라 (690년)",
        role: "이두 문자 정리 학자",
        year: "690년",
        warpMessage: "화왕계 조언의 지혜! 690년 서라벌로 슝~!",
        quote: "달콤한 아첨보다 쓴소리 정론에 귀 기울이라!",
        avatar: "assets/images/seolchong.jpg",
        voiceTypeTag: "🔊 고품질 AI 설총 음성 (내장 MP3)",
        greetingAudio: "assets/audio/seolchong_greeting.mp3",
        greeting: "나는 이두 문자를 정리하고 화왕계를 써서 왕을 조언한 신라의 학자 설총이란다!",
        quickQuestions: ["이두 문자는 어떤 문자인가요?", "화왕계는 무슨 이야기인가요?", "아버지 원효대사는 어떤 분이셨나요?", "공부하는 어린이들에게 줄 지혜는?"],
        knowledge: [
            { key: "이두문자", audio: "assets/audio/seolchong_k1.mp3", text: "한자의 음과 뜻을 빌려 우리말을 쉽게 적을 수 있도록 정립한 문자인지라 백성들이 크게 기뻐했단다!" },
            { key: "화왕계", audio: "assets/audio/seolchong_k2.mp3", text: "꽃들의 왕에게 달콤한 아첨보다 쓴소리 조언을 들으라는 지혜로운 우화 이야기를 써서 올렸단다!" },
            { key: "원효대사", audio: "assets/audio/seolchong_k3.mp3", text: "아버지 원효대사의 백성을 사랑하는 깊은 뜻을 이어받아 학문에 정진했단다!" },
            { key: "학문지혜", audio: "assets/audio/seolchong_k4.mp3", text: "달콤한 유혹보다 바른 길을 알려주는 진실한 조언에 귀를 기울이렴!" }
        ],
        badge: {"id": "badge_seolchong", "name": "이두 문자 보물 📜", "desc": "설총의 정직한 조언 지혜 전수받음", "icon": "📜"}
    },

    daejoyeong: {
        id: "daejoyeong",
        name: "발해 대조영",
        era: "🐎 발해 (698년)",
        role: "발해 건국 태조 고왕",
        year: "698년",
        warpMessage: "동방의 해 뜨는 나라! 698년 동모산으로 슝~!",
        quote: "고구려의 기상을 이어받아 해동성국 발해를 세우다!",
        avatar: "assets/images/daejoyeong.jpg",
        voiceTypeTag: "🔊 고품질 AI 발해 대조영 음성 (내장 MP3)",
        greetingAudio: "assets/audio/daejoyeong_greeting.mp3",
        greeting: "나는 당나라 천문령에서 당군을 대파하고 발해를 건국한 고왕 대조영이다!",
        quickQuestions: ["발해는 어떻게 건국하셨나요?", "천문령 전투의 대승 비결은?", "해동성국이란 무슨 뜻인가요?", "고구려 계승 의식은 무엇인가요?"],
        knowledge: [
            { key: "발해건국", audio: "assets/audio/daejoyeong_k1.mp3", text: "고구려 유민들과 말갈 부락을 아울러 동모산 아래 대제국 발해를 개창했단다!" },
            { key: "천문령전투", audio: "assets/audio/daejoyeong_k2.mp3", text: "험준한 천문령 계곡으로 적을 유인하여 당나라 대군을 크게 궤멸시켰단다!" },
            { key: "해동성국", audio: "assets/audio/daejoyeong_k3.mp3", text: "동쪽의 가장 번성하고 문화가 높이 발달한 위대한 성스러운 나라라는 뜻이란다!" },
            { key: "고구려계승", audio: "assets/audio/daejoyeong_k4.mp3", text: "고구려의 위대한 옛 땅과 기상을 잊지 않고 당당히 계승한 우리 민족의 뿌리란다!" }
        ],
        badge: {"id": "badge_daejoyeong", "name": "해동성국 발해 🐎", "desc": "대조영의 웅장한 재건 기상 전수받음", "icon": "🐎"}
    },

    hyecho: {
        id: "hyecho",
        name: "혜초",
        era: "🐪 신라 (727년)",
        role: "왕오천축국전 세계 탐험가",
        year: "727년",
        warpMessage: "실크로드 만리길 탐험! 727년 천축국으로 슝~!",
        quote: "발걸음 닿는 곳마다 세계를 담아 기행문을 남기다!",
        avatar: "assets/images/hyecho.jpg",
        voiceTypeTag: "🔊 고품질 AI 혜초 음성 (내장 MP3)",
        greetingAudio: "assets/audio/hyecho_greeting.mp3",
        greeting: "나는 인도와 중앙아시아를 탐험하고 왕오천축국전을 남긴 신라의 스님 혜초란다!",
        quickQuestions: ["왕오천축국전은 어떤 책인가요?", "인도 탐험길은 얼마나 멀고 힘들었나요?", "신라를 그리워하며 쓴 시는?", "세계로 나아갈 탐험가 정신이란?"],
        knowledge: [
            { key: "왕오천축국전", audio: "assets/audio/hyecho_k1.mp3", text: "인도 5개 국과 중앙아시아 수많은 나라의 풍속과 기후를 상세히 담은 세계적 기행문이란다!" },
            { key: "인도탐험", audio: "assets/audio/hyecho_k2.mp3", text: "거친 사막과 높은 험준한 산맥을 지나며 목숨을 건 웅장한 만릿길을 걸었단다!" },
            { key: "고향그림", audio: "assets/audio/hyecho_k3.mp3", text: "달빛 아래 고향 서라벌을 그리워하며 외로운 여행길에서 아름다운 시를 읊었단다!" },
            { key: "탐험정신", audio: "assets/audio/hyecho_k4.mp3", text: "두려움 없이 새로운 세상을 향해 나아가는 열린 마음과 원대한 꿈을 가지렴!" }
        ],
        badge: {"id": "badge_hyecho", "name": "세계 탐험 보물 🐪", "desc": "혜초의 용감한 실크로드 기상 전수받음", "icon": "🐪"}
    },

    jangbogo: {
        id: "jangbogo",
        name: "장보고 장군",
        era: "🌊 신라 (828년)",
        role: "청해진 해상왕",
        year: "828년",
        warpMessage: "청해진 거친 바다 기상! 828년 완도로 슝~!",
        quote: "동아시아 바다를 지배한 위대한 해상왕 장보고!",
        avatar: "assets/images/jangbogo.jpg",
        voiceTypeTag: "🔊 고품질 AI 장보고 장군 음성 (내장 MP3)",
        greetingAudio: "assets/audio/jangbogo_greeting.mp3",
        greeting: "나는 완도 청해진을 세우고 동아시아 바다의 해적을 무찌른 해상왕 장보고 장군이다!",
        quickQuestions: ["청해진은 왜 세우셨나요?", "해적들을 어떻게 소탕하셨나요?", "당나라와 일본을 잇는 무역이란?", "바다를 호령하던 리더십이란?"],
        knowledge: [
            { key: "청해진", audio: "assets/audio/jangbogo_k1.mp3", text: "해적들에게 잡혀가는 백성들을 구하고 동아시아 바다 무역의 중심지로 삼기 위해 세웠단다!" },
            { key: "해적소탕", audio: "assets/audio/jangbogo_k2.mp3", text: "강력한 수군 무적 해군을 이끌고 완도 바다의 모든 해적을 소탕하여 평화를 가져왔단다!" },
            { key: "바다무역", audio: "assets/audio/jangbogo_k3.mp3", text: "신라, 당나라, 일본을 잇는 거대한 해상 무역망을 만들어 동아시아 최고 보물들을 교류했단다!" },
            { key: "바다리더십", audio: "assets/audio/jangbogo_k4.mp3", text: "거친 파도에 굴하지 않고 넓은 세계를 바다처럼 품는 크나큰 비전을 품으렴!" }
        ],
        badge: {"id": "badge_jangbogo", "name": "청해진 해상왕 🌊", "desc": "장보고 장군의 웅장한 바다 비전 전수받음", "icon": "🌊"}
    },

    wanggeon: {
        id: "wanggeon",
        name: "태조 왕건",
        era: "👑 고려 (918년)",
        role: "고려 건국 국왕",
        year: "918년",
        warpMessage: "후삼국 통합의 위업! 918년 송악 고려로 슝~!",
        quote: "포용과 화합으로 민족의 통합 고려를 완성하다!",
        avatar: "assets/images/wanggeon.jpg",
        voiceTypeTag: "🔊 고품질 AI 태조 왕건 음성 (내장 MP3)",
        greetingAudio: "assets/audio/wanggeon_greeting.mp3",
        greeting: "나는 포용의 리더십으로 후삼국을 통일하고 고려를 세운 태조 왕건이다!",
        quickQuestions: ["후삼국 통일은 어떻게 달성하셨나요?", "훈요10조는 무슨 가르침인가요?", "포용의 정치는 무엇인가요?", "고려 나라 이름의 의미는?"],
        knowledge: [
            { key: "후삼국통일", audio: "assets/audio/wanggeon_k1.mp3", text: "신라와 후백제 백성들을 전쟁이 아닌 따뜻한 포용으로 보듬어 민족 통일을 다졌단다!" },
            { key: "훈요10조", audio: "assets/audio/wanggeon_k2.mp3", text: "후대 왕들이 나라를 평화롭고 지혜롭게 지키도록 남긴 10가지 바른 유훈 가르침이란다!" },
            { key: "포용정치", audio: "assets/audio/wanggeon_k3.mp3", text: "적이었던 후백제 신검과 신라 경순왕도 기껍게 성심껏 대접한 넒은 배려심이었단다!" },
            { key: "고려이름", audio: "assets/audio/wanggeon_k4.mp3", text: "고구려의 위대한 기상을 이어받아 세운 높고 아름다운 이름이 바로 고려란다!" }
        ],
        badge: {"id": "badge_wanggeon", "name": "고려 통합 국왕 👑", "desc": "태조 왕건의 포용 화합 지혜 전수받음", "icon": "👑"}
    },

    seohee: {
        id: "seohee",
        name: "서희 장군",
        era: "🗣️ 고려 (993년)",
        role: "강동 6주 담판 외교관",
        year: "993년",
        warpMessage: "소손녕과의 피 한 방울 없는 담판! 993년 고려로 슝~!",
        quote: "말 한마디의 지혜로 거란 80만 대군을 물리치다!",
        avatar: "assets/images/seohee.jpg",
        voiceTypeTag: "🔊 고품질 AI 서희 장군 음성 (내장 MP3)",
        greetingAudio: "assets/audio/seohee_greeting.mp3",
        greeting: "나는 거란의 소손녕과 담판하여 피 한 방울 없이 강동 6주를 되찾은 고려의 서희다!",
        quickQuestions: ["강동 6주 담판은 어떻게 성공하셨나요?", "거란 80만 대군을 지혜로 이긴 비결은?", "외교관으로서 가장 소중한 가치는?", "어린이들에게 전할 소통의 힘!"],
        knowledge: [
            { key: "강동6주", audio: "assets/audio/seohee_k1.mp3", text: "거란 장수 소손녕과 기개 높게 대등히 담판하여 압록강 입구 강동 6주를 고려 영토로 확보했단다!" },
            { key: "담판비결", audio: "assets/audio/seohee_k2.mp3", text: "적의 정세를 파악하고 명분과 이익을 정확히 짚어 피 흘리지 않고 승리한 기적이었단다!" },
            { key: "외교가치", audio: "assets/audio/seohee_k3.mp3", text: "무력 싸움보다 상대의 마음을 읽고 설득하는 당당한 논리와 지혜의 힘이 위대하단다!" },
            { key: "소통의힘", audio: "assets/audio/seohee_k4.mp3", text: "당당하면서도 상대를 배려하며 말하는 지혜로운 소통 능력을 키워보렴!" }
        ],
        badge: {"id": "badge_seohee", "name": "강동6주 외교 보물 🗣️", "desc": "서희의 천재적 담판 지혜 전수받음", "icon": "🗣️"}
    },

    kanggamchan: {
        id: "kanggamchan",
        name: "강감찬 장군",
        era: "🌊 고려 (1019년)",
        role: "귀주대첩 명장",
        year: "1019년",
        warpMessage: "귀주 벌판의 웅장한 대승! 1019년 고려로 슝~!",
        quote: "귀주대첩의 지략으로 거란 10만 대군을 크게 무찌르다!",
        avatar: "assets/images/kanggamchan.jpg",
        voiceTypeTag: "🔊 고품질 AI 강감찬 장군 음성 (웅장한 명장 톤)",
        greetingAudio: "assets/audio/kanggamchan_greeting.mp3",
        greeting: "나는 귀주에서 거란의 10만 대군을 물리친 고려의 강감찬 장군이란다! 나를 찾아와주어 반갑구나!",
        quickQuestions: ["귀주대첩은 어떻게 대승을 거두셨나요?", "거란 군대를 어떻게 퇴치하셨나요?", "낙성대 전설은 무엇인가요?", "고려의 평화를 어떻게 지켜내셨나요?"],
        knowledge: [
            { key: "귀주대첩", audio: "assets/audio/kanggamchan_k1.mp3", text: "귀주에서 퇴각하는 거란군을 배후에서 맹공격하여 고려 역사상 가장 찬란한 귀주대첩을 거두었단다!" },
            { key: "거란", audio: "assets/audio/kanggamchan_k2.mp3", text: "거란 10만 대군 중 살아 돌아간 자가 겨우 수천 명에 불과할 정도로 대승을 거두어 국경을 수호했단다!" },
            { key: "낙성대", audio: "assets/audio/kanggamchan_k3.mp3", text: "내가 태어날 때 하늘에서 큰 별이 떨어졌다고 하여 내 태생지를 낙성대라고 부른단다!" },
            { key: "평화", audio: "assets/audio/kanggamchan_k4.mp3", text: "귀주대첩의 승리로 거란은 다시는 고려를 침범하지 못했고 100년 넘는 평화가 찾아왔단다!" }
        ],
        badge: { id: "badge_kanggamchan", name: "귀주대첩 수호자 🌊", desc: "강감찬 장군의 결단력과 기지 전수받음", icon: "🌊" }
    },

    myocheong: {
        id: "myocheong",
        name: "묘청",
        era: "🏯 고려 (1135년)",
        role: "서경 천도 승려",
        year: "1135년",
        warpMessage: "서경 묘청의 자주 기상! 1135년 서경 평양으로 슝~!",
        quote: "자주적 고려의 자주 기개로 천도를 기원하다!",
        avatar: "assets/images/myocheong.jpg",
        voiceTypeTag: "🔊 고품질 AI 묘청 음성 (내장 MP3)",
        greetingAudio: "assets/audio/myocheong_greeting.mp3",
        greeting: "나는 서경 천도를 주장하며 고려의 자주적인 기상을 일으키고자 했던 승려 묘청이란다!",
        quickQuestions: ["서경 천도는 왜 운동을 하셨나요?", "자주적 민족 기상이란 무엇인가요?", "묘청의 난에 담긴 백성들의 뜻은?", "어린이들에게 전할 당당한 자긍심!"],
        knowledge: [
            { key: "서경천도", audio: "assets/audio/myocheong_k1.mp3", text: "사대주의를 물리치고 웅장한 서경 평양으로 수도를 옮겨 강대국 고려를 만들려 했단다!" },
            { key: "자주기상", audio: "assets/audio/myocheong_k2.mp3", text: "외세의 눈치를 보지 않고 우리의 자주 독립과 존엄을 고수하려 했던 고결한 기개란다!" },
            { key: "백성들의뜻", audio: "assets/audio/myocheong_k3.mp3", text: "국난을 극복하고 새로운 시대 희망을 꿈꾸던 백성들의 간절한 소망이 담겼었단다!" },
            { key: "당당자긍심", audio: "assets/audio/myocheong_k4.mp3", text: "우리 민족 문화와 역사에 대한 당당한 자부심을 가슴에 깊이 새기려무나!" }
        ],
        badge: {"id": "badge_myocheong", "name": "서경 자주 보물 🏯", "desc": "묘청의 당당한 자주 기개 전수받음", "icon": "🏯"}
    },

    choimuseon: {
        id: "choimuseon",
        name: "최무선",
        era: "💥 고려 (1380년)",
        role: "화약 발명 진포대첩 장군",
        year: "1380년",
        warpMessage: "진포 해전 화포의 굉음! 1380년 금강으로 슝~!",
        quote: "화약 제조법을 끝내 개발하여 왜구를 격퇴하다!",
        avatar: "assets/images/choimuseon.jpg",
        voiceTypeTag: "🔊 고품질 AI 최무선 음성 (내장 MP3)",
        greetingAudio: "assets/audio/choimuseon_greeting.mp3",
        greeting: "나는 고려 말 화약과 화포를 개발하여 진포대첩에서 왜구 500척을 대파한 최무선이란다!",
        quickQuestions: ["화약 제조 기술은 어떻게 밝혀내셨나요?", "진포대첩 승리는 어떤 의미가 있나요?", "화통도감은 어떤 과학 기관인가요?", "끈기 있게 도전하는 창의력이란?"],
        knowledge: [
            { key: "화약제조", audio: "assets/audio/choimuseon_k1.mp3", text: "중국 상인 염의를 수소문하여 끈질긴 시도 끝에 유황과 흙으로 화약 국산화에 성공했단다!" },
            { key: "진포대첩", audio: "assets/audio/choimuseon_k2.mp3", text: "세계 최초로 배에 화포를 장착하여 쳐들어온 왜구 함선 500척을 싹 태워 수장시켰단다!" },
            { key: "화통도감", audio: "assets/audio/choimuseon_k3.mp3", text: "화약과 무기를 전문적으로 연구하고 제작하던 고려 과학 기술의 총집합소였단다!" },
            { key: "끈기창의력", audio: "assets/audio/choimuseon_k4.mp3", text: "남들이 불가능하다고 생각할 때 끈기 있게 도전하여 결실을 맺는 마음을 가지렴!" }
        ],
        badge: {"id": "badge_choimuseon", "name": "진포대첩 화포 보물 💥", "desc": "최무선의 끈질긴 과학 개발 정신 전수받음", "icon": "💥"}
    },

    jeongmongju: {
        id: "jeongmongju",
        name: "정몽주",
        era: "📜 고려 (1392년)",
        role: "단심가 충절 재상",
        year: "1392년",
        warpMessage: "선죽교 단심가 서사! 1392년 개경으로 슝~!",
        quote: "이 몸이 죽고 죽어 일백 번 고쳐 죽어도 변함없으리!",
        avatar: "assets/images/jeongmongju.jpg",
        voiceTypeTag: "🔊 고품질 AI 정몽주 음성 (내장 MP3)",
        greetingAudio: "assets/audio/jeongmongju_greeting.mp3",
        greeting: "나는 단심가를 읊으며 고려에 대한 변함없는 충절을 지킨 포은 정몽주란다!",
        quickQuestions: ["단심가는 어떤 시인가요?", "선죽교 이야기에 대해 말해주세요!", "고려를 향한 충절은 무엇인가요?", "어린이들에게 전하고 싶은 신념은?"],
        knowledge: [
            { key: "단심가", audio: "assets/audio/jeongmongju_k1.mp3", text: "이 몸이 죽고 죽어 일백 번 고쳐 죽어로 시작하는 내 굳은 마음을 담은 시란다!" },
            { key: "선죽교", audio: "assets/audio/jeongmongju_k2.mp3", text: "선죽교 다리 위에서 마지막 순간까지 의로운 신념을 굽히지 않았단다!" },
            { key: "충절", audio: "assets/audio/jeongmongju_k3.mp3", text: "자신의 유불리에 따라 마음을 바꾸지 않고 곧은 지조를 지킨 고결한 마음이란다!" },
            { key: "신념가치", audio: "assets/audio/jeongmongju_k4.mp3", text: "옳다고 믿는 가치를 위해 끝까지 정직하게 나아가는 마음이 소중하단다!" }
        ],
        badge: {"id": "badge_jeongmongju", "name": "선죽교 단심가 📜", "desc": "정몽주의 변함없는 충절 전수받음", "icon": "📜"}
    },

    yiseonggye: {
        id: "yiseonggye",
        name: "태조 이성계",
        era: "👑 조선 (1392년)",
        role: "조선 건국 태조 국왕",
        year: "1392년",
        warpMessage: "위화도 회군과 조선 개국! 1392년 한양으로 슝~!",
        quote: "백성이 평안한 새 시대 나라 조선을 세우다!",
        avatar: "assets/images/yiseonggye.jpg",
        voiceTypeTag: "🔊 고품질 AI 태조 이성계 음성 (내장 MP3)",
        greetingAudio: "assets/audio/yiseonggye_greeting.mp3",
        greeting: "나는 위화도 회군으로 새 시대를 열고 조선을 건국한 태조 이성계란다!",
        quickQuestions: ["위화도 회군은 왜 결정하셨나요?", "조선은 어떻게 건국되었나요?", "신궁이라 불리던 신묘한 활솜씨는?", "새 시대를 연 리더십은?"],
        knowledge: [
            { key: "위화도회군", audio: "assets/audio/yiseonggye_k1.mp3", text: "무리한 요동 정벌 대신 백성의 생명과 평화를 지키기 위해 결단을 내렸단다!" },
            { key: "조선건국", audio: "assets/audio/yiseonggye_k2.mp3", text: "정도전 등 지혜로운 신하들과 함께 백성이 주인이 되는 유교 국가 조선을 세웠지!" },
            { key: "신궁활솜씨", audio: "assets/audio/yiseonggye_k3.mp3", text: "백 발 백 중 적들을 무찌르던 활솜씨로 나라의 위험을 물리쳤단다!" },
            { key: "새시대지혜", audio: "assets/audio/yiseonggye_k4.mp3", text: "백성의 삶을 평안하게 가꾸는 것이 위대한 지도자의 첫 번째 임무란다!" }
        ],
        badge: {"id": "badge_yiseonggye", "name": "조선 개국 태조 👑", "desc": "이성계의 결단력과 새 시대 비전 전수받음", "icon": "👑"}
    },

    jeongdojeon: {
        id: "jeongdojeon",
        name: "정도전",
        era: "🏛️ 조선 (1395년)",
        role: "한양 수도 설계자",
        year: "1395년",
        warpMessage: "경복궁과 한양 설계! 1395년 한양 도성으로 슝~!",
        quote: "나라의 근본은 오직 백성(민본)에게 있느니라!",
        avatar: "assets/images/jeongdojeon.jpg",
        voiceTypeTag: "🔊 고품질 AI 정도전 음성 (내장 MP3)",
        greetingAudio: "assets/audio/jeongdojeon_greeting.mp3",
        greeting: "나는 한양 도성을 설계하고 조선의 기틀을 마련한 삼봉 정도전이란다!",
        quickQuestions: ["한양 도성은 어떻게 설계하셨나요?", "경복궁의 이름은 무슨 뜻인가요?", "민본 사상이란 무엇인가요?", "꿈을 이루는 지혜는?"],
        knowledge: [
            { key: "한양도성", audio: "assets/audio/jeongdojeon_k1.mp3", text: "유교의 인의예지를 바탕으로 경복궁과 흥인지문, 숭례문 등 한양의 모든 기틀을 계획했단다!" },
            { key: "경복궁", audio: "assets/audio/jeongdojeon_k2.mp3", text: "경복이란 새로운 왕조가 큰 복을 누리기를 기원한다는 뜻의 아름다운 궁궐 이름이란다!" },
            { key: "민본사상", audio: "assets/audio/jeongdojeon_k3.mp3", text: "임금은 백성을 위해 존재하며 나라의 근본은 오직 백성이라는 철학이란다!" },
            { key: "꿈의지혜", audio: "assets/audio/jeongdojeon_k4.mp3", text: "철저한 계획과 원대한 비전으로 세상에 이로운 일을 이루어가렴!" }
        ],
        badge: {"id": "badge_jeongdojeon", "name": "한양 설계 보물 🏛️", "desc": "정도전의 민본 철학 지혜 전수받음", "icon": "🏛️"}
    },

    jangyeongsil: {
        id: "jangyeongsil",
        name: "장영실",
        era: "⏰ 조선 (1434년)",
        role: "조선 천재 과학자",
        year: "1434년",
        warpMessage: "자격루와 앙부일구 해시계! 1434년 집현전으로 슝~!",
        quote: "신분을 극복하고 세상을 이롭게 한 최고의 과학 도구!",
        avatar: "assets/images/jangyeongsil.jpg",
        voiceTypeTag: "🔊 고품질 AI 장영실 음성 (내장 MP3)",
        greetingAudio: "assets/audio/jangyeongsil_greeting.mp3",
        greeting: "나는 세종대왕님을 도와 자격루와 앙부일구를 만든 조선 최고 과학자 장영실이란다!",
        quickQuestions: ["자격루는 어떤 과학 도구인가요?", "앙부일구 해시계는 어떻게 시각을 알려주나요?", "세종대왕님과의 인연은?", "과학자를 꿈꾸는 어린이들에게!"],
        knowledge: [
            { key: "자격루", audio: "assets/audio/jangyeongsil_k1.mp3", text: "물 흐름을 이용해 정해진 시각마다 종과 북을 쳐서 시간을 자동으로 알려주는 자동 물시계란다!" },
            { key: "앙부일구", audio: "assets/audio/jangyeongsil_k2.mp3", text: "오목한 솥 모양의 해시계로 그림자의 위치를 보고 누구나 쉽게 시각과 계절을 알 수 있었단다!" },
            { key: "세종대왕님", audio: "assets/audio/jangyeongsil_k3.mp3", text: "신분과 관습을 넘어 내 재능을 믿고 아껴주신 세종대왕님의 사랑 덕분에 마음껏 발명했단다!" },
            { key: "과학자의꿈", audio: "assets/audio/jangyeongsil_k4.mp3", text: "호기심을 가지고 세상을 유심히 관찰하면 누구나 위대한 발명가가 될 수 있단다!" }
        ],
        badge: {"id": "badge_jangyeongsil", "name": "자격루 과학 보물 ⏰", "desc": "장영실의 신묘한 발명 창의력 전수받음", "icon": "⏰"}
    },

    // 세종대왕
    sejong: {
        id: "sejong",
        name: "세종대왕",
        era: "👑 조선 (1443년)",
        role: "조선 제4대 국왕",
        year: "1443년",
        warpMessage: "훈민정음 창제의 순간! 1443년 집현전으로 슝~!",
        quote: "백성을 사랑하는 마음으로 한글 28자를 만든 지혜로운 세종대왕님",
        avatar: "assets/images/sejong.jpg",
        voiceTypeTag: "🔊 고품질 AI 세종대왕 음성 (자애로운 임금 톤)",
        greetingAudio: "assets/audio/sejong_greeting.mp3",
        greeting: "안녕, 반갑구나 어린 탐험가 친구! 나는 조선의 4대 왕 세종이란다. 글을 몰라 어려움을 겪는 백성들을 위해 쉽고 아름다운 한글을 만들었지. 무엇이든 편하게 물어보렴!",
        quickQuestions: ["한글(훈민정음)은 왜 만드셨나요?", "측우기와 해시계는 누가 만드셨나요?", "고기를 정말 좋아하셨나요?", "집현전 학자들과는 무슨 일을 하셨나요?"],
        knowledge: [
            { key: "한글", audio: "assets/audio/sejong_k_hangeul.mp3", text: "어려운 한자 때문에 자기 뜻을 펴지 못하는 백성들이 불쌍해서 28자의 쉬운 글자 훈민정음을 만들었단다." },
            { key: "측우기", audio: "assets/audio/sejong_k_jang.mp3", text: "장영실 같은 뛰어난 인재를 등용해 비의 양을 재는 측우기와 시간을 알려주는 해시계, 물시계를 제작했단다." },
            { key: "고기", audio: "assets/audio/sejong_k_food.mp3", text: "하하, 고기 음식을 참 좋아하고 책 읽는 것을 무엇보다 사랑해서 밤늦도록 공부하곤 했단다!" },
            { key: "집현전", audio: "assets/audio/sejong_k_study.mp3", text: "집현전에서 신하들과 나라의 발전과 백성들의 더 나은 삶을 위해 끊임없이 연구하고 토론했단다." }
        ],
        badge: { id: "badge_sejong", name: "훈민정음 한글 보물 👑", desc: "세종대왕의 백성 사랑 마음 전수받음", icon: "👑" }
    },

    sinsukju: {
        id: "sinsukju",
        name: "신숙주",
        era: "📖 조선 (1443년)",
        role: "집현전 한글 학자",
        year: "1443년",
        warpMessage: "훈민정음 창제와 해동제국기! 1443년 집현전으로 슝~!",
        quote: "수많은 학문과 외교 지혜로 조선을 드높이다!",
        avatar: "assets/images/sinsukju.jpg",
        voiceTypeTag: "🔊 고품질 AI 신숙주 음성 (내장 MP3)",
        greetingAudio: "assets/audio/sinsukju_greeting.mp3",
        greeting: "나는 집현전 학자로서 훈민정음 창제와 일본해협 외교에 큰 공을 세운 신숙주란다!",
        quickQuestions: ["집현전에서 어떤 연구를 하셨나요?", "해동제국기는 어떤 책인가요?", "훈민정음 음운 연구는?", "언어 공부의 비결은?"],
        knowledge: [
            { key: "집현전", audio: "assets/audio/sinsukju_k1.mp3", text: "세종대왕님을 모시고 밤을 새워 훈민정음의 소리값과 우리글 책을 연구했단다!" },
            { key: "해동제국기", audio: "assets/audio/sinsukju_k2.mp3", text: "일본과 류큐 국의 지리, 풍속, 외교를 상세히 기록하여 평화로운 외교의 길잡이가 되었단다!" },
            { key: "훈민정음", audio: "assets/audio/sinsukju_k3.mp3", text: "수많은 외국어를 깊이 이해하여 한글 소리체계를 한층 과학적으로 정립했단다!" },
            { key: "언어비결", audio: "assets/audio/sinsukju_k4.mp3", text: "다른 나라의 문화와 언어를 정성껏 이해하려는 열린 마음이 가장 중요하단다!" }
        ],
        badge: {"id": "badge_sinsukju", "name": "집현전 한글 보물 📖", "desc": "신숙주의 뛰어난 언어 학문 지혜 전수받음", "icon": "📖"}
    },

    seongsammun: {
        id: "seongsammun",
        name: "성삼문",
        era: "🌲 조선 (1456년)",
        role: "사육신 곧은 선비",
        year: "1456년",
        warpMessage: "수양산 불꽃 같은 의기! 1456년 조선으로 슝~!",
        quote: "백설이 만건곤할 제 독야청청 하리라!",
        avatar: "assets/images/seongsammun.jpg",
        voiceTypeTag: "🔊 고품질 AI 성삼문 음성 (내장 MP3)",
        greetingAudio: "assets/audio/seongsammun_greeting.mp3",
        greeting: "나는 훈민정음 창제에 참여하고 사육신으로서 절개를 지킨 성삼문이란다!",
        quickQuestions: ["훈민정음 창제 시 어떤 일을 하셨나요?", "사육신의 곧은 절개는 무엇인가요?", "상주산 단심 시는 무슨 내용인가요?", "어린이들에게 전할 정직함의 가치!"],
        knowledge: [
            { key: "훈민정음", audio: "assets/audio/seongsammun_k1.mp3", text: "요동을 13번이나 오가며 당나라 음운 학자를 만나 한글 창제의 소리 바탕을 다졌단다!" },
            { key: "사육신절개", audio: "assets/audio/seongsammun_k2.mp3", text: "어떠한 모진 핍박 앞에서도 올바른 신의와 지조를 목숨 바쳐 지켜낸 의기란다!" },
            { key: "상주산시", audio: "assets/audio/seongsammun_k3.mp3", text: "수양산 바라보며 이제를 한하노라며 굳은 지조를 지킨 아름다운 싯귀란다!" },
            { key: "정직함가치", audio: "assets/audio/seongsammun_k4.mp3", text: "불의에 타협하지 않고 불꽃처럼 정직한 마음으로 살아가는 기상을 품으렴!" }
        ],
        badge: {"id": "badge_seongsammun", "name": "사육신 푸른 청송 🌲", "desc": "성삼문의 꺾이지 않는 절개 전수받음", "icon": "🌲"}
    },

    saimdang: {
        id: "saimdang",
        name: "신사임당",
        era: "🎨 조선 (1540년)",
        role: "초충도 예술가",
        year: "1540년",
        warpMessage: "초충도 화폭 섬세한 붓 터치! 1540년 강릉 오죽헌으로 슝~!",
        quote: "자연을 따뜻한 눈으로 관찰하고 자식에게 사랑을 실천하다!",
        avatar: "assets/images/saimdang.jpg",
        voiceTypeTag: "🔊 고품질 AI 신사임당 음성 (내장 MP3)",
        greetingAudio: "assets/audio/saimdang_greeting.mp3",
        greeting: "안녕, 나는 초충도 그림을 그리고 현명하게 아이들을 키워낸 어머님이자 예술가 신사임당이란다!",
        quickQuestions: ["초충도 그림에는 어떤 비밀이 있나요?", "율곡 이이 선생님은 어떻게 교육하셨나요?", "조선시대 여성 예술가로서의 삶은?", "어린이들에게 주고 싶은 예술적 영감!"],
        knowledge: [
            { key: "초충도", audio: "assets/audio/saimdang_k1.mp3", text: "풀과 벌레, 수박과 닭을 얼마나 섬세하게 그렸는지 닭이 진짜 벌레인 줄 알고 조았다는 일화가 있단다!" },
            { key: "교육지혜", audio: "assets/audio/saimdang_k2.mp3", text: "말보다 실천으로 자식들에게 모범을 보이고 사랑과 정성으로 스스로 깨닫게 이끌었단다!" },
            { key: "여성예술가", audio: "assets/audio/saimdang_k3.mp3", text: "시와 글씨, 그림과 바느질 등 주어진 환경 속에서도 자신의 재능을 끝없이 가꾸어 나갔단다!" },
            { key: "예술영감", audio: "assets/audio/saimdang_k4.mp3", text: "주변의 작은 자연과 생명도 따뜻한 눈으로 유심히 관찰하는 아름다운 마음을 가져보렴!" }
        ],
        badge: {"id": "badge_saimdang", "name": "초충도 예술 보물 🎨", "desc": "신사임당의 아름다운 예술 감성 전수받음", "icon": "🎨"}
    },

    yitoegye: {
        id: "yitoegye",
        name: "이퇴계 (이황)",
        era: "📗 조선 (1570년)",
        role: "도산서원 성리학자",
        year: "1570년",
        warpMessage: "도산서원의 은은한 글소리! 1570년 안동으로 슝~!",
        quote: "경(敬)의 마음으로 남을 대하고 스스로를 돌아보라!",
        avatar: "assets/images/yitoegye.jpg",
        voiceTypeTag: "🔊 고품질 AI 이퇴계 (이황) 음성 (내장 MP3)",
        greetingAudio: "assets/audio/yitoegye_greeting.mp3",
        greeting: "나는 도산서원을 세우고 성학십도를 써서 도덕과 예절을 가르친 퇴계 이황이란다!",
        quickQuestions: ["도산서원은 어떤 곳인가요?", "성학십도는 무슨 책인가요?", "겸손과 배려의 덕목이란?", "어린이들에게 줄 인성 지혜는?"],
        knowledge: [
            { key: "도산서원", audio: "assets/audio/yitoegye_k1.mp3", text: "자연 속에서 제자들과 함께 학문을 탐구하고 마음을 닦던 평화로운 배움터란다!" },
            { key: "성학십도", audio: "assets/audio/yitoegye_k2.mp3", text: "어린 국왕 선조를 위해 성현의 핵심 가르침을 10개의 그림 병풍으로 쉽게 요약해 바친 책이란다!" },
            { key: "겸손과배려", audio: "assets/audio/yitoegye_k3.mp3", text: "나이가 어리거나 신분이 낮은 이에게도 언제나 극진한 예의와 존중을 갖추었단다!" },
            { key: "인성지혜", audio: "assets/audio/yitoegye_k4.mp3", text: "남을 먼저 배려하고 매사 자신을 겸손하게 돌아보는 마음이 가장 고귀하단다!" }
        ],
        badge: {"id": "badge_yitoegye", "name": "도산서원 성리학 📗", "desc": "퇴계 이황의 경의 예의 배려 전수받음", "icon": "📗"}
    },

    yiyulgok: {
        id: "yiyulgok",
        name: "이율곡 (이이)",
        era: "🎓 조선 (1580년)",
        role: "10만 양병설 학자",
        year: "1580년",
        warpMessage: "십만양병의 유비무환! 1580년 도산으로 슝~!",
        quote: "미리 대비하는 유비무환의 지혜로 국난을 막으라!",
        avatar: "assets/images/yiyulgok.jpg",
        voiceTypeTag: "🔊 고품질 AI 이율곡 (이이) 음성 (내장 MP3)",
        greetingAudio: "assets/audio/yiyulgok_greeting.mp3",
        greeting: "나는 10만 양병설을 주장하고 십만양병의 지혜를 남긴 조선의 대학자 율곡 이이라네!",
        quickQuestions: ["10만 양병설은 왜 주장하셨나요?", "어머니 신사임당과의 추억은?", "격몽요결은 어떤 책인가요?", "지혜로운 공부법을 알려주세요!"],
        knowledge: [
            { key: "10만양병", audio: "assets/audio/yiyulgok_k1.mp3", text: "다가올 큰 전쟁의 위협을 미리 내다보고 유비무환의 대비책으로 10만 군사를 키우자고 유언했단다!" },
            { key: "신사임당", audio: "assets/audio/yiyulgok_k2.mp3", text: "훌륭한 예술가이자 자애로우신 어머니 밑에서 글과 붓을 배우며 따뜻한 인성을 다졌단다!" },
            { key: "격몽요결", audio: "assets/audio/yiyulgok_k3.mp3", text: "어린이와 청소년들이 스스로 마음을 잡고 공부에 임할 수 있도록 쓴 최고의 입문서란다!" },
            { key: "공부법", audio: "assets/audio/yiyulgok_k4.mp3", text: "마음을 확고히 정하고 날마다 꾸준히 조금씩 나아가는 습관이 으뜸이란다!" }
        ],
        badge: {"id": "badge_yiyulgok", "name": "십만양병 보물 🎓", "desc": "율곡 이이의 유비무환 학문 지혜 전수받음", "icon": "🎓"}
    },

    // 이순신 장군
    yisunsin: {
        id: "yisunsin",
        name: "이순신 장군",
        era: "⚔️ 조선 (1592년)",
        role: "삼도수군통제사",
        year: "1592년",
        warpMessage: "한산도 바다 위! 1592년 한산도 대첩으로 슝~!",
        quote: "나의 죽음을 적에게 알리지 말라! 필사즉생 필생즉사!",
        avatar: "assets/images/yisunsin.jpg",
        voiceTypeTag: "🔊 고품질 AI 이순신 장군 음성 (웅장한 명장 톤)",
        greetingAudio: "assets/audio/yisunsin_greeting.mp3",
        greeting: "필승! 나는 조선 바다를 지키는 삼도수군통제사 이순신이다! 어떠한 어려움이 와도 포기하지 않는 뜨거운 용기를 가지거라! 바다와 거북선에 대해 얼마든지 물어보아라!",
        quickQuestions: ["거북선은 어떻게 생겼나요?", "무서울 때는 어떻게 극복하셨나요?", "왜 용기가 필요한가요?", "신에게는 아직 12척의 배가 있습니다!"],
        knowledge: [
            { key: "거북선", audio: "assets/audio/yisunsin_k_turtle.mp3", text: "거북선은 용 머리에서 붉은 연기와 포를 쏘고, 등에 철갑 가시를 박아 적이 오르지 못하게 만든 강력한 돌격선이란다!" },
            { key: "무서", audio: "assets/audio/yisunsin_k_scared.mp3", text: "무서움은 용감한 장군이라도 느낀단다. 하지만 나를 믿는 백성과 군사들을 지켜야 한다는 책임감이 두려움을 이겨내게 해주었단다!" },
            { key: "용기", audio: "assets/audio/yisunsin_k_courage.mp3", text: "용기란 두려움이 없는 게 아니란다. 두려워도 옳다고 믿는 길로 첫 발을 내딛는 힘이 진정한 용기다!" },
            { key: "12척", audio: "assets/audio/yisunsin_k_ships.mp3", text: "모두가 포기하려 할 때에도 12척의 배가 남아있음을 감사히 여기며 희망을 잃지 않고 바다를 지켜냈느니라!" }
        ],
        badge: { id: "badge_yisunsin", name: "충무공 거북선 보물 ⚔️", desc: "이순신 장군의 필사즉생 용기 전수받음", icon: "⚔️" }
    },

    gwakjaewoo: {
        id: "gwakjaewoo",
        name: "곽재우 장군",
        era: "🔴 조선 (1592년)",
        role: "홍의장군 의병장",
        year: "1592년",
        warpMessage: "붉은 비단 옷의 의병 기상! 1592년 낙동강으로 슝~!",
        quote: "의병의 붉은 깃발로 고향과 나라를 수호하다!",
        avatar: "assets/images/gwakjaewoo.jpg",
        voiceTypeTag: "🔊 고품질 AI 곽재우 장군 음성 (내장 MP3)",
        greetingAudio: "assets/audio/gwakjaewoo_greeting.mp3",
        greeting: "나는 임진왜란 당시 붉은 옷을 입고 가장 먼저 의병을 일으킨 곽재우 홍의장군이다!",
        quickQuestions: ["왜 붉은 옷(홍의)을 입고 싸우셨나요?", "의병은 어떻게 모으셨나요?", "게릴라 신출귀몰 전술이란?", "나라 사랑하는 의병 정신이란?"],
        knowledge: [
            { key: "홍의장군", audio: "assets/audio/gwakjaewoo_k1.mp3", text: "붉은 비단옷을 입고 전선의 가장 앞장에 서서 적들에게 공포를 주고 우리 의병의 사기를 높였단다!" },
            { key: "의병모집", audio: "assets/audio/gwakjaewoo_k2.mp3", text: "나라가 위험에 처하자 내 재산을 털어 백성들과 함께 고향을 지키고자 분연히 일어섰단다!" },
            { key: "신출귀몰전술", audio: "assets/audio/gwakjaewoo_k3.mp3", text: "낙동강 강변 지형을 훤히 파악하여 위장 전술과 기습으로 왜군을 대파했단다!" },
            { key: "의병정신", audio: "assets/audio/gwakjaewoo_k4.mp3", text: "누가 시키지 않아도 내 고향과 나라를 스스로 수호하려는 당당한 주인의식이었단다!" }
        ],
        badge: {"id": "badge_gwakjaewoo", "name": "홍의장군 의병 보물 🔴", "desc": "곽재우의 의로운 주인의식 전수받음", "icon": "🔴"}
    },

    heojun: {
        id: "heojun",
        name: "허준",
        era: "🏥 조선 (1610년)",
        role: "동의보감 집필 어의",
        year: "1610년",
        warpMessage: "동의보감 인술의 마음! 1610년 내의원으로 슝~!",
        quote: "아픈 백성을 불쌍히 여기는 인술(仁術)의 의사!",
        avatar: "assets/images/heojun.jpg",
        voiceTypeTag: "🔊 고품질 AI 허준 음성 (내장 MP3)",
        greetingAudio: "assets/audio/heojun_greeting.mp3",
        greeting: "나는 백성들의 병을 치료하기 위해 동의보감을 집필한 조선의 의성 허준이란다!",
        quickQuestions: ["동의보감은 왜 만드셨나요?", "어려운 전쟁 중에도 책을 써내셨나요?", "의사로서 가장 중요한 마음가짐은?", "건강하게 자라는 지혜를 알려주세요!"],
        knowledge: [
            { key: "동의보감", audio: "assets/audio/heojun_k1.mp3", text: "가난한 백성들이 주변의 흔한 약재로 쉽게 병을 고칠 수 있도록 25권의 의학 백과사전을 썼단다!" },
            { key: "집념의서", audio: "assets/audio/heojun_k2.mp3", text: "임진왜란의 모진 피난길과 유배지에서도 약초와 의학서적을 품에서 놓지 않고 마침내 완성했단다!" },
            { key: "의사마음", audio: "assets/audio/heojun_k3.mp3", text: "환자의 신분이나 귀천을 따지지 않고 오직 아픈 이를 불쌍히 여기는 인술의 마음이란다!" },
            { key: "건강지혜", audio: "assets/audio/heojun_k4.mp3", text: "규칙적인 식습관과 맑은 공기, 긍정적인 마음으로 몸과 마음의 면역을 기르려무나!" }
        ],
        badge: {"id": "badge_heojun", "name": "동의보감 의성 🏥", "desc": "허준의 아끼고 사랑하는 인술 전수받음", "icon": "🏥"}
    },

    // 정약용
    jeongyagyong: {
        id: "jeongyagyong",
        name: "정약용",
        era: "⚙️ 조선 (1796년)",
        role: "거중기 발명 및 수원화성 설계자",
        year: "1796년",
        warpMessage: "수원화성 건설 현장! 1796년 수원으로 슝~!",
        quote: "거중기로 백성의 수고를 덜고 500권의 지혜를 남기다!",
        avatar: "assets/images/jeongyagyong.jpg",
        voiceTypeTag: "🔊 고품질 AI 정약용 음성 (똑똑한 실학자 톤)",
        greetingAudio: "assets/audio/jeongyagyong_greeting.mp3",
        greeting: "반갑네! 나는 조선의 실학자 정약용이라네. 수원화성을 지을 때 거중기를 발명하여 백성들의 수고를 덜어주었지! 신기한 과학과 학문 이야기를 해줄까?",
        quickQuestions: ["거중기는 어떤 원리로 작동하나요?", "500권의 책은 어떻게 다 쓰셨나요?", "수원화성은 왜 특별한 성인가요?", "목민심서에는 무슨 내용이 담겼나요?"],
        knowledge: [
            { key: "거중기", audio: "assets/audio/jeongyagyong_k_crane.mp3", text: "도르래의 원리를 이용한 거중기를 만들었단다! 무거운 돌을 적은 힘으로 들어 올려 수원화성을 10년이 아닌 2년 반 만에 쌓았지!" },
            { key: "책", audio: "assets/audio/jeongyagyong_k_book.mp3", text: "목민심서와 경세유표 등 500권이 넘는 책을 써서 백성을 아끼고 나라를 바로잡는 지혜를 남겼단다!" },
            { key: "화성", audio: "assets/audio/jeongyagyong_k_hwaseong.mp3", text: "정조 대왕님의 뜻을 받들어 유네스코 세계문화유산인 아름답고 견고한 수원화성을 설계했단다!" },
            { key: "목민심서", audio: "assets/audio/jeongyagyong_k_book.mp3", text: "벼슬아치들이 백성을 아끼고 올바르게 나라를 이끄는 마음가짐을 정리한 귀한 가르침이란다!" }
        ],
        badge: { id: "badge_jeongyagyong", name: "거중기 실학 보물 ⚙️", desc: "정약용의 창의적 실학 지혜 전수받음", icon: "⚙️" }
    },

    kimjeongho: {
        id: "kimjeongho",
        name: "김정호",
        era: "🗺️ 조선 (1861년)",
        role: "대동여지도 지리학자",
        year: "1861년",
        warpMessage: "대동여지도 전국 발자취! 1861년 조선으로 슝~!",
        quote: "국토의 산과 천을 샅샅이 지도로 담아내다!",
        avatar: "assets/images/kimjeongho.jpg",
        voiceTypeTag: "🔊 고품질 AI 김정호 음성 (내장 MP3)",
        greetingAudio: "assets/audio/kimjeongho_greeting.mp3",
        greeting: "나는 우리나라 전국 지도를 정밀하게 그린 대동여지도의 지리학자 김정호란다!",
        quickQuestions: ["대동여지도는 어떤 정밀 지도인가요?", "전국을 직접 발로 걸어다니셨나요?", "목판본 지도로 만든 특별한 이유는?", "꿈을 향해 정진하는 열정이란?"],
        knowledge: [
            { key: "대동여지도", audio: "assets/audio/kimjeongho_k1.mp3", text: "접었다 폈다 할 수 있는 목판본 지도로 산맥과 물길, 도로망이 정밀하게 표시된 기적이었단다!" },
            { key: "발자취", audio: "assets/audio/kimjeongho_k2.mp3", text: "평생 동안 수많은 지리책을 연구하고 정합하여 가장 정확한 국토 지도를 완성했단다!" },
            { key: "목판본이유", audio: "assets/audio/kimjeongho_k3.mp3", text: "필사본 대신 목판으로 새겨 수많은 백성들이 지도를 인쇄해 쉽게 활용하도록 했단다!" },
            { key: "정진열정", audio: "assets/audio/kimjeongho_k4.mp3", text: "자신이 좋아하는 일에 생을 바쳐 열정적으로 몰입하는 사람이 위대함을 만든단다!" }
        ],
        badge: {"id": "badge_kimjeongho", "name": "대동여지도 지리 보물 🗺️", "desc": "김정호의 장인 집념 열정 전수받음", "icon": "🗺️"}
    },

    heungseon: {
        id: "heungseon",
        name: "흥선대원군",
        era: "🗿 조선 (1866년)",
        role: "척화비 서양 배척",
        year: "1866년",
        warpMessage: "경복궁 중건과 척화비! 1866년 궐 안으로 슝~!",
        quote: "자주적 국격을 다지고 서양 외세에 맞서다!",
        avatar: "assets/images/heungseon.jpg",
        voiceTypeTag: "🔊 고품질 AI 흥선대원군 음성 (내장 MP3)",
        greetingAudio: "assets/audio/heungseon_greeting.mp3",
        greeting: "나는 경복궁을 중건하고 척화비를 세워 외세에 맞섰던 흥선대원군이란다!",
        quickQuestions: ["경복궁 중건은 왜 추진하셨나요?", "척화비는 무엇을 위해 세웠나요?", "왕권 강화 정책이란 무엇인가요?", "역사의 변화에서 배우는 교훈은?"],
        knowledge: [
            { key: "경복궁중건", audio: "assets/audio/heungseon_k1.mp3", text: "무너진 왕실의 위엄을 되살리고 자주적인 국격을 다지기 위해 웅장한 궁궐을 다시 세웠단다!" },
            { key: "척화비", audio: "assets/audio/heungseon_k2.mp3", text: "서양 열강의 침략 야욕에 굴복하지 않고 조선의 자주독립을 지키겠다는 강한 의지였단다!" },
            { key: "왕권강화", audio: "assets/audio/heungseon_k3.mp3", text: "세도정치의 폐단을 없애고 서원을 정리하여 나라의 기틀을 바르게 세우려 했단다!" },
            { key: "역사교훈", audio: "assets/audio/heungseon_k4.mp3", text: "격변하는 세계 흐름 속에서 지혜롭게 대비하는 혜안이 얼마나 중요한지 배워야 한단다!" }
        ],
        badge: {"id": "badge_heungseon", "name": "척화비 자주 보물 🗿", "desc": "흥선대원군의 당당한 국격 기상 전수받음", "icon": "🗿"}
    },

    jiseokyeong: {
        id: "jiseokyeong",
        name: "지석영",
        era: "💉 근현대 (1880년)",
        role: "우두법 백신 도입 의학자",
        year: "1880년",
        warpMessage: "우두법 종두 백신의 빛! 1880년 조선으로 슝~!",
        quote: "무서운 마마 전염병으로부터 수많은 아이들의 생명을 구하다!",
        avatar: "assets/images/jiseokyeong.jpg",
        voiceTypeTag: "🔊 고품질 AI 지석영 음성 (내장 MP3)",
        greetingAudio: "assets/audio/jiseokyeong_greeting.mp3",
        greeting: "나는 우두법 종두 백신을 도입해 천연두 전염병으로부터 어린아이들을 구한 지석영이란다!",
        quickQuestions: ["우두법 백신은 어떻게 도입하셨나요?", "천연두 병마로부터 아이들을 구한 이야기는?", "한글 학자로서의 활동은?", "의학 기술과 봉사의 마음이란?"],
        knowledge: [
            { key: "우두법백신", audio: "assets/audio/jiseokyeong_k1.mp3", text: "일본으로 건너가 종두법 기술을 습득하고 가난한 시골 아이들에게 백신을 무료로 접종했단다!" },
            { key: "천연두구제", audio: "assets/audio/jiseokyeong_k2.mp3", text: "무서운 마마 전염병으로 목숨을 잃던 수많은 어린이들의 생명을 고귀하게 지켜냈단다!" },
            { key: "한글학자", audio: "assets/audio/jiseokyeong_k3.mp3", text: "의학뿐만 아니라 국어 연구에도 힘써 한글 자모의 정립과 어학 발전에 이바지했단다!" },
            { key: "봉사마음", audio: "assets/audio/jiseokyeong_k4.mp3", text: "배운 지식과 기술을 이웃과 사회의 아픈 이를 위해 나누는 선한 마음이 으뜸이란다!" }
        ],
        badge: {"id": "badge_jiseokyeong", "name": "우두법 생명 의학자 💉", "desc": "지석영의 생명 사랑 봉사 마음 전수받음", "icon": "💉"}
    },

    anjunggeun: {
        id: "anjunggeun",
        name: "안중근 의사",
        era: "🇰🇷 근현대 (1909년)",
        role: "하얼빈 의거 독립 영웅",
        year: "1909년",
        warpMessage: "하얼빈 역 총성 의거! 1909년 하얼빈으로 슝~!",
        quote: "대한독립 만세! 조국 독립과 동양 평화를 위해!",
        avatar: "assets/images/anjunggeun.jpg",
        voiceTypeTag: "🔊 고품질 AI 안중근 의사 음성 (내장 MP3)",
        greetingAudio: "assets/audio/anjunggeun_greeting.mp3",
        greeting: "나는 하얼빈 역에서 침략의 원흉 이토 히로부미를 단죄한 대한의군 참모중장 안중근 의사다!",
        quickQuestions: ["하얼빈 의거는 어떤 결단이었나요?", "단지회 굳은 맹세는 무엇인가요?", "동양평화론은 어떤 사상인가요?", "동포들과 어린이들에게 남기는 당부!"],
        knowledge: [
            { key: "하얼빈의거", audio: "assets/audio/anjunggeun_k1.mp3", text: "1909년 10월 26일 하얼빈 역에서 대한독립 만세를 외치며 침략 원흉을 단죄했단다!" },
            { key: "단지회맹세", audio: "assets/audio/anjunggeun_k2.mp3", text: "손가락을 자른 피로 태극기 위에 대한독립을 쓰며 조국에 목숨 바칠 것을 맹세했단다!" },
            { key: "동양평화론", audio: "assets/audio/anjunggeun_k3.mp3", text: "서로 침략하지 않고 한중일이 평화롭게 협력하며 동양의 평화를 지키자는 숭고한 사상이었단다!" },
            { key: "동포당부", audio: "assets/audio/anjunggeun_k4.mp3", text: "대한독립의 소리가 청사에 울려 퍼질 때까지 학문에 힘쓰고 당당한 주인이 되거라!" }
        ],
        badge: {"id": "badge_anjunggeun", "name": "하얼빈 참모중장 🇰🇷", "desc": "안중근 의사의 숭고한 결기 전수받음", "icon": "🇰🇷"}
    },

    kimgu: {
        id: "kimgu",
        name: "백범 김구",
        era: "🕊️ 근현대 (1919년)",
        role: "임시정부 주석",
        year: "1919년",
        warpMessage: "임시정부 나의 소원! 1919년 상하이로 슝~!",
        quote: "내 소원은 대한의 완전한 자주독립과 높은 문화의 힘!",
        avatar: "assets/images/kimgu.jpg",
        voiceTypeTag: "🔊 고품질 AI 백범 김구 음성 (내장 MP3)",
        greetingAudio: "assets/audio/kimgu_greeting.mp3",
        greeting: "나는 대한민국 임시정부의 주석으로서 겨레의 독립과 자주 문화국가를 꿈꾼 백범 김구란다!",
        quickQuestions: ["백범일지에는 어떤 소원이 담겼나요?", "대한민국 임시정부는 어떻게 이끄셨나요?", "문화 강국의 꿈이란 무슨 뜻인가요?", "어린이들에게 전하고 싶은 말씀은?"],
        knowledge: [
            { key: "나의소원", audio: "assets/audio/kimgu_k1.mp3", text: "내 소원은 대한 독립이오 둘째 소원도 삼한의 독립이오 셋째 소원도 완전한 자주독립이라 하였단다!" },
            { key: "임시정부", audio: "assets/audio/kimgu_k2.mp3", text: "상하이에서 굳건히 임시정부를 지키며 한인애국단을 조직해 독립운동의 불꽃을 피웠단다!" },
            { key: "문화강국", audio: "assets/audio/kimgu_k3.mp3", text: "오직 한없이 가지고 싶은 것은 높은 문화의 힘이며 문화는 자신을 행복하게 하고 남에게 행복을 준단다!" },
            { key: "겨레사랑", audio: "assets/audio/kimgu_k4.mp3", text: "서로 미워하지 말고 따뜻하게 사랑하며 아름다운 문화 민족으로 우뚝 서길 바란단다!" }
        ],
        badge: {"id": "badge_kimgu", "name": "임시정부 백범 🕊️", "desc": "김구 선생님의 아름다운 문화 소원 전수받음", "icon": "🕊️"}
    },

    yugwansun: {
        id: "yugwansun",
        name: "유관순 열사",
        era: "🇰🇷 근현대 (1919년)",
        role: "3.1 아우내 만세 열사",
        year: "1919년",
        warpMessage: "아우내 장터 태극기 물결! 1919년 천안으로 슝~!",
        quote: "대한독립 만세! 차가운 감옥에서도 불꽃처럼 일어서다!",
        avatar: "assets/images/yugwansun.jpg",
        voiceTypeTag: "🔊 고품질 AI 유관순 열사 음성 (내장 MP3)",
        greetingAudio: "assets/audio/yugwansun_greeting.mp3",
        greeting: "안녕, 나는 1919년 아우내 장터에서 대한독립만세를 외친 열여곱 순국열사 유관순이란다!",
        quickQuestions: ["3.1 아우내 만세운동 이야기!", "서대문형무소에서의 굳은 기상!", "나라 사랑하는 횃불 정신이란?", "어린이 여러분에게 전하고 싶은 용기!"],
        knowledge: [
            { key: "아우내만세", audio: "assets/audio/yugwansun_k1.mp3", text: "1919년 4월 1일 아우내 장터에서 태극기를 나누어주며 민족의 독립 의지를 목놓아 외쳤단다!" },
            { key: "서대문형무소", audio: "assets/audio/yugwansun_k2.mp3", text: "차가운 감옥 속 모진 고문 앞에서도 결코 독립 만세의 소리를 멈추지 않았단다!" },
            { key: "횃불정신", audio: "assets/audio/yugwansun_k3.mp3", text: "매봉산 정상에서 횃불을 올리며 온 겨레의 마음을 하나로 모은 불꽃 같은 열정이였단다!" },
            { key: "용기가치", audio: "assets/audio/yugwansun_k4.mp3", text: "아무리 어둡고 힘들어도 정의와 올바름을 향해 나아가는 용기를 잊지 마렴!" }
        ],
        badge: {"id": "badge_yugwansun", "name": "아우내 3.1 횃불 🇰🇷", "desc": "유관순 열사의 순수한 불꽃 용기 전수받음", "icon": "🇰🇷"}
    },

    hanyongun: {
        id: "hanyongun",
        name: "한용운 (만해)",
        era: "📜 근현대 (1919년)",
        role: "님의 침묵 민족 시인",
        year: "1919년",
        warpMessage: "님의 침묵 굳은 지조! 1919년 심우장으로 슝~!",
        quote: "아아, 님은 갔지만 나는 님을 보내지 아니하였습니다!",
        avatar: "assets/images/hanyongun.jpg",
        voiceTypeTag: "🔊 고품질 AI 한용운 (만해) 음성 (내장 MP3)",
        greetingAudio: "assets/audio/hanyongun_greeting.mp3",
        greeting: "나는 님의 침묵 시를 쓰고 민족대표 33인으로 독립선언서에 서명한 만해 한용운이란다!",
        quickQuestions: ["님의 침묵 시는 어떤 마음으로 쓰셨나요?", "민족대표 33인으로서의 행동은?", "심우장 집은 왜 북향으로 지으셨나요?", "어린이들에게 줄 시적 감성과 정신!"],
        knowledge: [
            { key: "님의침묵", audio: "assets/audio/hanyongun_k1.mp3", text: "님은 갔지만 나는 님을 보내지 아니하였습니다로 잃어버린 조국을 향한 굳은 지조를 노래했단다!" },
            { key: "독립선언서", audio: "assets/audio/hanyongun_k2.mp3", text: "3.1 운동의 선봉에 서서 공약 3장을 추가하고 만세 운동을 이끈 겨레의 스님이었단다!" },
            { key: "심우장", audio: "assets/audio/hanyongun_k3.mp3", text: "조선총독부 건물이 보기 싫어 춥고 어두운 북쪽을 향해 집을 짓고 평생 지조를 지켰단다!" },
            { key: "시적정신", audio: "assets/audio/hanyongun_k4.mp3", text: "어려운 시련 속에서도 희망을 잃지 않는 고결하고 따뜻한 시인의 마음을 품으렴!" }
        ],
        badge: {"id": "badge_hanyongun", "name": "님의 침묵 시인 📜", "desc": "한용운의 꺾이지 않는 고결 시심 전수받음", "icon": "📜"}
    },

    bangjunghwan: {
        id: "bangjunghwan",
        name: "방정환 선생님",
        era: "🎈 근현대 (1923년)",
        role: "어린이날 창시자",
        year: "1923년",
        warpMessage: "어린이날 축제 선물! 1923년 색동회로 슝~!",
        quote: "어린이는 나라와 민족의 가장 빛나는 미래 보석!",
        avatar: "assets/images/bangjunghwan.jpg",
        voiceTypeTag: "🔊 고품질 AI 방정환 선생님 음성 (내장 MP3)",
        greetingAudio: "assets/audio/bangjunghwan_greeting.mp3",
        greeting: "나는 어린이날을 만들고 어린이들을 세상의 보물로 아낀 소파 방정환 선생님이란다!",
        quickQuestions: ["어린이날은 왜 만드셨나요?", "색동회와 잡지 어린이 이야기는?", "어린이라는 단어의 존중 뜻은?", "어린이 친구들에게 전할 사랑!"],
        knowledge: [
            { key: "어린이날", audio: "assets/audio/bangjunghwan_k1.mp3", text: "1923년 5월 1일 어린이들이 당당하게 존중받고 마음껏 꿈꾸며 자라도록 선언했단다!" },
            { key: "잡지어린이", audio: "assets/audio/bangjunghwan_k2.mp3", text: "색동회를 만들어 어린이들에게 흥미진진한 동화와 노래, 소중한 꿈을 선물했단다!" },
            { key: "어린이존중", audio: "assets/audio/bangjunghwan_k3.mp3", text: "아이들을 하찮게 여기던 시대에 어린이라는 존칭을 쓰고 항상 존댓말로 대했단다!" },
            { key: "어린이사랑", audio: "assets/audio/bangjunghwan_k4.mp3", text: "어린이는 대한의 미래이자 가장 빛나는 보석이니 당당하고 행복하게 꿈을 펼치렴!" }
        ],
        badge: {"id": "badge_bangjunghwan", "name": "어린이날 소파 보물 🎈", "desc": "방정환 선생님의 넘치는 어린이 사랑 전수받음", "icon": "🎈"}
    },

    naseokju: {
        id: "naseokju",
        name: "나석주 의사",
        era: "💥 근현대 (1926년)",
        role: "의열단 독립 투사",
        year: "1926년",
        warpMessage: "동양척식주식회사 단죄! 1926년 경성으로 슝~!",
        quote: "의열단의 당당한 기상으로 일제 수탈 기관을 단죄하다!",
        avatar: "assets/images/naseokju.jpg",
        voiceTypeTag: "🔊 고품질 AI 나석주 의사 음성 (내장 MP3)",
        greetingAudio: "assets/audio/naseokju_greeting.mp3",
        greeting: "나는 의열단원으로서 식민지 수탈 기관 식산은행과 동양척식주식회사에 폭탄을 던진 나석주 의사다!",
        quickQuestions: ["동양척식주식회사 의거 이야기!", "의열단 독립 투쟁의 기상은?", "수탈기관을 단죄한 이유는?", "어린이들에게 전할 기개!"],
        knowledge: [
            { key: "동양척식의거", audio: "assets/audio/naseokju_k1.mp3", text: "1926년 12월 백성 수탈의 중심지인 동양척식주식회사에 의기당당하게 들어가 단죄했단다!" },
            { key: "의열단기상", audio: "assets/audio/naseokju_k2.mp3", text: "신채호 선생의 조선혁명선언 정신에 따라 정의로운 의열 투쟁으로 조국 독립을 외쳤단다!" },
            { key: "수탈단죄", audio: "assets/audio/naseokju_k3.mp3", text: "우리 땅과 쌀을 빼앗아 가난하게 만든 침략 기관에 민족의 분노와 결기를 보여주었단다!" },
            { key: "독립기개", audio: "assets/audio/naseokju_k4.mp3", text: "조국의 자유와 정의를 위해 내 모든 것을 바친 투사들의 피땀을 잊지 마렴!" }
        ],
        badge: {"id": "badge_naseokju", "name": "의열단 투사 💥", "desc": "나석주 의사의 당당한 독립 결기 전수받음", "icon": "💥"}
    },

    yunbonggil: {
        id: "yunbonggil",
        name: "윤봉길 의사",
        era: "💣 근현대 (1932년)",
        role: "상하이 훙커우 의거",
        year: "1932년",
        warpMessage: "훙커우 공원의 의기 투척! 1932년 상하이로 슝~!",
        quote: "너희도 조선을 위해 용감한 투사가 되어라!",
        avatar: "assets/images/yunbonggil.jpg",
        voiceTypeTag: "🔊 고품질 AI 윤봉길 의사 음성 (내장 MP3)",
        greetingAudio: "assets/audio/yunbonggil_greeting.mp3",
        greeting: "나는 상하이 훙커우 공원에서 물통 폭탄으로 겨레의 독립 기상을 세계에 알린 윤봉길 의사다!",
        quickQuestions: ["상하이 훙커우 공원 의거 이야기!", "도시락 폭탄과 물통 폭탄의 비밀!", "두 아들에게 남긴 편지의 내용은?", "청년의 매헌 정신이란 무엇인가요?"],
        knowledge: [
            { key: "훙커우의거", audio: "assets/audio/yunbonggil_k1.mp3", text: "1932년 4월 29일 일제 기념식장에서 의거를 성공시켜 전 세계에 대한민국 독립 기상을 드높였단다!" },
            { key: "폭탄비밀", audio: "assets/audio/yunbonggil_k2.mp3", text: "투척용 물통 폭탄으로 의거를 이루고 자결용 도시락 폭탄으로 기개를 지키려 준비했었단다!" },
            { key: "두아들편지", audio: "assets/audio/yunbonggil_k3.mp3", text: "너희도 피가 있고 뼈가 있다면 반드시 조선을 위해 용감한 투사가 되어라 당부했단다!" },
            { key: "매헌정신", audio: "assets/audio/yunbonggil_k4.mp3", text: "농촌 계몽운동과 불꽃 같은 애국 결단처럼 조국을 위해 내 삶을 헌신한 기개란다!" }
        ],
        badge: {"id": "badge_yunbonggil", "name": "매헌 훙커우 의사 💣", "desc": "윤봉길 의사의 불꽃 같은 기개 전수받음", "icon": "💣"}
    },

    yundongju: {
        id: "yundongju",
        name: "윤동주 시인",
        era: "⭐ 근현대 (1941년)",
        role: "하늘과 별 민족시인",
        year: "1941년",
        warpMessage: "서시와 별 헤는 밤 시심! 1941년 연희전문으로 슝~!",
        quote: "죽는 날까지 하늘을 仰어 한 점 부끄럼이 없기를!",
        avatar: "assets/images/yundongju.jpg",
        voiceTypeTag: "🔊 고품질 AI 윤동주 시인 음성 (내장 MP3)",
        greetingAudio: "assets/audio/yundongju_greeting.mp3",
        greeting: "나는 서시와 별 헤는 밤 시로 하늘과 별을 노래하며 조국을 생각한 민족시인 윤동주란다!",
        quickQuestions: ["서시 시에는 어떤 부끄러움이 담겼나요?", "별 헤는 밤 시는 어떻게 쓰였나요?", "어두운 일제강점기 시인의 고뇌란?", "아름다운 순수함을 지키는 길!"],
        knowledge: [
            { key: "서시", audio: "assets/audio/yundongju_k1.mp3", text: "죽는 날까지 하늘을 仰어 한 점 부끄럼이 없기를 간절히 기원하던 맑은 시심이었단다!" },
            { key: "별헤는밤", audio: "assets/audio/yundongju_k2.mp3", text: "밤하늘의 별 하나하나에 어머니와 추억, 잃어버린 고향의 이름을 담아 아련하게 노래했단다!" },
            { key: "시인의고뇌", audio: "assets/audio/yundongju_k3.mp3", text: "펜 하나로 맑은 시를 쓰며 조국의 어두운 현실에 괴로워하던 순수한 청년이었단다!" },
            { key: "순수함지혜", audio: "assets/audio/yundongju_k4.mp3", text: "아무리 험한 세상이라도 마음속의 별빛 같은 맑고 깨끗한 마음을 잃지 않기를 바란단다!" }
        ],
        badge: {"id": "badge_yundongju", "name": "하늘과 별 민족시인 ⭐", "desc": "윤동주의 맑고 순수한 부끄럼 없는 마음 전수받음", "icon": "⭐"}
    },

    yijungseop: {
        id: "yijungseop",
        name: "이중섭 화가",
        era: "🐂 근현대 (1950년)",
        role: "황소 그림 화가",
        year: "1950년",
        warpMessage: "힘찬 황소 붓 터치! 1950년 제주 서귀포로 슝~!",
        quote: "강렬한 황소 그림과 은지화로 민족의 서정을 담다!",
        avatar: "assets/images/yijungseop.jpg",
        voiceTypeTag: "🔊 고품질 AI 이중섭 화가 음성 (내장 MP3)",
        greetingAudio: "assets/audio/yijungseop_greeting.mp3",
        greeting: "나는 힘찬 황소 그림과 은지화로 민족의 서정을 그린 서양화가 이중섭이란다!",
        quickQuestions: ["황소 그림은 어떤 힘을 담았나요?", "담배 은박지에 그린 은지화란?", "가족을 향한 그리움의 편지화는?", "그림을 그리는 열정이란 무엇인가요?"],
        knowledge: [
            { key: "황소그림", audio: "assets/audio/yijungseop_k1.mp3", text: "강렬하고 힘찬 붓 터치로 어떠한 시련에도 굴하지 않는 한국 민족의 강인한 기상을 그렸단다!" },
            { key: "은지화", audio: "assets/audio/yijungseop_k2.mp3", text: "전쟁 중 물감이 없어 담뱃갑 은박지 종이에 뾰족한 송곳으로 아이들과 가족을 조각해 그렸단다!" },
            { key: "편지화", audio: "assets/audio/yijungseop_k3.mp3", text: "떨어져 있는 사랑하는 아내와 두 아들에게 예쁜 그림과 사연을 담은 편지를 연거푸 보냈단다!" },
            { key: "예술열정", audio: "assets/audio/yijungseop_k4.mp3", text: "어려운 환경에서도 가슴속의 뜨거운 예술 열정과 사랑을 잃지 않는 마음이 소중하단다!" }
        ],
        badge: {"id": "badge_yijungseop", "name": "황소 그림 화가 🐂", "desc": "이중섭의 불꽃 같은 예술 열정 전수받음", "icon": "🐂"}
    }
};

// 초상화 이미지 안전 반환 함수 (전체 50인 각자의 assets/images/{id}.jpg 반환)
function getAvatarSrc(fig) {
    let path = "assets/images/dangun.jpg";
    if (!fig) path = "assets/images/dangun.jpg";
    else if (typeof fig === "string" && fig.startsWith("assets/")) path = fig;
    else if (fig.avatar && fig.avatar.startsWith("assets/")) path = fig.avatar;
    else if (fig.id) path = `assets/images/${fig.id}.jpg`;
    return `${path}?v=11000.0`;
}

// === 2. 상태 관리 ===
let currentFigureId = "dangun";
let soundEnabled = true;
let ttsEnabled = true;
let unlockedBadges = JSON.parse(localStorage.getItem("cheerpapa_badges_v14") || "[]");
let currentAudio = null;

// === 3. Web Audio 효과음 ===
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
    playWarp() { return; }
    playClick() { return; }
    playSuccess() {
        if (!soundEnabled) return; this.init();
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
            const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain();
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.1);
            gain.gain.setValueAtTime(0.2, this.ctx.currentTime + idx * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.1 + 0.3);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + idx * 0.1);
            osc.stop(this.ctx.currentTime + idx * 0.1 + 0.3);
        });
    }
}
const sfx = new SoundFX();

function unlockUserAudio() { sfx.init(); }
function startSpeakingAnim() {
    const heroImg = document.getElementById("heroPortrait");
    if (heroImg) heroImg.classList.add("speaking");
}
function stopSpeakingAnim() {
    const heroImg = document.getElementById("heroPortrait");
    if (heroImg) heroImg.classList.remove("speaking");
}
function cancelAllSpeech() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    stopSpeakingAnim();
}

let cachedNaturalFemaleVoice = null;
function getNaturalFemaleVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;
    let selected = voices.find(v => (v.lang.includes('ko') || v.lang.includes('KO')) && /SunHi|JiMin|SeoHyeon|YuJin|Yuna|Sora/i.test(v.name));
    if (!selected) {
        selected = voices.find(v => (v.lang.includes('ko') || v.lang.includes('KO')) && (/Natural|Neural|Online|Google/i.test(v.name)) && !/Heami|InJoon|Kwangha|Male|Desktop|남성/i.test(v.name));
    }
    if (!selected) {
        selected = voices.find(v => (v.lang.includes('ko') || v.lang.includes('KO')) && !/Heami|InJoon|Kwangha|Male|Desktop|남성/i.test(v.name));
    }
    if (!selected) {
        selected = voices.find(v => v.lang.includes('ko') || v.lang.includes('KO'));
    }
    cachedNaturalFemaleVoice = selected || null;
    return cachedNaturalFemaleVoice;
}

if ('speechSynthesis' in window) {
    getNaturalFemaleVoice();
    window.speechSynthesis.onvoiceschanged = () => { getNaturalFemaleVoice(); };
}

function speakWebSpeech(text) {
    if (typeof ttsEnabled !== 'undefined' && !ttsEnabled) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        startSpeakingAnim();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'ko-KR';
        utter.rate = 0.94;
        utter.pitch = 1.15;

        const femaleVoice = cachedNaturalFemaleVoice || getNaturalFemaleVoice();
        if (femaleVoice) {
            utter.voice = femaleVoice;
        }
        utter.onend = () => { stopSpeakingAnim(); };
        utter.onerror = () => { stopSpeakingAnim(); };
        window.speechSynthesis.speak(utter);
    }
}

function playLocalAudio(audioPath, fallbackText) {
    if (!ttsEnabled) return;
    unlockUserAudio();
    cancelAllSpeech();
    if (!audioPath && !fallbackText) return;

    if (audioPath) {
        const cacheBuster = `?v=30000.${Date.now()}`;
        const freshAudioPath = audioPath.includes('?') ? audioPath : `${audioPath}${cacheBuster}`;

        const audio = new Audio(freshAudioPath);
        currentAudio = audio;
        startSpeakingAnim();
        audio.onended = () => { stopSpeakingAnim(); };
        audio.onerror = (e) => { 
            stopSpeakingAnim(); 
            if (fallbackText) speakWebSpeech(fallbackText);
        };
        audio.play().catch(err => { 
            stopSpeakingAnim(); 
            if (fallbackText) speakWebSpeech(fallbackText);
        });
    } else if (fallbackText) {
        speakWebSpeech(fallbackText);
    }
}

// === 4. 캔버스 파티클 효과 ===
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

    const particles = Array.from({ length: 70 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 14 + 6,
        color: ["#ff6699", "#55ff55", "#ffcc00", "#ffb6c1", "#a9def9"][Math.floor(Math.random() * 5)],
        speedY: Math.random() * 1.5 + 0.5
    }));

    function draw() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.y -= p.speedY;
            if (p.y < -20) p.y = height + 20;
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });

        if (document.getElementById("introScreen") && !document.getElementById("introScreen").classList.contains("fade-out")) {
            requestAnimationFrame(draw);
        }
    }
    draw();
}

// === 5. DOM 요소 및 앱 제어 ===
const introScreen = document.getElementById("introScreen");
const mainAppContainer = document.getElementById("mainAppContainer");
const startExplorationBtn = document.getElementById("startExplorationBtn");
const reopenIntroBtn = document.getElementById("reopenIntroBtn");
const figuresGrid = document.getElementById("figuresGrid");
const heroPortrait = document.getElementById("heroPortrait");
const activeName = document.getElementById("activeName");
const chatMessages = document.getElementById("chatMessages");
const quickChips = document.getElementById("quickChips");
const soundToggleBtn = document.getElementById("soundToggleBtn");
const ttsToggleBtn = document.getElementById("ttsToggleBtn");
const badgeBtn = document.getElementById("badgeBtn");
const badgeCount = document.getElementById("badgeCount");
const badgeModal = document.getElementById("badgeModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalBadgeGrid = document.getElementById("modalBadgeGrid");
const timeWarpOverlay = document.getElementById("timeWarpOverlay");
const warpYear = document.getElementById("warpYear");
const warpTarget = document.getElementById("warpTarget");

function initApp() {
    initWarpCanvas();
    renderSidebarFigures();
    updateBadgeCountUI();
    setupEventListeners();
}

function startExploration() {
    unlockUserAudio();
    sfx.playWarp();
    introScreen.classList.add("fade-out");
    setTimeout(() => {
        introScreen.style.display = "none";
        mainAppContainer.classList.remove("hidden-initial");
        selectFigure(currentFigureId, true);
    }, 500);
}

function renderSidebarFigures() {
    figuresGrid.innerHTML = "";
    Object.values(figuresData).forEach(fig => {
        const card = document.createElement("div");
        card.className = `figure-card ${fig.id === currentFigureId ? 'active' : ''}`;
        card.dataset.id = fig.id;

        const avatarSrc = getAvatarSrc(fig);
        card.innerHTML = `
            <img src="${avatarSrc}" alt="${fig.name}" class="mini-thumb">
            <div class="figure-card-info">
                <h3>${fig.name}</h3>
                <p class="figure-role">${fig.role}</p>
                <span class="figure-era-tag">${fig.era}</span>
            </div>
        `;
        card.addEventListener("click", () => {
            unlockUserAudio();
            sfx.playClick();
            if (fig.id !== currentFigureId) {
                triggerTimeWarp(fig.id);
            }
        });
        figuresGrid.appendChild(card);
    });
}

function selectFigure(figId, showGreeting = true) {
    currentFigureId = figId;
    const fig = figuresData[figId];

    heroPortrait.src = getAvatarSrc(fig);
    activeName.textContent = fig.name;

    document.querySelectorAll(".figure-card").forEach(c => {
        c.classList.toggle("active", c.dataset.id === figId);
    });

    quickChips.innerHTML = "";
    fig.quickQuestions.forEach(q => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "chip-btn";
        chip.textContent = q;
        chip.addEventListener("click", () => {
            unlockUserAudio();
            sfx.playClick();
            handleUserMessage(q);
        });
        quickChips.appendChild(chip);
    });

    chatMessages.innerHTML = "";
    if (showGreeting) {
        addBotMessage(fig.greeting, fig.greetingAudio);
    }
    unlockBadge(fig.badge.id);
}

function triggerTimeWarp(targetFigId) {
    const fig = figuresData[targetFigId];
    warpYear.textContent = fig.year;
    warpTarget.textContent = fig.warpMessage;

    sfx.playWarp();
    timeWarpOverlay.classList.remove("hidden");

    setTimeout(() => {
        selectFigure(targetFigId, true);
    }, 600);

    setTimeout(() => {
        timeWarpOverlay.classList.add("hidden");
    }, 1200);
}

function addBotMessage(text, audioPath) {
    const bubble = document.createElement("div");
    bubble.className = "message-bubble bot";
    bubble.innerHTML = `
        <div class="msg-box">
            ${text}
            <div><button class="tts-speak-btn">🗣️ 목소리로 다시듣기</button></div>
        </div>
    `;

    bubble.querySelector(".tts-speak-btn").addEventListener("click", () => {
        unlockUserAudio();
        sfx.playClick();
        playLocalAudio(audioPath);
    });

    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    playLocalAudio(audioPath);
}

function addUserMessage(text) {
    const bubble = document.createElement("div");
    bubble.className = "message-bubble user";
    bubble.innerHTML = `
        <div class="msg-box">${text}</div>
    `;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleUserMessage(queryText) {
    if (!queryText || !queryText.trim()) return;
    addUserMessage(queryText);

    const fig = figuresData[currentFigureId];
    if (!fig) return;

    let matchedItem = null;

    const qIdx = fig.quickQuestions.indexOf(queryText);
    if (qIdx !== -1 && fig.knowledge[qIdx]) {
        matchedItem = fig.knowledge[qIdx];
    } else {
        const cleanQuery = queryText.replace(/\s+/g, "");
        for (const item of fig.knowledge) {
            const cleanKey = item.key.replace(/\s+/g, "");
            if (cleanQuery.includes(cleanKey) || cleanKey.includes(cleanQuery)) {
                matchedItem = item;
                break;
            }
        }
    }

    if (!matchedItem && fig.knowledge.length > 0) {
        matchedItem = fig.knowledge[0];
    }

    if (matchedItem) {
        setTimeout(() => {
            addBotMessage(matchedItem.text, matchedItem.audio);
        }, 300);
    }
}

function unlockBadge(badgeId) {
    if (!unlockedBadges.includes(badgeId)) {
        unlockedBadges.push(badgeId);
        localStorage.setItem("cheerpapa_badges_v14", JSON.stringify(unlockedBadges));
        updateBadgeCountUI();
        sfx.playSuccess();
        if (typeof confetti === "function") {
            confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
        }
    }
}

function updateBadgeCountUI() {
    const total = Object.keys(figuresData).length;
    badgeCount.textContent = `${unlockedBadges.length}/${total}`;
}

function renderBadgeModal() {
    modalBadgeGrid.innerHTML = "";
    Object.values(figuresData).forEach(fig => {
        const isUnlocked = unlockedBadges.includes(fig.badge.id);
        const item = document.createElement("div");
        item.className = `badge-item ${isUnlocked ? 'unlocked' : ''}`;
        const avatarSrc = getAvatarSrc(fig);
        item.innerHTML = `
            <img src="${avatarSrc}" alt="${fig.name}" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--accent-emerald);">
            <div class="badge-name">${fig.badge.name}</div>
            <div class="badge-desc">${fig.badge.desc}</div>
        `;
        modalBadgeGrid.appendChild(item);
    });
}

function setupEventListeners() {
    startExplorationBtn.addEventListener("click", startExploration);

    reopenIntroBtn.addEventListener("click", () => {
        unlockUserAudio();
        introScreen.style.display = "flex";
        introScreen.classList.remove("fade-out");
        mainAppContainer.classList.add("hidden-initial");
        initWarpCanvas();
    });

    soundToggleBtn.addEventListener("click", () => {
        unlockUserAudio();
        soundEnabled = !soundEnabled;
        soundToggleBtn.innerHTML = soundEnabled ? "🔊 소리 ON" : "🔇 소리 OFF";
    });

    ttsToggleBtn.addEventListener("click", () => {
        unlockUserAudio();
        ttsEnabled = !ttsEnabled;
        ttsToggleBtn.innerHTML = ttsEnabled ? "🗣️ 목소리 ON" : "🔇 OFF";
        if (!ttsEnabled) cancelAllSpeech();
    });

    badgeBtn.addEventListener("click", () => {
        unlockUserAudio();
        sfx.playClick();
        renderBadgeModal();
        badgeModal.classList.remove("hidden");
    });

    modalCloseBtn.addEventListener("click", () => badgeModal.classList.add("hidden"));
    badgeModal.addEventListener("click", (e) => { if (e.target === badgeModal) badgeModal.classList.add("hidden"); });
}

document.addEventListener("DOMContentLoaded", () => {
    initApp();
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(() => {
            console.log("PWA Service Worker registered successfully!");
        }).catch(err => {
            console.warn("Service Worker registration failed:", err);
        });
    }
});
