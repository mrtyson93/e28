let app = new Vue({
    el: '#app',
    data: {
        'started': false,
        'answer': null,
        'factor1': 5,
        'factor2': 8,
        'time': 3,
    },
    methods: {
        begin() {
            this.started = true;
        }
    }
});