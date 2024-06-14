<template>
  <div>
    <h1>Contact</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { submitForm } from './methods';
import { IContactFormData } from './types';

export default defineComponent({
  name: 'Contact',
  setup() {
    const form = ref<IContactFormData>({
      name: '',
      email: '',
      message: '',
    });
    const handleSubmit = async () => {
      const result = await submitForm(form.value);
      if (result.success) {
        form.value = { name: '', email: '', message: '' };
      }
    };

    return {
      form,
      handleSubmit,
    };
  },
});
</script>

<style lang="scss" scoped></style>
