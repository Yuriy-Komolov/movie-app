<style scoped lang="scss">
@import './SignUp.scss';
</style>

<script lang="ts">
import FormInputView from '../../UI/FormInput/FormInput.vue';
// import CustomButton from '../../UI/Button/Button.vue';

export default {
  components: { FormInputView },

  data() {
    return {};
  },
};
</script>

<template>
  <main class="main">
    <section class="sign-page">
      <div class="sign__box">
        <a href="" class="sign__logo"
          >Movie<span class="text-thin">Rise</span></a
        >
        <h2 class="sign__title text">Register</h2>
        <form action="" class="form">
          <FormInputView :label="'Login'" :type="'text'" />
          <FormInputView :label="'Email'" :type="'email'" />
          <FormInputView :label="'Password'" :type="'password'" />
          <FormInputView :label="'Confirm Password'" :type="'password'" />
          <CustomButton>Create Account</CustomButton>
        </form>
      </div>
    </section>
  </main>
</template>
