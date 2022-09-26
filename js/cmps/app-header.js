

export default {
    template: `
    <header class="app-header" >
    <router-link class='app-link' to="/">
        <h2>
            <img class="appsus-logo" src="./img/logo.png" alt="">
            <span class="appsus-txt" >AppSus</span>
        </h2>
    </router-link> 
    
        <nav class="app-nav">
            <router-link to="/">Home</router-link> 
            <router-link to="/mail" >Mail</router-link>
            <router-link to="/keep" >Keep</router-link>
            <!-- <router-link to="/about" >About</router-link> -->
        </nav>        
    </header>
    `
}



