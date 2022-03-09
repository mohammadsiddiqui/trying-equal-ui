<template>
  <h1>Hello Equal Vue Components</h1>
  <it-divider />

  <div class="f">
    <it-button>Button</it-button>
    <it-button :loading="false" primary>Button</it-button>
    <it-button type="success">Button</it-button>
    <it-button type="danger">Button</it-button>
    <it-button type="warning">Button</it-button>
    <it-button type="black">Button</it-button>
  </div>

  <it-divider />
  <div class="f">
    <it-icon box box-color="#3051ff" color="#fff" name="info" />
    <it-icon box box-color="#07d85b" color="#fff" name="room" />
    <it-icon box box-color="#ff45c0" color="#fff" name="favorite" />
  </div>
  <it-divider />

  <it-dropdown clickable>
    <it-button>Hover me</it-button>
    <it-dropdown-menu slot="menu">
      <it-dropdown-item>Hello</it-dropdown-item>
      <it-dropdown-item disabled>Disabled</it-dropdown-item>
      <it-dropdown-item icon="cloud">Cloud</it-dropdown-item>
      <it-dropdown-item divided>Divided</it-dropdown-item>
    </it-dropdown-menu>
  </it-dropdown>
  <it-divider />
  <div class="f">
    <it-button @click="defaultModal = true">Modal</it-button>
    <it-button @click="openModal">Open Popup</it-button>
  </div>

  <it-modal v-model="defaultModal">
    <template #header>
      <h3>Sign up</h3>
    </template>
    <template #body>
      <div class="w1">
        <it-input labelTop="Email" prefix-icon="email" type="email" placeholder="yourmail@gmail.com" />
        <div class="w1 f">
          <div class="f1">
            <it-input labelTop="Second Name" placeholder="Doe" />
          </div>
          <div class="f1">
            <it-input class="f1" labelTop="First Name" placeholder="John" />
          </div>
        </div>
        <it-input labelTop="Username" prefix-icon="account_circle" placeholder="Unique Username" />
        <it-input
          labelTop="Password"
          prefix-icon="lock"
          type="password"
          placeholder="Must have at least 6 characters"
        />
        <div>
          <it-checkbox v-model="signincheckbox" label="I agree to our Terms of Service" />
        </div>
      </div>
    </template>
    <template #actions>
      <it-button block size="big" type="primary" @click="close">Sign up</it-button>
    </template>
  </it-modal>
</template>

<script setup>
import { ref } from "vue";
import { Notification } from "equal-vue";
import popup from "./components/popup";
const defaultModal = ref(false);
const signincheckbox = ref(true);
const close = () => {
  Notification({ text: "Very well, You got it" });
  defaultModal.value = false;
};

const openModal = () => {
  popup.open({ header: "Hello World" });
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f7f7f7;
}

.f {
  display: flex;
  column-gap: 1rem;
  row-gap: 1rem;
  flex-wrap: wrap;
}

.f1 {
  flex: 1 1 0%;
}

.w {
  width: 100%;
}

.it-modal-header {
  background-color: #f7fafc;
}

.it-modal-content {
  padding: 16px 24px !important;
}

.it-input-prefix-wrapper {
  margin-bottom: 1rem;
}

#app {
  max-width: 600px;
  padding: 0 10px;
  margin: 0 auto;
  background: white;
  min-height: 100vh;
}
</style>
