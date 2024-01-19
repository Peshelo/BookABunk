<template>
    <NuxtLayout name="auth">
    <div class="flex flex-col justify-center items-center">
      <h1 class="font-semibold">Login</h1>
        <p v-if="loading" class="text-center">
        <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" width="50" class="object-contain" alt=""></p>
    <form v-else @submit.prevent="handleSubmit()" class="mt-2 p-5 flex flex-col items-center">
      <p class="py-2 px-4 bg-red-200 text-red-400 border border-red-400 rounded-lg mb-2 w-full" v-if="this.errored">{{this.errors.ERR}}</p>
        <input type="email" v-model="email" @focus="this.errored=false" name="email" id="" placeholder="Email" class="py-2 px-4 border rounded-lg mb-2 w-full focus:outline-none focus:border-[var(--secondary)] duration-300">
        <!-- <p v-if="this.errors.email" class="text-sm text-red-600 text-left mb-2">*{{this.errors.email}}</p> -->
        <input type="password" v-model="password" @focus="this.errored=false" name="password" id="" placeholder="Password" class="py-2 px-4 border rounded-lg mb-2 w-full focus:outline-none focus:border-[var(--secondary)] duration-300">
        <!-- <p v-if="this.errors.password" class="text-sm text-red-600 text-left mb-2">*{{this.errors.password}}</p> -->
        <button class="py-2 bg-[var(--primary)] text-white font-semibold rounded-md w-full">Login</button>
        <p class="text-sm text-gray-400 mt-5">Do not have an account? <a href="/auth/" class="text-red-300">Sign up</a></p>
    </form>
    </div>
    </NuxtLayout>
</template>

<script>
    import axios from 'axios'

export default {
    data(){
        return{
            email: "",
            password: "",
            loading: false,
            errored:false,
            errors:{}
        }
    },
    methods:{
        async handleSubmit(){
          this.loading = true;
            this.errors = {};
            if(!this.email){
                this.errors.email = "Email is required";
            }
            if(!this.password){
                this.errors.password = "Enter password";
            }
            if (Object.keys(this.errors).length === 0) {
       // Your code for handling the login form submission
       try{
        await axios.post('http://localhost:8080/api/v1/auth/login',
        {
        email:this.email,
        password :this.password
        },
        {
            headers: {'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
                      },
                    
            credentials: 'include',
          }).then((response) =>{
          const data = response.data;
          console.log(data);

          if(response.data == "User Not Found"){
            this.errors.ERR = "Wrong Login details...";
          }else{
            const parts = data.split(':')
              this.role = parts[2].trim().replace('[', '').replace(']', '')
              localStorage.token = this.getTokenValue(data).replace('token : ',"").replace(' role : [OWNER]',"");
              localStorage.role = this.role;
              this.success="";
            this.success = "Login Sucessful...";
            console.log("Login Successful..")

            if(this.role === "OWNER"){
              this.$router.push('../agentAccount/dashboard')
            }
            if(this.role === "TENANT"){
              this.$router.push('../tenant_dashboard/')
            }
            if(this.role === "AGENT"){
              this.$router.push('../agentAccount/dashboard')

            }
            if(this.role === "ADMIN"){
              this.$router.push('/admin/')

            }
            // console.log(localStorage.token)
          }
        }).catch(error => {
          // Errors from server
          this.errored = true;
        console.log(error.response)
        if(error.response.status == 401 || error.response.status == 400){
          this.errors.ERR = "Wrong Login details...";
        }else{
          this.errors.ERR = "Error: "+error;
        }
        
        this.errored = true
        
      }).finally(() => this.loading = false);

}catch(err){
  this.errors.network = "Error: " + err.message;
  this.errors.ERR = err;
console.log("Error:",err.message)
}
      }
        },
        push(){
      this.$router.push("../agentAccount/dashboard")
    },
    getTokenValue(tokenString) {
    const tokenArray = tokenString.split(' ')
    const tokenValue = tokenArray[tokenArray.indexOf('token') + 2]
    return tokenValue
  },
    }
    

}
</script>

<style>

</style>