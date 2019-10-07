let app = new Vue({
    el: '#app',
    data: {
        started: false,
        answer: null,
        factor1: null,
        factor2: null,
        time: 3000,
        timeLeft: null,
        questionNumber: 10,
        correctAnswers: 0,
        problemTimer: null,
        gameOver: false,
    },
    methods: {
        begin() {
            this.newProblem();
            this.started = true;
            this.gameOver = false;
            this.setCursor();
            this.timeLeft = this.time;
            clearInterval(this.problemTimer);
            this.problemTimer = setInterval(this.checkTime, 100);

        },
        checkTime() {
            this.timeLeft -= 100;
            //timer ran out on question
            if (this.timeLeft == 0) {
                this.questionNumber--;
                this.timeLeft = this.time;
                this.newProblem();
                if (this.questionNumber == 0) this.endGame();
            }
        },
        newProblem() {
            this.factor1 = Math.floor(Math.random() * 10);
            this.factor2 = Math.floor(Math.random() * 10);
        },
        answerSubmitted() {
            if (this.answer == (this.factor1 * this.factor2)) this.correctAnswers++;
            this.questionNumber--;
            this.timeLeft = this.time;
            this.setCursor();
            if (this.questionNumber == 0) {
                this.endGame();
            } else this.newProblem();
        },
        setCursor() {
            this.$nextTick(() => {
                this.$refs.answer.focus();
            })
            this.answer = null;
        },
        endGame() {
            clearInterval(this.problemTimer);
            this.gameOver = true;
        }
    },
    computed: {
        roundedTime: function () {
            return this.timeLeft / 1000;
        },
        incorrectAnswers: function () {
            return 10 - this.questionNumber - this.correctAnswers;
        }
    }
});