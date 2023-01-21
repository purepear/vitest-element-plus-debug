<script setup>
defineProps({ text: String })
</script>

<template>
  <ElButton type="primary">{{ text }}</ElButton>
</template>
