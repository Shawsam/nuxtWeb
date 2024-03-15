<!-- 页面头部 -->
<template>
    <header>
    <nav>
      <ul class="menu">
        <li><NuxtLink to="/">首页</NuxtLink></li>
        <li><NuxtLink to="/about">关于</NuxtLink></li>
        <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  header{
     position: sticky;
    .menu{
      border-bottom: 1px solid #e8e8e8;
      box-sizing: border-box;
      height: 50px;
      line-height: 50px;
      display: flex;
      li{
        display: inline-block;
        padding:0 30px;
        a{
          color: #333;
          text-decoration: none;
          &.router-link-active{
            color: var(--primary-color);
          }
        }
      }
    }
  }
</style>