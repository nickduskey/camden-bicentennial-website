<template>
  <div class="column is-mobile is-three-quarters-tablet is-half-desktop">
    <h2 class="is-size-2">Register for the Parade</h2>
    <p>Prizes include:</p>
    <p>
      <ul>
        <li>People's choice - Recipient is selected by most votes from the public.</li>
        <li>Best interpretation of an era from Camden.</li>
        <li>Best overall - best depicts the parades theme, craftsmanship and difficulty of construction.</li>
        <li>Community spirit - the entry which demonstrates the most local community spirit.</li>
        <li>Best youth float - youth group or organization 17 and under who bests conveys its message.</li>
      </ul>
    </p>
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
        <type-select />
        <description-input />
        <input
          type="hidden"
          name="_cc"
          value="keesleto@gmail.com,katieduskey@gmail.com"
          />
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
import TypeSelect from '@/components/TypeSelect'
import DescriptionInput from '@/components/DescriptionInput'

export default {
  name: 'register-form',
  components: {
    BaseInput,
    BaseButton,
    TypeSelect,
    DescriptionInput
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
