const hiraganaData = [
    { char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }, { char: 'う', romaji: 'u' }, { char: 'え', romaji: 'e' }, { char: 'お', romaji: 'o' },
    { char: 'か', romaji: 'ka' }, { char: 'き', romaji: 'ki' }, { char: 'く', romaji: 'ku' }, { char: 'け', romaji: 'ke' }, { char: 'こ', romaji: 'ko' },
    { char: 'さ', romaji: 'sa' }, { char: 'し', romaji: 'shi' }, { char: 'す', romaji: 'su' }, { char: 'せ', romaji: 'se' }, { char: 'そ', romaji: 'so' },
    { char: 'た', romaji: 'ta' }, { char: 'ち', romaji: 'chi' }, { char: 'つ', romaji: 'tsu' }, { char: 'て', romaji: 'te' }, { char: 'と', romaji: 'to' },
    { char: 'な', romaji: 'na' }, { char: 'に', romaji: 'ni' }, { char: 'ぬ', romaji: 'nu' }, { char: 'ね', romaji: 'ne' }, { char: 'の', romaji: 'no' },
    { char: 'は', romaji: 'ha' }, { char: 'ひ', romaji: 'hi' }, { char: 'ふ', romaji: 'fu' }, { char: 'へ', romaji: 'he' }, { char: 'ほ', romaji: 'ho' },
    { char: 'ま', romaji: 'ma' }, { char: 'み', romaji: 'mi' }, { char: 'む', romaji: 'mu' }, { char: 'め', romaji: 'me' }, { char: 'も', romaji: 'mo' },
    { char: 'や', romaji: 'ya' }, { char: 'ゆ', romaji: 'yu' }, { char: 'よ', romaji: 'yo' },
    { char: 'ら', romaji: 'ra' }, { char: 'り', romaji: 'ri' }, { char: 'る', romaji: 'ru' }, { char: 'れ', romaji: 're' }, { char: 'ろ', romaji: 'ro' },
    { char: 'わ', romaji: 'wa' }, { char: 'を', romaji: 'wo' }, { char: 'ん', romaji: 'n' }
];

const katakanaData = [
    { char: 'ア', romaji: 'a' }, { char: 'イ', romaji: 'i' }, { char: 'ウ', romaji: 'u' }, { char: 'エ', romaji: 'e' }, { char: 'オ', romaji: 'o' },
    { char: 'カ', romaji: 'ka' }, { char: 'キ', romaji: 'ki' }, { char: 'ク', romaji: 'ku' }, { char: 'ケ', romaji: 'ke' }, { char: 'コ', romaji: 'ko' },
    { char: 'サ', romaji: 'sa' }, { char: 'シ', romaji: 'shi' }, { char: 'ス', romaji: 'su' }, { char: 'セ', romaji: 'se' }, { char: 'ソ', romaji: 'so' },
    { char: 'タ', romaji: 'ta' }, { char: 'チ', romaji: 'chi' }, { char: 'ツ', romaji: 'tsu' }, { char: 'テ', romaji: 'te' }, { char: 'ト', romaji: 'to' },
    { char: 'ナ', romaji: 'na' }, { char: 'ニ', romaji: 'ni' }, { char: 'ヌ', romaji: 'nu' }, { char: 'ネ', romaji: 'ne' }, { char: 'ノ', romaji: 'no' },
    { char: 'ハ', romaji: 'ha' }, { char: 'ヒ', romaji: 'hi' }, { char: 'フ', romaji: 'fu' }, { char: 'ヘ', romaji: 'he' }, { char: 'ホ', romaji: 'ho' },
    { char: 'マ', romaji: 'ma' }, { char: 'ミ', romaji: 'mi' }, { char: 'ム', romaji: 'mu' }, { char: 'メ', romaji: 'me' }, { char: 'モ', romaji: 'mo' },
    { char: 'ヤ', romaji: 'ya' }, { char: 'ユ', romaji: 'yu' }, { char: 'ヨ', romaji: 'yo' },
    { char: 'ラ', romaji: 'ra' }, { char: 'リ', romaji: 'ri' }, { char: 'ル', romaji: 'ru' }, { char: 'レ', romaji: 're' }, { char: 'ロ', romaji: 'ro' },
    { char: 'ワ', romaji: 'wa' }, { char: 'ヲ', romaji: 'wo' }, { char: 'ン', romaji: 'n' }
];

const kanjiData = [
    { char: '日', romaji: 'nichi / hi', meaning: 'Sun / Day' },
    { char: '一', romaji: 'ichi / hito', meaning: 'One' },
    { char: '二', romaji: 'ni / futa', meaning: 'Two' },
    { char: '三', romaji: 'san / mi', meaning: 'Three' },
    { char: '人', romaji: 'jin / hito', meaning: 'Person' },
    { char: '年', romaji: 'nen / toshi', meaning: 'Year' },
    { char: '大', romaji: 'dai / oo', meaning: 'Big' },
    { char: '本', romaji: 'hon / moto', meaning: 'Book / Origin' },
    { char: '中', romaji: 'chuu / naka', meaning: 'Middle' },
    { char: '長', romaji: 'chou / naga', meaning: 'Long / Leader' },
    { char: '出', romaji: 'shutsu / de', meaning: 'Exit / Leave' },
    { char: '三', romaji: 'san / mi', meaning: 'Three' },
    { char: '時', romaji: 'ji / toki', meaning: 'Time' },
    { char: '行', romaji: 'kou / i', meaning: 'Go' },
    { char: '見', romaji: 'ken / mi', meaning: 'See' },
    { char: '月', romaji: 'getsu / tsuki', meaning: 'Moon / Month' }
];

const app = {
    state: {
        currentView: 'home',
        currentCategory: 'hiragana', // hiragana, katakana, kanji
        flashcardQueue: [],
        currentFlashcard: null,
        score: 0,
        quizScore: 0,
        quizTotal: 0,
        currentQuizItem: null
    },

    init() {
        this.setupNavigation();
        this.renderGrid();
        this.setupFlashcard();
        this.setupQuiz();
    },

    setupNavigation() {
        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.target;
                // If clicking "Learn" directly from nav, default to current category or hiragana
                if (target === 'learn') {
                    this.navigateTo(target, this.state.currentCategory);
                } else {
                    this.navigateTo(target);
                }
            });
        });
    },

    navigateTo(viewId, category = null) {
        // Update State
        this.state.currentView = viewId;
        if (category) {
            this.state.currentCategory = category;
        }

        // Update UI
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        document.getElementById(`${viewId}-view`).classList.add('active');

        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.target === viewId);
        });

        // Specific Logic
        if (viewId === 'learn') {
            this.updateLearnHeader();
            this.renderGrid();
        }
        if (viewId === 'flashcard') {
            this.resetFlashcardSetup();
        }
        if (viewId === 'quiz') this.loadNextQuizQuestion();

        window.scrollTo(0, 0);
    },

    getData(category) {
        if (category === 'katakana') return katakanaData;
        if (category === 'kanji') return kanjiData;
        return hiraganaData;
    },

    updateLearnHeader() {
        const titleMap = {
            'hiragana': 'ตารางฮิรางานะ (Hiragana)',
            'katakana': 'ตารางคาตาคานะ (Katakana)',
            'kanji': 'คันจิพื้นฐาน N5 (Kanji)'
        };
        document.queryS