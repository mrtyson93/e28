let app = new Vue({
    el: '#app',
    data: {
        guess: '',
        mysteryWord: 'dinosaur',
        answered: false,
        showHint: false,
        statements: [],
        level: 'difficult',
        correct: false,
        feedbackClass: '',
        valid: true,
        feedback: '',
        solution: 35,
        answer: '',
        imageSrc: '',
        imageAlt: '',
        firstName: '',
        lastName: '',
        guesses: [34, 56, 78, 100],
        correctGuess: 50,
    },
    methods: {
        submitAnswer: function () {
            this.answered = true;
            this.valid = true;

            if (typeof (this.answer) != 'number') {
                this.valid = false;
                this.answered = false;
                this.feedback = 'Enter a valid number';
            } else if (this.answer == this.solution) {
                this.feedback = 'You got it!';
                this.correct = true;
                this.imageSrc = 'happy.png';
                this.imageAlt = 'Happy smiley face';
            } else {
                this.feedback = 'Try again...';
                this.correct = false;
                this.imageSrc = 'sad.png';
                this.imageAlt = 'Frowny face';
            }
        },
        getFullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },
        displayWord: function () {

            var wordAsArray = this.mysteryWord.split('');

            for (let i = 0; i < wordAsArray.length; i += 2) {
                wordAsArray[i] = '_';
            }

            return wordAsArray.join('');
        },
        highGuesses: function () {
            function isHigh(number) {
                return number > this;
            }
            return this.guesses.filter(isHigh, this.correctGuess);
        }
    },
    watch: {
        guess: function () {
            let mysteryWordArray = this.mysteryWord.split('');
            let guessArray = this.guess.split('');
            let correctCount = 0;

            guessArray.forEach(function (letter, index) {
                if (letter == mysteryWordArray[index]) {
                    correctCount++;
                }
            });

            this.feedback = 'Correct letters so far: ' + correctCount;
        }
    },
    mounted: function () {

    }
});