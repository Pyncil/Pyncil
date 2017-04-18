<template>
  <header class="app-header navbar">
    <slot></slot>
  </header>
</template>

<script>
'use strict'
export default {
  name: 'navbar',
  created () {
    this._navbar = true
  }
}
</script>
