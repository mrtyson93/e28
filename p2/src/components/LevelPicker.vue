<template>
  <div>
    <p>
      <b>Choose time per question:</b>
    </p>
    <input type="radio" value="1000" v-model.number="timePicker" />
    <label>1 Second</label>

    <input type="radio" value="2000" v-model.number="timePicker" />
    <label>2 Seconds</label>

    <input type="radio" value="3000" v-model.number="timePicker" checked="checked" />
    <label>3 Seconds</label>

    <input type="radio" value="4000" v-model.number="timePicker" />
    <label>4 Seconds</label>
    <br />
    <br />
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      timePicker: 3000
    };
  },
  watch: {
    timePicker: {
      handler: function() {
        this.$emit("newtimepick", this.timePicker);
      }
    }
  },
  template: "#level-picker"
};
</script>

<style>
</style>