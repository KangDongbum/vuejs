<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/test">Test</router-link> |
    <router-link to="/databinding">DataBinding</router-link> |
    <router-link to="/databindinginputtext">DataBindingInputText</router-link> |
    <router-link to="/checkbox">Checkbox</router-link> |
    <router-link to="/checkbox2">Checkbox2</router-link> |
    <router-link to="/radiobox">RadioBox</router-link> |
    <router-link to="/button">Button</router-link> |
    <router-link to="/key">Key</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/watch">Watch</router-link> |
    <router-link to="/nestedcomponent">NestedComponent</router-link> |
    <router-link to="/parentcomponent">ParentComponent</router-link> |
    <router-link to="/parentcomponent2">ParentComponent2</router-link> |
    <router-link to="/test2">Test2</router-link> |
  </div>
  <router-view/>
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
