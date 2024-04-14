

// Creating new instance of VueJS
const app = Vue.createApp({
    // Managing some states
    data() {
        return {
            firstname: '',
            lastname: '',
            email: '',
            gender: '',
            picture: ''
        }
    },
    methods: {
        // Creating a function to fetch from the internet
        async getUser() {

            // sending some HTTPS requests to the server and pause
            // execution until request is resolved
            const res = await fetch('https://randomuser.me//api')

            // As long as request is resolved data will be assigned
            // to the objecr result in json format
            const { results} = await res.json()

            // Just there for debugg
            console.log(results)

            // Assigning the fetched data into the variables or states
            this.firstname = results[0].name.first
            this.lastname = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

// Mounted my VueJS instance on my webpage
app.mount('#app')