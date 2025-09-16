import { App, Component, Ref } from 'vue'
import { Awaitable, Router, SiteData } from 'vitepress'
import Layout from './Layout.vue'

interface ITheme {
  /**
   * Root layout component for every page
   * @required
   */
  Layout: Component
  /**
   * Enhance Vue app instance
   * @optional
   */
  enhanceApp?: (ctx: IEnhanceAppContext) => Awaitable<void>
  /**
   * Extend another theme, calling its `enhanceApp` before ours
   * @optional
   */
  extends?: ITheme
}

interface IEnhanceAppContext {
  app: App // Vue app instance
  router: Router // VitePress router instance
  siteData: Ref<SiteData> // Site-level metadata
}

export default { 
  Layout,
  enhanceApp({ app , router, siteData}) {
  
  }
} as ITheme;