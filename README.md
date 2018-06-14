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

3. 在{{item}}中增加3个... 可以使得在模板文件中不用再使用{{item.xxxx}}
    ```<template is="postItem" data="{{...item}}"></template>```
    模板文件：
    ```javascript
        <template name="postItem">
            <view class="post-container">
                <view class="post-author-date">
                    <image class="post-author" src="{{avatar}}"></image>
                    <text class="post-date">{{date}}</text>
                </view>
                <text class="post-title">{{title}}</text>
                <image class="post-image" src="{{imgSrc}}"></image>
                <text class="post-content">{{content}}</text>
                <view class="post-like">
                    <image class="post-like-image" src="../../images/icon/chat.png"></image>
                    <text class="post-like-font">{{collection}}</text>
                    <image class="post-like-image" src="../../images/icon/view.png"></image>
                    <text class="post-like-font">{{reading}}</text>
                </view>
            </view>
        </template>
    ```
注：
1. 引用模板时。可以使用相对路径与绝对路径
例：



``` javascript
<import src="post-item/post-item-template.wxml"></import>
```

---