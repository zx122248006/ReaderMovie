# Study
---
## Introduce

1. 一个用于学习的git文件夹


### Files introduction

1. ReaderMovie 学习用的小程序

#### 总结

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
4.  在```<template>```中增加tapbind没有效果。需要循环出来数据的时候，可以在```<template>```外增加一个```<view>```标签，将点击事件增加到外部的```<view>```中
    使用```data-xxxx``` 自定义属性，来获取需要的属性,```item```用于获取本地数据中的文章的postId属性
    ```javascript
    <view catchtap="onPostTap" data-postId="{{item.postId}}"> 
        <template is="postItem" data="{{...item}}" ></template>
    </view>
    ```

5. 使用```even.currentTarget.dataset.xxx```来获取自定义属性```postId```的值
    ```even```:框架提供的事件对象;
    ```currentTarget```:鼠标当前点击的对象;
    ```dataset```:所有自定义属性的集合;
    ```xxx```：全部小写
    例：
    ``` javascript
    var postId = even.currentTarget.dataset.postid;
    ```


注：
1. 引用模板时。可以使用相对路径与绝对路径
例：



``` javascript
<import src="post-item/post-item-template.wxml"></import>
```

---