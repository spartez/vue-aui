<template>
  <div>
    <nav class="aui-header aui-dropdown2-trigger-group" role="navigation" data-aui-responsive="true">
      <div class="aui-header-primary">
        <h1 class="aui-header-logo aui-header-logo-aui">
          <a href="#">
            <span class="aui-header-logo-device"></span>
          </a>
        </h1>
      </div>
      <div class="aui-header-secondary">
        <ul class="aui-nav">
          <li>
            <a href="https://github.com/spartez/vue-aui">
              <div class="aui-avatar aui-avatar-small">
                <div class="aui-avatar-inner">
                  <img src="http://oi65.tinypic.com/sm9g76.jpg">
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <section>
      <div class="aui-page-panel">
        <div class="aui-page-panel-inner">
          <div class="aui-page-panel-nav">
            <aui-nav-vertical>

              <aui-nav-group>
                <aui-nav-item name="Gettings started" href="#" :selected="$route.path === '/'"></aui-nav-item>
              </aui-nav-group>

              <aui-nav-header name="Components"></aui-nav-header>
              <aui-nav-group>
                <aui-nav-item v-for="page in pages" :name="page.meta.docsName" :href="'#' + page.path"
                              :selected="$route.path === page.path"></aui-nav-item>
              </aui-nav-group>
            </aui-nav-vertical>
          </div>
          <section class="aui-page-panel-content">
            <h2 class="class-header" v-if="$route.path !== '/'">{{$route.meta.docsName}}</h2>
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
        pages: this.$router.options.routes.filter(page => page.meta && page.meta.docsName)
      }
    }
  }
</script>

<style scoped>
  .aui-header .aui-header-logo-aui .aui-header-logo-device {
    background-image: url(http://oi66.tinypic.com/2r7at6s.jpg);
    width: 90px;
  }

  .class-header {
    margin-bottom: 30px;
  }
</style>
