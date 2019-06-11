
const CONDITIONS = {
  el: '#app',
  data: {
    yes: true,
    no: false,
  },
  template: `
  <div>
    <h1 v-if="yes">yes</h1>
    <h1 v-if="no">no</h1>
  
  <h1 v-if="no">
  Don't show
  </h1>
  <h1 v-else>SHOW</h1>
  <h1 v-if="no">No</h1>
  <h1 v-else-if="yes">hooray else-if</h1>
  <h1 v-else>else</h1>
  <template v-if="no">
  <h1>we are hideen</h1>
  <h1>so are in dark</h1>
  </template>
  <template v-if="yes">
  <h1>we are showing</h1>
  <h1>so we like to show</h1>
  </template>
  </div>
  
  `
}

export default CONDITIONS;

