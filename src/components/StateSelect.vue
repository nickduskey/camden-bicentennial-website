<template>
  <div class="field is-grouped">
    <label
      for="stateSelect"
      class="label"
    >
      State
    </label>
    <div class="control">
      <div class="select">
        <select id="stateSelect" name="state">
          <option
            v-for="state in states"
            :key="state.abbreviation"
            v-bind:value="state.abbreviation"
            v-bind:selected="state.name === 'OHIO' ? true : false"
          >{{ state.name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'state-select',
  data () {
    return {
      states: [
        {
          name: 'ALABAMA', abbreviation: 'AL'
        },
        {
          name: 'ALASKA', abbreviation: 'AK'
        },
        {
          name: 'ARIZONA', abbreviation: 'AZ'
        },
        {
          name: 'ARKANSAS', abbreviation: 'AR'
        },
        {
          name: 'CALIFORNIA', abbreviation: 'CA'
        },
        {
          name: 'COLORADO', abbreviation: 'CO'
        },
        {
          name: 'CONNECTICUT', abbreviation: 'CT'
        },
        {
          name: 'DELAWARE', abbreviation: 'DE'
        },
        {
          name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'
        },
        {
          name: 'FLORIDA', abbreviation: 'FL'
        },
        {
          name: 'GEORGIA', abbreviation: 'GA'
        },
        {
          name: 'HAWAII', abbreviation: 'HI'
        },
        {
          name: 'IDAHO', abbreviation: 'ID'
        },
        {
          name: 'ILLINOIS', abbreviation: 'IL'
        },
        {
          name: 'INDIANA', abbreviation: 'IN'
        },
        {
          name: 'IOWA', abbreviation: 'IA'
        },
        {
          name: 'KANSAS', abbreviation: 'KS'
        },
        {
          name: 'KENTUCKY', abbreviation: 'KY'
        },
        {
          name: 'LOUISIANA', abbreviation: 'LA'
        },
        {
          name: 'MAINE', abbreviation: 'ME'
        },
        {
          name: 'MARYLAND', abbreviation: 'MD'
        },
        {
          name: 'MASSACHUSETTS', abbreviation: 'MA'
        },
        {
          name: 'MICHIGAN', abbreviation: 'MI'
        },
        {
          name: 'MINNESOTA', abbreviation: 'MN'
        },
        {
          name: 'MISSISSIPPI', abbreviation: 'MS'
        },
        {
          name: 'MISSOURI', abbreviation: 'MO'
        },
        {
          name: 'MONTANA', abbreviation: 'MT'
        },
        {
          name: 'NEBRASKA', abbreviation: 'NE'
        },
        {
          name: 'NEVADA', abbreviation: 'NV'
        },
        {
          name: 'NEW HAMPSHIRE', abbreviation: 'NH'
        },
        {
          name: 'NEW JERSEY', abbreviation: 'NJ'
        },
        {
          name: 'NEW MEXICO', abbreviation: 'NM'
        },
        {
          name: 'NEW YORK', abbreviation: 'NY'
        },
        {
          name: 'NORTH CAROLINA', abbreviation: 'NC'
        },
        {
          name: 'NORTH DAKOTA', abbreviation: 'ND'
        },
        {
          name: 'OHIO', abbreviation: 'OH'
        },
        {
          name: 'OKLAHOMA', abbreviation: 'OK'
        },
        {
          name: 'OREGON', abbreviation: 'OR'
        },
        {
          name: 'PENNSYLVANIA', abbreviation: 'PA'
        },
        {
          name: 'RHODE ISLAND', abbreviation: 'RI'
        },
        {
          name: 'SOUTH CAROLINA', abbreviation: 'SC'
        },
        {
          name: 'SOUTH DAKOTA', abbreviation: 'SD'
        },
        {
          name: 'TENNESSEE', abbreviation: 'TN'
        },
        {
          name: 'TEXAS', abbreviation: 'TX'
        },
        {
          name: 'UTAH', abbreviation: 'UT'
        },
        {
          name: 'VERMONT', abbreviation: 'VT'
        },
        {
          name: 'VIRGINIA', abbreviation: 'VA'
        },
        {
          name: 'WASHINGTON', abbreviation: 'WA'
        },
        {
          name: 'WEST VIRGINIA', abbreviation: 'WV'
        },
        {
          name: 'WISCONSIN', abbreviation: 'WI'
        },
        {
          name: 'WYOMING', abbreviation: 'WY'
        }
      ]
    }
  }
}
</script>

<style scoped>
.control {
  margin-left: 15px;
}
</style>
