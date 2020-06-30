import { join } from 'path'

export const CONFIG = {
  /**
   * 单页SPA源码静态资源
   */
  publicPath: '/public/',
  /**
   * 图片等静态资源
   */
  publicStaticPath: '/static/',
  /**
   * ssr重定向主页
   */
  index: '/home',
  port: 3000,
  /**
   * 代理服务器
   */
  api: '',
  /**
   * ssr模板
   */
  template: join(process.cwd(), 'public', 'index.html'),
  /**
   * csr同构入口
   */
  tplPoint: /\{\{__react-app__\}\}/,
}
