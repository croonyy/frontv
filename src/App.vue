<template>
  <router-view />
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  outline: none;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */


/* 处理input框自动填充后背景色变黄的问题 */
input:-internal-autofill-previewed,
input:-internal-autofill-selected {
  -webkit-text-fill-color: #000000;
  transition: background-color 9999s ease-out 0.5s;
  /* -webkit-box-shadow: 0 0 0 1000px rgb(255, 0, 0) inset !important; */
  /* -webkit-box-shadow:0 0 0 1000px rgb(255, 255, 255) inset; */
}

</style>
