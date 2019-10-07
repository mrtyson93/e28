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
    },
    methods: {
        begin() {
            this.newProblem();
            this.started = true;
            this.$nextTick(() => {
                this.$refs.answer.focus();
            })
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
                if (this.questionNumber == 0) {
                    alert('ok');
                }
            }
        },
        newProblem() {
            this.factor1 = Math.floor(Math.random() * 10);
            this.factor2 = Math.floor(Math.random() * 10);
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