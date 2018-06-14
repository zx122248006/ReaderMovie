# Study
---
## Introduce

1. 一个用于学习的git文件夹


### Files introduction

1. ReaderMovie 学习用的小程序

#### 总结

##### 模板
---
1. 使用```<template name="xxx">```板标签，引入可以复用的页面文件。
    1. name 用于定义此模板的名称
    2. 在需要使用的页面中，使用```<import src='xxxx'>``` 标签进行引入，在需要使用的页面的位置使用```<template is='name' /> ```引入使用 。
    3. 在页面中使用模板文件时，还需要使用```data={{item}}``` 进行数据的赋值 。
    例如：

    ``` javascript
    <template  is="postItem" data="{{item}}"></template>
    ```
2. 在wxss中，使用```@import``` 引入模板样式文件。    

注：
1. 引用模板时。可以使用相对路径与绝对路径
例：

``` javascript
<import src="post-item/post-item-template.wxml"></import>
```

---