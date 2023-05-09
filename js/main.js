const { createApp } = Vue

createApp ({
    data() {
        return {
            message: "Hello Vue Js",
            className: "title textCenter",
            source: "https://code.visualstudio.com/assets/docs/nodejs/vuejs/welcome-to-vue.png"
        }
    }
}).mount('#app')