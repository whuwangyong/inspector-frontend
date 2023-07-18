- 本项目基于 antd-pro 创建，使用 umi4 + simple 模板
- Node.js 版本为 v16.20.1
- 如何移除国际化
  - 模板创建好后，`npm run start`，打开浏览器查看效果，如果正常，git init/add/commit，然后再进行修改。如果改错了文件也能恢复
  - 直接`npm run i18n-remove`会报错，缺少两个依赖，先安装
    ```ts
    tyarn add eslint-config-prettier
    tyarn add eslint-plugin-unicorn
    ```
  - 装好了再次执行 i18n-remove，报错：
    ```
    Error: .eslintrc.js » D:\projects\inspector-frontend\node_modules\@umijs\lint\dist\config\eslint\index.js:
        Environment key "es2022" is unknown
    ```
    将报错的那一行注释掉即可。注意这个文件是不在 git 暂存范围内的。
  - 然后再次执行 i18n-remove，不报错了，但是却发现菜单的中文没有了。这是因为反复执行力多次 i18n-remove，这个命令不是幂等的，将文件改了几次。好在之前 git commit 做了备份。将文件回滚，再次执行 i18n-remove 即可。
- 依赖搞乱了，如何重新下载。删除项目内的 node_modules/、src/.umi、yarn.lock，重新执行 tyarn。删除的目录和文件不在 git 暂存范围内。
- 项目使用了 git hooks，对 commit msg 有格式要求
