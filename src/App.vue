<script setup lang="ts">
import type { CustomMouseMenuOptions } from '@howdyjs/mouse-menu'
import { MouseMenuCtx } from '@howdyjs/mouse-menu'
const options: CustomMouseMenuOptions = {
  params: { a: 1 },
  menuList: [
    {
      label: '打开',
      tips: 'Open',
      fn: (params, currentEl, bindingEl, e) => {
        console.log('open', params, currentEl, bindingEl, e)
      }
    },
    {
      label: '编辑',
      tips: 'Edit',
      fn: (params, currentEl, bindingEl, e) => {
        console.log('edit', params, currentEl, bindingEl, e)
        // 当返回false时，点击会后可阻止菜单关闭
        return false
      }
    },
    {
      label: '删除',
      tips: 'Delete',
      fn: (params, currentEl, bindingEl, e) => {
        console.log('delete', params, currentEl, bindingEl, e)
      }
    },
    {
      label: '重命名',
      tips: 'Rename',
      fn: (params, currentEl, bindingEl, e) => {
        console.log('rename', params, currentEl, bindingEl, e)
      }
    }
  ],
  // 菜单Open回调
  onOpen: (params, currentEl, bindingEl) => {
    console.log('onOpen', params, currentEl, bindingEl)
  },
  // 菜单Close回调
  onClose: (params, currentEl, bindingEl) => {
    console.log('onClose', params, currentEl, bindingEl)
  },
  // 移动端长按配置
  useLongPressInMobile: true,
  longPressDuration: 300,
  longPressPreventDefault: (e, el) => {
    console.log({ e, el })
    return false
  }
}
const isMobile = 'ontouchstart' in window
const onScroll = () => {
  MouseMenuCtx?.close()
}
</script>

<template>
  <div v-mouse-menu="options" class="box" @scroll="onScroll">
    <p class="text" style="height: 900px">
      {{ !isMobile ? 'Right click this box' : 'Long press this box' }}.
    </p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.box {
  width: 500px;
  width: min(90vw, 500px);
  height: 500px;
  background: #ffe0e0;
  margin: 0 auto;
  overflow-y: auto;
}
.text {
  font-size: 12px;
  color: #889;
  padding: 5px;
}
</style>
