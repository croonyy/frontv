<template>
  <div class="login">
    <div class="content">
      <a-form :model="formState" name="basic" :label-col="{ span: 4 }" :wrapper-col="{ span: 18 }" autocomplete="off"
        @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item label="账号" name="username" :rules="[{ required: true, message: '请输入账号!' }]">
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item class='ud_password' label="密码" name="password" :rules="[{ required: true, message: '请输入密码!' }]">
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 4, span: 16 }">
          <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import axios from 'axios'
const formState = reactive({
  username: '',
  password: '',
  remember: true,
});
const onFinish = values => {
  // console.log('Success:', values);
  let { username, password, remember } = values
  axios({
    method: "POST",
    url: "http://localhost:8080/api/rbac/login/",
    // url: "http://192.168.1.4:1234/rbac/login/",
    data: {
      username: username,
      password: password,
    },
    headers: {
      // "Content-Type": "application/x-www-form-urlencoded",
      "Content-Type": "application/json;charset=utf-8",
      // "Content-Type": "text/plain",
    }
  }).then(response => {
    console.log(response);
  })



};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, skyblue, rgb(0, 255, 191));
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 500px;
    // height: 200px;
    padding: 20px;
    border: 1px solid white;
    border-radius: 6px;
    background: white;

  }
}

.ud_password {
  // background-color: red;
}

// .ud_password .ant-input {
// .ant-input-affix-wrapper > input.ant-input {
//   background-color: green;
//   padding: 4px 11px;
// }
</style>