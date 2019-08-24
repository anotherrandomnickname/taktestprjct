<template>
<div class='rank-level-dashboard-wrapper'>
      <h1 class='section-header text-normal-black'> Rank and Level </h1>
      <div class='dashboard rank-level-dashboard-container'>
        <div class='rank-level-navigation-panel'> <img src='../assets/arrow-right.svg' /></div>
        <div v-on:click="selectRole(levelType)" v-for="levelType in levelTypes" v-bind:key="levelType.name" class='rank-type-container'>
          <img :src="levelType.src"/>
          <div class='stars-container'>
            <span v-for="(star, index) in 5" v-bind:key="star">
              <img :src="levelType.level > index ? require('../assets/star-gold.svg') : require('../assets/star.svg')" />
            </span>
          </div>
          <p class='text-normal-black'>{{levelType.name}}</p>
        </div>
        <div class='rank-level-navigation-panel'> <img src='../assets/arrow-left.svg' /></div>
      </div>
      <div class='dashboard rank-level-dashboard-container role-dashboard'>
        <h1>{{selectedRole.name}}</h1>
        <div class='role-dashboard-properties-container'>
          <p class='text-normal-grey'>Rating</p>
          <p class='text-normal-black'>{{selectedRole.properties.rating}}</p>
        </div>
        <div class='role-dashboard-properties-container'>
          <p class='text-normal-grey'>Publications</p>
          <p class='text-normal-black'>{{selectedRole.properties.publications}}</p>
        </div>
        <div class='role-dashboard-properties-container'>
          <p class='text-normal-grey'>Subscribers</p>
          <p class='text-normal-black'>{{selectedRole.properties.subs}}</p>
        </div>
        <div class='role-dashboard-properties-container'>
          <p class='text-normal-grey'>Likes</p>
          <p class='text-normal-black'>{{selectedRole.properties.likes}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'rankLevelPanel',
  props: ['levelTypes'],

  data() {
    return {
      selectedRole: this.levelTypes[0],
    }
  },

  methods: {
    selectRole(role) {
      this.selectedRole = role
      console.log(this.selectedRole)
    },
  },
}
</script>

<style scoped lang='sass'>
@import '@/styles/index'

.dashboard
  background: #F7F8FE
  border-radius: 5px
  min-height: 100px

.role-dashboard
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  h1
    height: 15px
    text-align: left
    width: 100%
    @include font(17px, bold)
  .role-dashboard-properties-container
    text-align: left
    height: 100px
    p
    p:first-child
      @include font(11px, normal)
    p:last-child
      @include font(15px, bold)
  .role-dashboard-properties-container:last-child
    text-align: right

.rank-level-dashboard-container
  display: flex 
  justify-content: space-around
  margin-top: .5em
  width: 301px
  height: 123px
  .rank-level-navigation-panel
    display: grid
    img
      justify-self: center
      align-self: center
      cursor: pointer
  .rank-type-container
    padding: .2em
    margin-top: .7em
    cursor: pointer
    p
      @include font(14px, bold)
      margin: .2em 0 0em 0
      padding: 0

.rank-level-dashboard-wrapper
  width: 100%
  margin: 1em auto
  display: flex
  flex-wrap: wrap
  justify-content: space-around
</style>