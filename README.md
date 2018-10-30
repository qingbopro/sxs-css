# sxs-css

## 简介

自家用页面基本元素及常用视图组件库。使用方式类似 bootstrap。

之所写这么个东西是因为，当时工作的公司还在jQuery...

所以为了自己方便，也为了提高团队开发效率写了这么个简单的东西。

根据公司项目特点，将reset和common的样式保存在了一个css文件里。

## 特点

**易理解**

将所有元素分为四个维度：大小、颜色、状态、修饰

```html
<!--按钮-->
<button class="buton">按钮</button>

<!--大按钮-->
<button class="button big">大按钮</button>

<!--红色按钮-->
<button class="button red">红色按钮</button>

<!--带边框按钮-->
<button class="button border">边框按钮</button>
```

**可定制**

通过修改 variables.less 文件，可自定义类名、颜色等

## 使用方法

```shell
npm i

gulp
```

用gulp构建的项目，自带热重载可以边写边看效果。
