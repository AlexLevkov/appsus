

export default {
    template: `
    <header class="app-header" >
        <h2>
            <span>AppSus</span>
             <img class="appsus-logo" src="../../img/logo.png" alt="">
        </h2>
        <nav class="app-nav">
            <router-link to="/">Home</router-link> 
            <router-link to="/mail" >Mail</router-link>
            <router-link to="/keep" >Keep</router-link>
            <!-- <router-link to="/about" >About</router-link> -->
        </nav> 
        <span></span>       
    </header>
    `
}



