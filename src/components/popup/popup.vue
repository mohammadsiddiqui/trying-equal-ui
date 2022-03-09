<template>
  <it-modal v-model="open">
    <template #header>
      <h3>{{ props.header }}</h3>
    </template>
    <template #body>
      <div v-html="props.body"></div>
    </template>
    <template #actions>
      <it-button @click="open = false">{{ props.cancelText }}</it-button>
      <it-button :type="props.confirmType" @click="open = false">{{ props.confirmText }}</it-button>
    </template>
  </it-modal>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  header: {
    type: String,
    default: "Confirm",
  },
  body: {
    type: String,
    default: "Your message",
  },
  cancelText: {
    type: String,
    default: "Cancel",
  },
  confirmText: {
    type: String,
    default: "Confirm",
  },
  confirmType: {
    type: String,
    default: "primary",
  },
});

const open = ref(true);
</script>

<style scoped></style>
