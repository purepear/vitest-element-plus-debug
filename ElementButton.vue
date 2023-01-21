<script setup>
import { ElButton } from 'element-plus'
defineProps({ text: String })
</script>

<template>
  <ElButton type="primary">{{ text }}</ElButton>
</template>
