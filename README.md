
    JQuery实战项目 - 到位网
        页面布局已完成，采用flex布局，浮动，以及定位等方式
        首页导航部分点击切换使用jQuery的addClass()以及removeClass()方法完成
    
### 
   难题：
   
        1.背景轮播效果 - 暂未解决
            如何解决：先自己查找相关资料
   
###
   难题解决
   
        1.背景轮播
            如何解决：使用Swiper插件库
        2.首页导航到达特定情况下成为固定定位的效果
            如何解决：
                实时获取滚动条到顶部的垂直距离
                 
                 $(document).scroll(function(){
                    var scrollTop = $(document).scrollTop()
                 })
                 
                获取头部导航的总高度
                当滚到条距离顶部的垂直距离大于或者等于头部导航的总高度的情况下，将头部导航position属性设置为fixed
            测试效果    
###         
   查看的小方法
   
        获取浏览器显示区域（可视区域）的高度 ：   
        $(window).height();   
        获取浏览器显示区域（可视区域）的宽度 ：
        $(window).width();   
        获取页面的文档高度   
        $(document).height();   
        获取页面的文档宽度 ：
        $(document).width(); 
        浏览器当前窗口文档body的高度：  
        $(document.body).height();
        浏览器当前窗口文档body的宽度： 
        $(document.body).width();
        获取滚动条到顶部的垂直高度 (即网页被卷上去的高度)  
        $(document).scrollTop();   
        获取滚动条到左边的垂直宽度 ：
        $(document).scrollLeft(); 
        获取或设置元素的宽度：
        $(obj).width();
        获取或设置元素的高度：
        $(obj).height();
        某个元素的上边界到body最顶部的距离：obj.offset().top;（在元素的包含元素不含滚动条的情况下）
        某个元素的左边界到body最左边的距离：obj.offset().left;（在元素的包含元素不含滚动条的情况下）
        返回当前元素的上边界到它的包含元素的上边界的偏移量：obj.offset().top（在元素的包含元素含滚动条的情况下）
        返回当前元素的左边界到它的包含元素的左边界的偏移量：obj.offset().left（在元素的包含元素含滚动条的情况下）
 
###
    创建服务器，连接数据库
    使用template模板对页面进行编译
    