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
        history: [],
        rememberedCards: [],
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
        document.querySelector('#learn-view h2').textContent = titleMap[this.state.currentCategory];

        // Hide tabs for Kanji
        const tabs = document.querySelector('.module-tabs');
        if (this.state.currentCategory === 'kanji') {
            tabs.style.display = 'none';
        } else {
            tabs.style.display = 'flex';
        }
    },

    renderGrid() {
        const data = this.getData(this.state.currentCategory);
        const grid = document.getElementById('kana-grid');

        grid.innerHTML = data.map(item => {
            // For Kanji, show meaning instead of just romaji if available
            const subText = item.meaning ? item.meaning : item.romaji;

            return `
            <div class="kana-box glass">
                <div class="kana-char">${item.char}</div>
                <div class="kana-romaji" style="font-size: ${item.meaning ? '0.8rem' : '0.9rem'}">${subText}</div>
                <div class="kana-actions">
                    <button class="icon-btn" onclick="app.playSound('${item.char}')"><i class="fa-solid fa-volume-high"></i></button>
                    <button class="icon-btn"><i class="fa-solid fa-pencil"></i></button>
                </div>
            </div>
            `;
        }).join('');
    },

    // Flashcard Logic
    setupFlashcard() {
        // Setup Screen Events
        document.getElementById('fc-select-all').addEventListener('click', () => this.toggleSelection(true));
        document.getElementById('fc-clear-all').addEventListener('click', () => this.toggleSelection(false));
        document.getElementById('fc-start-btn').addEventListener('click', () => this.startFlashcardSession());
        document.getElementById('fc-quit-btn').addEventListener('click', () => this.resetFlashcardSetup());
        document.getElementById('fc-selection-grid').addEventListener('click', (e) => this.handleSelectionClick(e));

        // Play Screen Events
        const showBtn = document.getElementById('show-answer-btn');
        const ratingBtns = document.getElementById('rating-btns');
        const flashcard = document.getElementById('flashcard');
        const audioBtn = document.getElementById('fc-audio-btn');
        const undoBtn = document.getElementById('fc-undo-btn');

        // Click on card to flip (if not already flipped)
        flashcard.addEventListener('click', () => {
            if (!flashcard.classList.contains('flipped')) {
                flashcard.classList.add('flipped');
                showBtn.classList.add('hidden');
                ratingBtns.classList.remove('hidden');
            }
        });

        showBtn.addEventListener('click', () => {
            flashcard.classList.add('flipped');
            showBtn.classList.add('hidden');
            ratingBtns.classList.remove('hidden');
        });

        document.getElementById('fc-correct').addEventListener('click', () => this.processCardResult('correct'));
        document.getElementById('fc-wrong').addEventListener('click', () => this.processCardResult('wrong'));

        audioBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card flip if clicking audio
            this.playSound(this.state.currentFlashcard.char);
        });

        if (undoBtn) {
            undoBtn.addEventListener('click', () => this.undoLastAction());
        }
    },

    resetFlashcardSetup() {
        // Show Setup, Hide Play
        document.getElementById('flashcard-setup').classList.remove('hidden');
        document.getElementById('flashcard-play').classList.add('hidden');

        // Update Badge
        const badge = document.getElementById('fc-category-badge');
        if (badge) badge.textContent = this.state.currentCategory.toUpperCase();

        // Render Selection Grid
        const data = this.getData(this.state.currentCategory);
        const grid = document.getElementById('fc-selection-grid');
        grid.innerHTML = data.map((item, index) => `
            <div class="select-item selected" data-index="${index}">
                <span class="select-char">${item.char}</span>
                <span class="select-romaji">${item.romaji}</span>
            </div>
        `).join('');
    },

    toggleSelection(selectAll) {
        document.querySelectorAll('.select-item').forEach(el => {
            if (selectAll) el.classList.add('selected');
            else el.classList.remove('selected');
        });
    },

    handleSelectionClick(e) {
        const item = e.target.closest('.select-item');
        if (item) {
            item.classList.toggle('selected');
        }
    },

    startFlashcardSession() {
        const selectedIndices = Array.from(document.querySelectorAll('.select-item.selected'))
            .map(el => parseInt(el.dataset.index));

        if (selectedIndices.length === 0) {
            alert('กรุณาเลือกตัวอักษรอย่างน้อย 1 ตัว');
            return;
        }

        const data = this.getData(this.state.currentCategory);
        // Create queue from selected items
        this.state.flashcardQueue = selectedIndices.map(i => data[i]);
        // Shuffle queue
        this.state.flashcardQueue.sort(() => Math.random() - 0.5);

        this.state.score = 0;
        this.state.history = []; // Stack for undo
        this.state.rememberedCards = []; // Right stack

        // Switch View
        document.getElementById('flashcard-setup').classList.add('hidden');
        document.getElementById('flashcard-play').classList.remove('hidden');

        this.updateStacks();
        this.nextFlashcard();
    },

    processCardResult(result) {
        const currentCard = this.state.currentFlashcard;

        // Save history
        this.state.history.push({
            card: currentCard,
            result: result
        });

        if (result === 'correct') {
            this.state.score++;
            this.state.rememberedCards.push(currentCard);
        } else {
            // Re-queue the card
            this.state.flashcardQueue.push(currentCard);
        }

        this.nextFlashcard();
    },

    undoLastAction() {
        if (this.state.history.length === 0) return;

        const lastAction = this.state.history.pop();
        const { card, result } = lastAction;

        // Put the currently displayed card back to the FRONT of the queue (so we see it again later)
        // BUT wait, if we undo, we want to see the PREVIOUS card immediately.
        // So the *current* card (which we haven't answered yet) should go back to the HEAD of the queue.
        if (this.state.currentFlashcard) {
            this.state.flashcardQueue.unshift(this.state.currentFlashcard);
        }

        // Restore the previous card as current
        this.state.currentFlashcard = card;

        // Reverse the effects of the action
        if (result === 'correct') {
            this.state.score--;
            this.state.rememberedCards.pop();
        } else {
            // It was wrong, so it was pushed to the end of queue. Remove it from there.
            // Note: If we shuffled, this might be tricky, but here we just pushed to end.
            // However, if we undo immediately, it's at the end.
            this.state.flashcardQueue.pop();
        }

        this.renderCurrentFlashcard();
        this.updateStacks();
    },

    nextFlashcard() {
        // Check if queue empty
        if (this.state.flashcardQueue.length === 0) {
            alert(`จบการฝึกฝน! คะแนนของคุณ: ${this.state.score}`);
            this.resetFlashcardSetup();
            return;
        }

        const item = this.state.flashcardQueue.shift(); // Get first item
        this.state.currentFlashcard = item;

        this.renderCurrentFlashcard();
        this.updateStacks();
    },

    renderCurrentFlashcard() {
        // Reset UI
        // Reset UI
        const flashcard = document.getElementById('flashcard');
        const showBtn = document.getElementById('show-answer-btn');
        const ratingBtns = document.getElementById('rating-btns');
        const item = this.state.currentFlashcard;

        // Ensure card is face-down
        flashcard.classList.remove('flipped');
        showBtn.classList.remove('hidden');
        ratingBtns.classList.add('hidden');

        // Update Stats
        document.getElementById('fc-score').textContent = this.state.score;
        // Update Undo button state
        document.getElementById('fc-undo-btn').disabled = this.state.history.length === 0;

        // Update Content
        document.querySelector('.fc-char').textContent = item.char;
        const romajiEl = document.querySelector('.fc-romaji');
        const typeEl = document.querySelector('.fc-type');
        if (item.meaning) {
            romajiEl.textContent = item.meaning;
            typeEl.textContent = `Reading: ${item.romaji}`;
        } else {
            romajiEl.textContent = item.romaji;
            typeEl.textContent = this.state.currentCategory.charAt(0).toUpperCase() + this.state.currentCategory.slice(1);
        }
    },

    updateStacks() {
        // Left Stack (Queue)
        const leftCount = this.state.flashcardQueue.length;
        document.getElementById('stack-left-count').textContent = leftCount;

        const leftContainer = document.getElementById('stack-left-content');
        leftContainer.innerHTML = '';

        // Render pending chips (limit to 50)
        const showCountLeft = Math.min(leftCount, 50);
        for (let i = 0; i < showCountLeft; i++) {
            const div = document.createElement('div');
            div.className = 'mini-card pending';
            div.textContent = this.state.flashcardQueue[i].char;
            leftContainer.appendChild(div);
        }

        // Right Stack (Remembered)
        const rightCount = this.state.rememberedCards.length;
        document.getElementById('stack-right-count').textContent = rightCount;

        const rightContainer = document.getElementById('stack-right-content');
        rightContainer.innerHTML = '';

        // Show remembered cards in order
        this.state.rememberedCards.forEach(item => {
            const div = document.createElement('div');
            div.className = 'mini-card done';
            div.textContent = item.char;
            rightContainer.appendChild(div);
        });
    },

    // Quiz Logic
    setupQuiz() {
        const input = document.querySelector('.quiz-content input');
        const submitBtn = document.querySelector('.quiz-content .btn-primary');

        const checkAnswer = () => {
            const val = input.value.trim().toLowerCase();
            const correctAnswers = this.state.currentQuizItem.romaji.split('/').map(s => s.trim().toLowerCase());

            // Check if input matches any of the correct answers (useful for Kanji with multiple readings)
            const isCorrect = correctAnswers.some(ans => val === ans);

            if (isCorrect) {
                alert('ถูกต้อง! (Correct)');
                this.state.quizScore++;
                this.playSound(this.state.currentQuizItem.char);
            } else {
                alert(`ผิด! คำตอบคือ ${this.state.currentQuizItem.romaji}`);
            }
            this.state.quizTotal++;
            this.updateScore();
            input.value = '';
            this.loadNextQuizQuestion();
        };

        submitBtn.addEventListener('click', checkAnswer);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkAnswer();
        });
    },

    loadNextQuizQuestion() {
        const data = this.getData(this.state.currentCategory);
        const item = data[Math.floor(Math.random() * data.length)];
        this.state.currentQuizItem = item;
        document.querySelector('.question-char').textContent = item.char;

        // Update Quiz Header
        document.querySelector('.quiz-header h2').textContent = `แบบทดสอบ: ${this.state.currentCategory === 'kanji' ? 'อ่านคันจิ' : 'พิมพ์โรมาจิ'}`;
    },

    updateScore() {
        document.querySelector('.score-badge').textContent = `${this.state.quizScore}/${this.state.quizTotal}`;
    },

    playSound(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ja-JP';
            utterance.rate = 0.8; // Slightly slower for learning
            window.speechSynthesis.speak(utterance);
        } else {
            console.log('Text-to-speech not supported');
        }
    }
};

// Expose app to window globally so inline HTML handlers can access it
window.app = app;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
