<template>
  <div class="container">
    <p>用户昵称:{{ data?.result.user.nickName }}</p>
    <p>用户手机号:{{ data?.result.user.phone }}</p>
  </div>
</template>

<script setup lang="ts">
  //useFetch 是 useAsyncData 的语法糖 是在组件中请求数据最直接的方式
  const {
    data: data,
    pending,
    error,
    refresh
  } = await useFetch('/api/login/sms', {
    body: {
      registerCode: '',
      smsCode: '9999',
      source: 'PC',
      userName: '18616930245'
    },
    method: 'POST'
  })
  console.log(data.value)
</script>

<style>
  p {
    margin-bottom: 10px;
  }
</style>
