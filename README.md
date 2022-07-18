# 我的个人主页
这就是我的个人主页，你可以前往 [www.sunfuxiang.tk](https://www.sunfuxiang.tk) 查看实际效果。
> 注意，Gitub 在国内较不稳定，如果加载失败请一会后重试，还是不行请自行使用 **合法** 的 VPN 上网。

## 上手指南
以下指南将帮助你在本地机器上安装和运行该项目，进行开发和测试。

#### 安装要求
运行该项目必须要具备的条件及必须要安装的软件：
- 任意浏览器（需支持JavaScript、CSS，一般2020年以后的浏览器都支持）
- 下载后，**无需**互联网，即可运行

#### 安装步骤
安装有3种方法：

<html>
<body>
<details open>
<summary>1. <strong>强烈推荐使用-适合新手</strong> 直接下载压缩包</summary>
直接点击 <a href="https://github.com/fuxiang1109/myhomepage/archive/refs/heads/main.zip">这里</a> 下载 ZIP 压缩包，然后将下载的 .zip 文件解压即可。<br />
<details>
<summary>上一步骤下载出错？</summary>
<em>你可以点击绿色 code 按钮（Google译为代码，Edge译为法典），在菜单中选择 Download ZIP （Google译为下载压缩包，Edge译为下载邮编），将下载的 .zip 文件解压即可。</em><br />
</details>
</details>
<details>
 <summary>2. 不推荐 HTTPS拉取 下载</summary>
 不推荐此方法，详见 <a href="https://docs.github.com/cn/get-started/getting-started-with-git/managing-remote-repositories#switching-remote-urls-from-https-to-ssh">此处</a>
</details>
<details>
 <summary>3. 不推荐 SSH拉取 下载</summary>
不推荐此方法，详见 <a href="https://docs.github.com/cn/get-started/getting-started-with-git/managing-remote-repositories#switching-remote-urls-from-https-to-ssh">此处</a>
</details>
除以上方法外，使用其他方法也行，只要下载成功（如是 ZIP 文件，请解压），即可。
</body>
</html>

#### 测试&使用
直接使用浏览器打开目录下的 index.html 即可进入离线网站。<br />

#### 更改网站
要更改网站文件，请自行修改 `index.html` 与 `myphoto.png` 。不会修改，可以在 [菜鸟教程](https://www.runoob.com/) 学习 HTML 和 JavaScript 。<br />
例如，可以将：
```xml
<div id="header">
    <h1 style="margin:0px;">孙福翔<br>个人主页</h1>
</div>
```
改为：
```xml
<div id="header">
    <h1 style="margin:0px;">你的名字<br>个人主页</h1>
</div>
```
也可以将 `myphoto.png` 替换为你的照片，但名字仍要是 `myphoto.png` 。<br />
要删除无用文件，可以把 `index.html`、`jquery.min.js`、`myphoto.png` **保留**，其余都**删除**。

#### 部署到 服务器/云托管
本网站设置了禁止搜索引擎搜索、追踪，如想让搜索引擎搜索、追踪，请：<br />
1. 删除 robot.txt<br />
2. 删除 index.html 第 10 行的
```xml
<meta name="robots" content="noarchive">
```
然后将目录里的 `index.html`、`jquery.min.js`、`myphoto.png` 上传服务器即可。<br />

## 作者
此网站全为 [孙福翔 @fuxiang1109](https://github.com/fuxiang1109) 一人完成，如果觉得我做的不错，可以支持一下作者哦！

### 联系我
邮箱 fuxiang1109@qq.com<br />
GitHub [fuxiang1109](https://github.com/fuxiang1109)

## 版权说明
该项目签署了 MIT (麻省理工学院许可证) 授权许可。
```
权限              限制           条件
  √商业用途         ×责任          ①许可和版权声明
  √修改             ×保证
  √分配
  √私人使用
```
中文版请参阅 [LICENSE_CN.md](LICENSE_CN.md) 。注意，中文版为 Google+百度 翻译而成，仅供参考，以英文原版为准。<br />
英文版（原版）请参阅 [LICENSE.md](LICENSE.md) 。<br />

对于我的肖像（myphoto.png）的授权许可请参阅 [PORTRAIT AUTHORIZATION.md](PORTRAIT AUTHORIZATION.md)

## 鸣谢
- 灵感源于 [UP主康文昌的视频](https://www.bilibili.com/video/BV1hY411j7UM)
- 代码学习于 [菜鸟教程](https://www.runoob.com/)
- 网站托管与代码分享提供于 [GitHub](https://github.com/)
