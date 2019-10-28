<template>
  <div id="app" class="padleft" v-cloak>
    <h1>
      <u>Mutlipliation Table Practice</u>
    </h1>
    <game-rules></game-rules>

    <div v-if="!started">
      <level-picker @newtimepick="handleTimeChange($event)"></level-picker>
      <button @click="begin">Begin!</button>
    </div>

    <div v-else>
      <p>
        Time Left:
        <b class="time">{{ roundedTime }}</b> seconds
      </p>
      <div class="factors">
        <label>&nbsp;&nbsp;</label>
        {{ factor1 }}
        <br />
        <u>&times; {{ factor2 }}</u>
        <br />
        <input
          class="answer"
          v-show="!gameOver"
          ref="answer"
          v-model.number.trim="answer"
          type="text"
          @keyup.enter="answerSubmitted"
        />
      </div>
      <br />
      <button v-if="!gameOver" class="submit" @click="answerSubmitted">Submit</button>
      <div v-else>
        <div class="results">
          Game over, you answered {{ correctAnswers }} out of 10 questions
          correctly!
        </div>
        <div>
          <level-picker @newtimepick="handleTimeChange($event)"></level-picker>
          <button @click="begin">Play Again!</button>
        </div>
      </div>
      <br />
      <div v-show="!gameOver" class="padtop">
        Questions Left:
        <b>{{ questionNumber }}</b>
        <br />Correct Answers:
        <b>{{ correctAnswers }}</b>
        <br />Incorrect Answers:
        <b>{{ incorrectAnswers }}</b>
      </div>
    </div>
  </div>
</template>

<script>
import GameRules from "./components/GameRules.vue";
import LevelPicker from "./components/LevelPicker.vue";

export default {
  name: "app",
  components: {
    GameRules,
    LevelPicker
  },
  data: function() {
    return {
      started: false,
      answer: null,
      factor1: null,
      factor2: null,
      time: 3000,
      timeLeft: null,
      questionNumber: 10,
      correctAnswers: 0,
      problemTimer: null,
      gameOver: false
    };
  },
  methods: {
    begin() {
      this.newProblem();
      this.started = true;
      this.gameOver = false;
      this.questionNumber = 10;
      this.correctAnswers = 0;
      this.setCursor();
      this.timeLeft = this.time;
      clearInterval(this.problemTimer);
      this.problemTimer = setInterval(this.checkTime, 100);
    },
    checkTime() {
      this.timeLeft -= 100;
      //timer ran out on question
      if (this.timeLeft == 0) {
        this.answerSubmitted();
      }
    },
    newProblem() {
      let temp = Math.floor(Math.random() * 10);
      this.factor1 = "\xa0\xa0\xa0\xa0" + temp;
      this.factor2 = Math.floor(Math.random() * 10);
    },
    answerSubmitted() {
      if (this.answer == this.factor1 * this.factor2) this.correctAnswers++;
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
      });
      this.answer = null;
    },
    endGame() {
      clearInterval(this.problemTimer);
      this.gameOver = true;
      this.timeLeft = 0;
    },
    handleTimeChange: function(time) {
      this.time = time;
    }
  },
  computed: {
    roundedTime: function() {
      return Number.parseFloat(this.timeLeft / 1000).toFixed(1);
    },
    incorrectAnswers: function() {
      return 10 - this.questionNumber - this.correctAnswers;
    }
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}

.padleft {
  padding-left: 15px;
}

.padtop {
  padding-top: 10px;
}

.factors {
  font-weight: bold;
  font-size: 25px;
  font-family: Tahoma, Geneva, sans-serif;
  position: relative;
  left: 15px;
}

.answer {
  width: 40px;
  height: 25px;
  text-align: center;
  font-size: 22px;
}

.submit {
  position: relative;
  left: 10px;
}

.time {
  color: red;
}

.results {
  font-family: Tahoma, Geneva, sans-serif;
  font-weight: bold;
  font-size: 17px;
}
</style>
