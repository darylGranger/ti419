// Vue.config.devtools = true;

const app = new Vue ({
    el: '#app',
    data: {
        playerCount: 0,
        raceCount: 0,
        infoGathered: ((playerCount) && (raceCount)),
        test: "It works"
    }
});