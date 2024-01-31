<script setup>

import {useRouter} from "vue-router";
import {getCurrentInstance, reactive} from "vue";
import loginApi from "@/api/loginApi.js";
import {md5} from "js-md5";
import microApp from "@micro-zoe/micro-app";

const {proxy} = getCurrentInstance()
const router = useRouter();
const loginForm = reactive({
  account: 13277081267,
  password: 'a123456'
});

function onSubmit() {
  let params = loginForm
  params.password = md5(params.password)
  loginApi.accountLogin(params)
      .then(res => {
        console.log(res)
        const {success, data, message} = res
        if (success) {
          let {accessToken} = data
          proxy.$message.success('登录成功')
          microApp.setGlobalData({
            token: accessToken
          })
          router.push("/main/childHome")
        } else {
          proxy.$message.error(message)
        }
      })
}
</script>

<template>
  <div class="login-page">
    <span class="logo" @click="()=>router.push('/main/childHome')">DOSS直聘</span>
    <div class="login-panel">
      <div class="panel-left">
        <ul>
          <li>找工作，上DOSS直聘</li>
        </ul>
        <div class="img-card">
          <img src="" alt="">
        </div>
      </div>
      <div class="panel-right">
        <h2>DOSS直聘</h2>
        <el-form
            :model="loginForm"
            size="large"
        >
          <el-form-item prop="account">
            <el-input v-model="loginForm.account" placeholder="请输入账号" maxlength="11" clearable></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-btn" @click="onSubmit('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-page {
  height: calc(100vh);
  display: flex;
  justify-content: center;

  .logo {
    color: #ffd04b;
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    line-height: 24px;
    left: 15px;
    top: 10px;
    cursor: pointer;
  }

  .login-panel {
    height: 100%;
    display: flex;
    width: 100%;
    max-width: 1200px;
    justify-content: space-around;

    .panel-left,
    .panel-right {
      flex: 1;
      height: 100%;
      align-items: center;
      display: flex;
    }

    .panel-right {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .el-form {
        width: 60%;

        .login-btn {
          width: 100%;
        }
      }
    }
  }
}
</style>