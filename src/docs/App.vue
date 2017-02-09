<template>
  <div>
    <nav class="aui-header aui-dropdown2-trigger-group" role="navigation" data-aui-responsive="true">
      <div class="aui-header-primary">
        <h1 id="logo" class="aui-header-logo aui-header-logo-aui">
          <a href="http://example.com/"><span class="aui-header-logo-device">AUI</span></a></h1>
      </div>
    </nav>

    <section>
      <div class="aui-page-panel">
        <div class="aui-page-panel-inner">
          <div class="aui-page-panel-nav">
            <nav class="aui-navgroup aui-navgroup-vertical">
              <div class="aui-navgroup-inner">
                <ul class="aui-nav">
                  <li :class="{'aui-nav-selected': $route.path === '/'}">
                    <router-link to="/">Gettings started</router-link>
                  </li>
                </ul>
                <div class="aui-nav-heading">
                  <strong>Components</strong>
                </div>
                <ul class="aui-nav">
                  <li :class="{'aui-nav-selected': $route.path === page.path}" v-for="page in pages">
                    <router-link :to="page.path">{{ page.docsName }}</router-link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <section class="aui-page-panel-content">
            <router-view></router-view>
          </section>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        pages: this.$router.options.routes.filter(page => page.docsName)
      }
    }
  }
</script>

<style scoped>
</style>
