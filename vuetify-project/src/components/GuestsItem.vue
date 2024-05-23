<template>
  <div class="item">
    <div>
      <strong>
        Имя:
      </strong> 
      {{ guest.name }}
    </div>
  </div>
</template>
  
  
<script> //a component of a single guest value
  export default {
    props: {
      guest: {
        type: Object,
        required: true,
      }
    },
  }
</script>
