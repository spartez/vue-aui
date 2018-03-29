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
              <va-avatar src="http://oi65.tinypic.com/sm9g76.jpg" size="small"></va-avatar>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <section>
      <div class="aui-page-panel">
        <div class="aui-page-panel-inner">
          <div class="aui-page-panel-nav">
            <va-nav-vertical>

              <va-nav-group>
                <va-nav-item name="Getting started" href="#/" :selected="$route.path === '/'"></va-nav-item>
              </va-nav-group>

              <va-nav-header name="Components"></va-nav-header>
              <va-nav-group>
                <va-nav-item v-for="page in pages"
                              :key="page.path"
                              :name="page.meta.docsName"
                              :href="'#' + page.path"
                              :selected="$route.path === page.path"></va-nav-item>
              </va-nav-group>
            </va-nav-vertical>
          </div>
          <section class="aui-page-panel-content">
            <div class="aui-toolbar2" role="toolbar">
              <div class="aui-toolbar2-inner">
                <div class="aui-toolbar2-group">
                  <div class="aui-toolbar2-primary">
                    <h2 class="class-header" v-if="$route.path !== '/'">{{$route.meta.docsName}}</h2>
                  </div>
                  <div class="aui-toolbar2-secondary">
                    <va-buttons>
                      <va-button v-if="$route.meta.auiLink" :href="$route.meta.auiLink" target="_blank">
                        <va-icon>link</va-icon>
                      </va-button>
                      <va-button v-if="$route.meta.componentName" :href="githubLink" target="_blank">
                        <va-icon>file-code</va-icon>
                      </va-button>
                    </va-buttons>
                  </div>
                </div>
              </div>
            </div>
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
    },

    computed: {
      githubLink() {
        return `https://github.com/spartez/vue-aui/blob/master/src/docs/component/${this.$route.meta.componentName}.vue`
      }
    }
  }
</script>

<style scoped>
  .aui-header .aui-header-logo-aui .aui-header-logo-device {
    background-image: url(http://oi66.tinypic.com/2r7at6s.jpg);
    width: 90px;
  }

  .aui-header .aui-header-logo-aui a {
    padding: 0 20px;
  }

  .class-header {
    margin-bottom: 30px;
  }
</style>
