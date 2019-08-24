<template>
    <div class='career-panel-wrapper'>
        <div class='career-panel-container'>
            <h1 class='text-normal-black section-header'> Basic Data </h1>  
        </div>
        <div class='career-panel-container'>
            <h1 class='text-normal-black section-header'> Career </h1>
        </div>
    </div>
</template>

<script>
export default {
  name: 'careerPanel',
  props: ['careerData'],
}
</script>

<style scoped lang='sass'>
@import '@/styles/index'

.career-panel-wrapper
  width: 100%
  margin: 1em auto
  display: flex
  justify-content: space-around 
  min-height: 100px
  display: flex
  flex-wrap: wrap
  h1
    width: 90%
    margin: 2em
    border-bottom: 1px solid #E0E4F7

.career-panel-container
  width: 49%
  min-width: 300px
    
</style>

