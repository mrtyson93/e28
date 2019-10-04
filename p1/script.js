let app = new Vue({
    el: '#app',
    data: {
        'started': null,
        'answer': null,
        'factor1': null,
        'factor2': null
    },
    methods: {
        begin() {
            this.started = true;
        }
    }
});