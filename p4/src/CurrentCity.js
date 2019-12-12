// /src/Cart.js
export default class Cart {


    constructor() {

    }

    /**
     * Getter methods for items
     */
    getSearched() {
        return localStorage.getItem('searched');
    }
    getCity() {
        return localStorage.getItem('city');
    }
    getState() {
        return localStorage.getItem('state');
    }
    getZip() {
        return localStorage.getItem('zip');
    }

    /**
     * Setter methods for items
     */
    setSearched(searched) {
        localStorage.setItem('searched', searched);
    }
    setCity(city) {
        localStorage.setItem('city', city);
    }
    setState(state) {
        localStorage.setItem('state', state);
    }
    setZip(zip) {
        localStorage.setItem('zip', zip);
    }
}