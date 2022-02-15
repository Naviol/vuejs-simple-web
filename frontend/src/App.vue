<template>
  <div class="container-fluid" id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/#">
        <img src="./assets/favicon.png" />
        Showcase
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNavDropdown"
      >
        <div class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/data" class="nav-item nav-link">Data</router-link>
          </li>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: #42b983;
  border-radius: 0.5rem;
  /* width: 6rem; */
}

.navbar-nav li {
  padding-right: 10rem;
}
</style>
