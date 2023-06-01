<template>
    <a-layout class="layout">
        <!-- 左侧 -->
        <a-layout-sider class="left_sider" collapsedWidth="40" v-model:collapsed="collapsed" :trigger="null" collapsible>
            <div class="logo-container" @click="$router.push('/')">
                <div class="logo-content">
                    <!-- <img src="../assets/filmy-horizontal.png" alt="logo"> -->
                    <img src="../assets/logo.png" alt="logo">
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
                minHeight: '280px'
            }">
                <button @click="test()">测试</button>
                <button @click="test1()">测试1</button>
                <button @click="test2()">测试2</button>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script setup>
import {
    UserOutlined,
    BellOutlined,
    MailOutlined,
    SettingOutlined,
    // VideoCameraOutlined,
    // UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { request } from '../utils/requests'
let $router = useRouter()
// 选中的选项
let selectedKeys = ref(['1'])
// 展开的选项
let openKeys = ref(['sub1'])
// 是否折叠
let collapsed = ref(false)
// 顶部菜单选中的选项
const current = ref(['menu1']);

const test = async () => {
    // let ret = await request.post("http://172.9.100.161:1155/rbac/login/",{username:'yuan.yang',password:'Croonyy923014'})
    // let ret = await request.post("http://192.168.1.4:1234/rbac/login/",{username:'admin',password:'123456'})
    let ret = await request.get("mock_test/")
    console.log(ret.data)
}

const test1 = async () => {
    let ret = await request.get("mock_test1/")
    console.log(ret.data)

}

const test2 = async () => {
    let ret = await request.post("mock_test2/", { 'a': 'a', 'b': 'b' })
    console.log(ret.data)
}

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
        color: #FFFFFFA6;
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