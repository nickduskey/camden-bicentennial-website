<template>
  <div class="column is-mobile is-three-quarters-tablet is-half-desktop">
    <h2 class="is-size-2">Register for the Parade</h2>
    <div class="box">
      <form
        id="registerForm"
        action="https://formspree.io/nickduskey@protonmail.com"
        method="POST"
      >
        <base-input
          type="text"
          label="Organization"
          placeholder="Your organization"
          name="organization"
        />
        <base-input
          type="text"
          label="Contact Person"
          placeholder="Contact Person"
          name="contact_person"
        />
        <base-input
          type="tel"
          label="Contact Phone"
          placeholder="(XXX) XXX-XXXX"
          name="contact_phone"
        />
        <base-input
          type="email"
          label="Contact Email"
          placeholder="your@email.com"
          name="contact_email"
        />
        <base-input
          type="text"
          label="Street Address"
          placeholder="Organization address"
          name="address_1"
        />
        <base-input
          type="text"
          label="City"
          placeholder="City"
          name="city"
        />
        <state-select />
        <base-input
          type="text"
          label="Zip Code"
          placeholder="Zip Code"
          name="zip_code"
        />
        <type-select />
        <base-button/>
      </form>
      <p class="is-size-7" id="terms">By submitting this form, your organization agrees to defend, indemnify and hold harmless the Village of Camden and the Camden Bicentennial Committee from any claim, demand, suit, loss, cost of expense or any damage which may be asserted, claimed or recovered against or from the municipality by reason of any damage to property, personal injury or bodily injury.</p>
      <p class="contactInfo">If you have any questions please contact <a href="mailto:keesleto@gmail.com">Toni Keesler</a></p>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput'
import BaseButton from '@/components/BaseButton'
import StateSelect from '@/components/StateSelect'
import TypeSelect from '@/components/TypeSelect'

export default {
  name: 'register-form',
  components: {
    BaseInput,
    BaseButton,
    StateSelect,
    TypeSelect
  }
}
</script>

<style scoped>
form {
  margin-top: 20px;
}
  #terms {
    margin-top: 20px;
  }
  .contactInfo {
    margin-top: 15px;
  }
  p {
    margin-bottom: 15px;
    margin-top: 15px;
  }
  .box {
    margin-top: 15px;
  }
</style>
