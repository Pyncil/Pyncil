<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <template v-for="route in routes">
          <li v-if="!route.children" class="nav-item">
            <router-link :to="'/' + route.path" class="nav-link" exact><i :class="route.icon"></i> {{ route.name }}</router-link>
          </li>
          <router-link v-else tag="li" class="nav-item nav-dropdown" :to="'/' + route.path" disabled>
            <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i :class="route.icon"></i> {{ route.name }}</div>
            <ul class="nav-dropdown-items">
              <li v-for="child in route.children" class="nav-item">
                <router-link :to="'/' + route.path + '/' + child.path" class="nav-link" exact><i :class="route.icon"></i> {{ child.name }}</router-link>
              </li>
            </ul>
          </router-link>
        </template>
      </ul>
    </nav>
  </div>
</template>

<script>
'use strict'
import routes from '../router/routes'

export default {
  name: 'sidebar',
  data () {
    return { routes }
  },
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
</style>
