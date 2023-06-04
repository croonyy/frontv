<template>
  <div class="login">
    <div class="content">
      <div class="logo">
        <img alt="Vue logo" src="../assets/filmy-horizontal.png" />
      </div>
      <div class="login-form">
        <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 18 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            label="账号"
            name="username"
            :rules="[{ required: true, message: '请输入账号!' }]"
          >
            <a-input v-model:value="formState.username" />
          </a-form-item>

          <a-form-item
            class="ud_password"
            label="密码"
            name="password"
            :rules="[{ required: true, message: '请输入密码!' }]"
          >
            <a-input-password v-model:value="formState.password" />
          </a-form-item>

          <a-form-item name="remember" :wrapper-col="{ offset: 4, span: 16 }">
            <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
            <a-button type="primary" html-type="submit">登录</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
//导入路由器对象
// import { useRouter } from "vue-router";
import { $login } from "../api/login";

import { useRouter } from "vue-router";
// 必须要放到vue文件里面，不然$router是一个undifined
let $router = useRouter();

const formState = reactive({
  username: "",
  password: "",
  remember: true,
});

const onFinish = async (values) => {
  let { username, password } = values;
  let ret = await $login({ username, password });
  console.log(ret);
  if (ret) {
    // $router.push("/layout");
  }
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, rgb(0, 255, 200), skyblue);
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    width: 350px;
    // height: 200px;
    padding: 20px;
    border: 1px solid white;
    border-radius: 6px;
    background: white;
  }

  .logo {
    display: flex;
  }

  img {
    margin: auto;
    width: 200px;
    padding-bottom: 20px;
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

// input:-internal-autofill-selected {
//   background-color: rgb(223, 15, 15);
// }
</style>
