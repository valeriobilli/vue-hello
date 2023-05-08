const { createApp } = Vue

createApp ({
    data() {
        return {
            message: "Hello Vue Js",
            className: "title textCenter"
        }
    }
}).mount('#app')