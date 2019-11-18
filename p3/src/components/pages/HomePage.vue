<template>
  <div id="test">
    <br />
    <v-autocomplete label="States" :items="states" rounded></v-autocomplete>
  </div>
</template>

<script>
export default {
  data() {
    return {
      states: [
        'Autocompletes',
        'Comboboxes',
        'Forms',
        'Inputs',
        'Overflow Buttons',
        'Selects',
        'Selection Controls',
        'Sliders',
        'Textareas',
        'Text Fields'
      ]
    };
  }
};
</script>
