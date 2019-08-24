<template>
  <div id='page'>
    <div class='top-panel'>
      <div class='top-panel-bg-image'>
        <div class='top-panel-bg-gradient' />
      </div>
      <div class='avatar-container'>
        <div class='avatar-border-gradient'>
          <img src='../assets/avatar.png' />
        </div>
      </div>
      <button class='button text-normal-white'> PREMIUM </button>
      <div class='account-info'>
        <p class='text-normal-white'><span>{{page.user.name}}</span></p>
        <p class='text-normal-white'><span>{{page.user.nickname}}</span></p>
        <p v-if="page.user.signUpDate" class='text-normal-white'>in <span>Taklimakan</span> since {{page.user.signUpDate}}</p>
      </div>
      <div class='account-properties-wrapper'>
        <div class='account-properties-container'>
          <p class='text-normal-grey'>Rating</p>
          <p class='text-normal-black'>{{page.rating}}</p>
        </div>
        <div class='account-properties-container'>
          <p class='text-normal-grey'>Publications</p>
          <p class='text-normal-black'>{{page.publications}}</p>
        </div>
        <div class='account-properties-container'>
          <p class='text-normal-grey'>Subscribers</p>
          <p class='text-normal-black'>{{page.subs}}</p>
        </div>
        <div class='account-properties-container'>
          <p class='text-normal-grey'>Likes</p>
          <p class='text-normal-black'>{{page.likes}}</p>
        </div>
        <div class='account-properties-container'>
          <p class='text-normal-grey'>Structure</p>
          <p class='text-normal-black'>{{page.structure}}</p>
        </div>
        <div class='account-status-wrapper'>
          <p class='status-description text-normal-grey'>Status:</p>
          <p v-if="isStatusOnEdit" class='status text-normal-black'>Make your dreams come true...</p>
          <div class='edit-logo-bttn'>
            <img v-on:click="editStatus" src='../assets/edit.svg' />
          </div>
        </div>
      </div>
    </div>

    <RankLevelPanel v-bind:level-types="page.levelTypes" />

    <CareerPanel />

    <div class='full-info-spoiler'>
      <p class='text-normal-grey'>SHOW FULL INFORMATION <img src='../assets/arrow-down.svg' /></p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RankLevelPanel from '@/components/RankLevelPanel.vue'
import CareerPanel from '@/components/CareerPanel.vue'

export default {
  name: 'Page',
  components: {
    RankLevelPanel,
    CareerPanel,
  },
  computed: mapState(['page']),
  data() {
    return {
      isStatusOnEdit: true,
    }
  },
  mounted() {
    this.$store.dispatch('getUser')
  },

  methods: {
    editStatus(e) {
      this.isStatusOnEdit = !this.isStatusOnEdit
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '@/styles/index'

.full-info-spoiler
  width: 100%
  height: 54px
  background: #F7F8FE
  border-radius: 0px 0px 5px 5px
  display: grid
  @include font(12px, normal)
  p
    align-self: center
  img
    margin-left: .6em

.button
  width: 81px
  height: 26px
  background: linear-gradient(90deg, #E9AD39 6.9%, #FFDE68 93.1%)
  border-radius: 5px
  justify-self: center
  align-self: end
  grid-column-start: 0
  grid-column-end: 2
  grid-row-start: 2
  grid-row-end: 3
  z-index: 999
  margin-bottom: 3em
  padding: 0
  border: 0
  border-radius: 5px
  @include font(11px, bold)
  letter-spacing: 0.01em
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1)
  @media screen and (max-width: 700px)
    grid-column-start: 2
    grid-column-end: 3
    grid-row-start: 1
    grid-row-end: 2
    margin-bottom: .5em
    align-self: end
    justify-self: start

.account-info
  grid-column-start: 2
  grid-column-end: 3
  grid-row-start: 1
  grid-row-end: 2
  z-index: 10
  justify-self: start
  height: 60%
  align-self: end
  @media screen and (max-width: 700px)
    align-self: center
  p
    margin: 0
    padding: 0 0 5px 0
    text-align: left
    @include font(1em, normal)
    span
      letter-spacing: 0.02em
      @include font(0.9em, bold)
  p:first-child
    font-size: 1.5em


.account-properties-wrapper
  grid-column-start: 2
  grid-row-start: 2
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  width: 90%
  @media screen and (max-width: 700px)
    grid-column-start: 1
    grid-column-end: 3
    width: 95%
    margin: 0 auto
  .account-properties-container
    p
      text-align: left
    p:first-child
      @include font(12px, normal)
    p:last-child
      @include font(24px, bold)
  .account-status-wrapper
    width: 100%
    height: 50px
    margin: 0 auto
    background: #FFFFFF
    border: 1px solid #C8CFE7
    box-sizing: border-box
    box-shadow: 0px 2px 4px rgba(79, 61, 190, 0.08)
    border-radius: 5px
    display: grid
    grid-template-columns: 100px auto 50px
    .status-description
      width: 100px
      @include font(15px, normal)
      letter-spacing: 0.01em
      grid-column-start: 1
      grid-column-end: 2
    .status
      @include font(15px, bold)
      text-align: left
      grid-column-start: 2
      grid-column-end: 3
      height: 50px
    .edit-logo-bttn
      height: 50px
      grid-column-start: 3
      grid-column-end: 4
      width: 50px
      display: grid
      img
        cursor: pointer
        align-self: center
        justify-self: center


.top-panel
  margin: 0 auto
  /* min-width: 550px */
  height: 300px
  display: grid
  grid-template-columns: 219px auto
  grid-template-rows: 50% 50%
  @media screen and (max-width: 700px)
    grid-template-columns: 139px auto
  .top-panel-bg-image
    background-image: url('../assets/image.svg')
    background-repeat: no-repeat
    background-size: cover
    height: 50%
    grid-column-start: 1
    grid-column-end: 3
    grid-row-start: 1
    grid-row-end: 3
  .top-panel-bg-gradient
    height: 100%
    width: 100%
    background: linear-gradient(90deg, #0CA7D8 6.04%, #5E47EA 94.03%)
    border-radius: 5px 5px 0px 0px
    opacity: .8
  .avatar-container
    height: 165px
    width: 165px
    background: white
    border-radius: 50%
    grid-column-start: 1
    grid-column-end: 2
    grid-row-start: 1
    grid-row-end: 3
    justify-self: center
    align-self: center
    z-index: 10
    box-shadow: 0px 4px 4px rgba(79, 61, 190, 0.08)
    display: grid
    margin-bottom: 2em
    @media screen and (max-width: 700px)
      height: 115px
      width: 115px
      grid-column-start: 1
      grid-column-end: 2
      grid-row-start: 1
      grid-row-end: 2
      margin-bottom: 1em
    .avatar-border-gradient
      background: linear-gradient(90deg, #E9AD39 6.9%, #FFDE68 93.1%)
      border-radius: 50%
      border: .5em solid white
      display: grid
      @media screen and (max-width: 700px)
        border: .4em solid white
    img
      border-radius: 50%
      width: 122px
      height: 122px
      justify-self: center
      align-self: center
      @media screen and (max-width: 700px)
        width: 88px
        height: 88px
</style>
