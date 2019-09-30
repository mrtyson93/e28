let app = new Vue({
    el: '#app',
    data: {
        'started': null
    },
    methods: {
        begin() {
            this.started = true;
        }
    }
});