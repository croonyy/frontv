<template>
  <a-layout class="layout">
    <!-- 左侧 -->
    <a-layout-sider class="left_sider" collapsedWidth="40" v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo-container" @click="$router.push('/')">
        <div class="logo-content">
          <!-- <img src="../assets/filmy-horizontal.png" alt="logo"> -->
          <img src="../assets/logo.png" alt="logo" />
          <span v-if="!collapsed" class="ant-menu-title-content ud_title">Filmy</span>
        </div>
      </div>
      <!-- <a-menu v-model:openKeys="openKeys" 
            v-model:selectedKeys="selectedKeys" 
            mode="inline" 
            theme="dark"
            :inline-collapsed="collapsed"
            > -->
      <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" theme="dark">
        <a-sub-menu key="sub1">
          <template #icon>
            <UserOutlined />
          </template>
          <template #title>Navigation One</template>
          <a-menu-item key="1">Option 5</a-menu-item>
          <a-menu-item key="2">Option 6</a-menu-item>
          <a-menu-item key="3">Option 7</a-menu-item>
          <a-menu-item key="4">Option 8</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <!-- 右侧 -->
    <a-layout class="container">
      <!-- 顶部 -->
      <a-layout-header class="header">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />

        <a-menu class="header-left" v-model:selectedKeys="current" mode="horizontal" theme="dark">
          <a-menu-item key="menu1">
            <template #icon>
              <bell-outlined />
            </template>
            菜单1
          </a-menu-item>
          <a-menu-item key="menu2">
            <template #icon>
              <mail-outlined />
            </template>
            菜单2
          </a-menu-item>
        </a-menu>

        <a-menu class="header-right" v-model:selectedKeys="current" mode="horizontal" theme="dark">
          <a-menu-item key="menu3">
            <template #icon>
              <bell-outlined />
            </template>
            菜单3
          </a-menu-item>
          <a-menu-item key="menu4">
            <template #icon>
              <mail-outlined />
            </template>
            菜单4
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #icon>
              <setting-outlined />
            </template>
            <template #title>用户</template>
            <a-menu-item key="setting:1">用户信息</a-menu-item>
            <a-menu-item key="setting:2">退出</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-header>
      <!-- 主体 -->
      <a-layout-content :style="{
        margin: '6px',
        padding: '6px',
        background: '#fff',
        minHeight: '280px',
      }">
        <a-button type="primary" @click="test()" style="margin-right: 5px">测试登录</a-button>
        <a-button type="primary" @click="test1()" style="margin-right: 5px">测试token头</a-button>
        <a-button type="primary" @click="test2()" style="margin-right: 5px">测试token过期</a-button>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import {
  MenuItem as AMenuItem,
  SubMenu as ASubMenu,
  Menu as AMenu,
  LayoutSider as ALayoutSider,
  LayoutHeader as ALayoutHeader,
  LayoutContent as ALayoutContent,
  Layout as ALayout,
  Button as AButton,
} from "ant-design-vue";

import {
  UserOutlined,
  BellOutlined,
  MailOutlined,
  SettingOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import { request, authRequest, checkToken } from "../utils/requests";


// import { useRouter } from "vue-router";
// let $router = useRouter();
// 选中的选项
let selectedKeys = ref(["1"]);
// 展开的选项
let openKeys = ref(["sub1"]);
// 是否折叠
let collapsed = ref(false);
// 顶部菜单选中的选项
const current = ref(["menu1"]);

const test = async () => {
  let ret = await request.post("login/", { username: 'yuan.yang', password: 'Croonyy923014' });
  console.log(ret.data);
};

const test1 = async () => {
  let ret = await authRequest.get("test/");
  console.log(ret.data);
};

const test2 = async () => {
  await checkToken()
};
</script>


<style scoped lang="scss">
.layout {
  width: 100vw;
  height: 100vh;

  .header {
    background: #fff;
    padding: 0;
    display: flex;
    // justify-content: space-between;
    background-color: #001529;

    height: 40px;
    align-items: center;
    font-weight: bold;
    // overflow: hidden;
  }

  .logo-container {
    // height: 32px;
    // background: rgba(255, 255, 255, 0.3);
    background: rgb(3, 94, 101);
    // border: solid 1px white;
    margin: 0px;
    cursor: pointer;
    height: 40px;
    overflow: hidden;

    .logo-content {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      img {
        height: 80%;
      }
    }
  }

  .trigger {
    font-size: 18px;
    line-height: 40px;
    padding: 0 10px;
    cursor: pointer;
    color: #ffffffa6;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }
}

.ud_title {
  margin: 0;
  // top:50%;
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin: 0 10px 0 10px;
}

.header-right,
.header-left {
  line-height: 40px;
}

.header-right {
  // position: absolute;
  // right: 0px;
  margin-left: auto;
}

// .logo-container,
// .header-left,
// .trigger {
//     z-index: 99;
// }

@media screen and (max-width: 768px) {

  //消失有效，回不来
  // .header-right,
  .trigger,
  .left_sider {
    display: none;
  }
}

.container {
  background-color: #cdcdcd;
}
</style>
