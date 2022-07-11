exports.main = async (event) => {
  const body = `
    <!DOCTYPE html>
    <!--
    我没想到真有人会用开发者工具/查看源代码
    -->
    <html lang="zh-CN">
    <head>
    <meta charset="utf-8">
    <title>孙福翔的个人主页</title>
    <meta name="robots" content="noarchive">
    <meta name="description" content="孙福翔的个人主页">
    <meta name="author" content="孙福翔">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    </head>
    <style>
        .arrow{
            border: 9px solid transparent;
            border-bottom-color: #ffffff;
            width: 0px;
            height: 0px;
            top:0px
        }
        .stick{
            width: 8px;
            height: 14px;
            border-radius: 1px;
            background-color: #ffffff;
            top:15px;
        }
        #back_top div{
            position: absolute;
            margin: auto;
            right: 0px;
            left: 0px;
        }
        #back_top{
            background-color: #656565;
            height: 38px;
            width: 38px;
            border-radius: 3px;
            display: block;
            cursor: pointer;
            position: fixed;
            right: 5%;
            bottom: 8%;
            display: none;
        }
    
    
        @media(min-width:0px)and(max-width:420px){
            body {
                background-color:#f6f6f6;
                font-family:"Times New Roman";
                font-size:5px;
                }
            }
        @media(min-width:420px)and(max-width:820px){
            body {
                background-color:#f6f6f6;
                font-family:"Times New Roman";
                font-size:10px;
                }
            }
        @media(min-width:820px){
            body {
                background-color:#f6f6f6;
                font-family:"Times New Roman";
                font-size:20px;
                }
            }
            a {
                text-decoration:none;
            }
            h1,h6 {
                margin-bottom:0;
                background-color:#aaaaaa;
            }
            h2,h5 {
                margin-bottom:0;
                background-color:#dbdbdb;
            }
            div{
                text-align:center;
            }
            
    </style>
    <body style="margin:0px;">
    
    <div id="article"></div>
    <div id="back_top">
        <div class="arrow"></div>
        <div class="stick"></div>
    </div>
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    
    <div id="container">
    
    <a href="https://sfx-3g3z8yi4e7a3bbd3-1311601057.ap-shanghai.app.tcloudbase.com/login">点击登录</a>
    
        <div id="header">
            <h1 style="margin-top: 0px;">孙福翔<br>个人主页</h1>
        </div>
    
        <div id="header1">
        <h2 style="margin-top: 0px;">基本信息</h2>
        </div>
        <div id="content1">
            <p>我是孙福翔 2009年11月9日出生</p>
            <img src="myphoto.png" width="300" height="450" alt="我的照片" title="干嘛,没见过帅哥啊!" onclick="photo()"><br>
            <small>这就是我</small><br>
            <a href="http://www.shizhong.gov.cn/art/2019/9/2/art_46286_3747144.html?xxgkhide=1" style="text-decoration:none;" target="_blank" rel="noopener noreferrer"  title="点击查看泉润学校简介">泉润学校</a>2016级2班梦想中队的学生<br>
            喜欢 和同学一起玩、读书、编程、<i title="你有什么权利把鼠标放到我的张茹茜身上!快给我拿走!" onclick="zrq()">张茹茜</i></p><br>
            是我们班的<strong title="不好吗?" onclick="bz()">“好”</strong>班长<br>
            </p>
        </div>
    
        <div id="header2">
            <h2>了解更多</h2>
        </div>
        <div id="content2">
            <p>
            <strong>
                关于我<br>
            </strong>
            1.没想好<br>
            2.同上<br>
            3.同上上<br>
            <strong>
                类别2<br>
            </strong>
            1.同上上上<br>
            2.同上上上上<br>
            3.同上上上上上<br>
            </p>
        </div>
    
        <div id="header3">
            <h2>联系方式</h2>
            </div>
        <div id="content3">
            <p>
                电话:18668986885<br>
                微信:18668986800(暂时不能用)<br>
                QQ:2062159179<br>
                QQ邮箱:fuxiang1109@qq.com<br>
    
                <small><i>如果你半夜给我发骚扰信息 我会很感谢你的</i></small>
            </p>
        
        </div>
    
        <div id="header4">
            <h2>小调查</h2>
            <h5 style="margin-top: 0px;">(虽然我看不到调查结果&#128541;)</h5>
        </div>
        <div id="content4">
        <p>
            我自己做的网站好吗?
            <script>
                var n=0;
                function good()
                {
                    alert("谢谢夸奖 我会继续努力的");
                }
                function bad()
                {   
                    document.write("<p>403 Forbidden<br>The server refused to execute the request<br></p>");
                    setTimeout(function () {
                        document.write('<p>哈哈哈 你被骗了<br>我只是一个小白 做的不好请多体谅 我会努力改进的<br>刷新(F5)以回到正常页面 或点击<a href="https://www.runoob.com/" style="text-decoration:none;" title="点击刷新">此处</a>后自动刷新<br>但我觉得你一定想知道这串英文是什么意思 去百度一下吧</p>')
                    }, 4000);
                }
                function photo()
                {
                    alert("干嘛,没见过帅哥啊!");
                }
                function zrq()
                {
                    if(n==0){
                        alert("你有什么权利碰我的张茹茜!!!快给我松手!!!");
                        n=1
                    }else{
                        while(true){
                            alert("我都说了你没有权利碰我的张茹茜!!!!!");
                        }
                    }
                    
                }
                function bz()
                {
                    alert("不好吗?");
                }
                </script>
            <button type="button" onclick="good()">好</button>
            <button type="button" onclick="bad()">不好</button>
        </p>
        </div>
    
        <div id="footer">
        <h6><small>
            版权 © 所有 侵权必究<br>
            鸣谢:
            <a href="https://www.bilibili.com/video/BV1hY411j7UM" style="text-decoration:none;" target="_blank" rel="noopener noreferrer" title="点击查看视频(或许…你也可以试试?)">up康文昌的视频</a> 给了我灵感
            <a href="https://www.runoob.com/" style="text-decoration:none;" target="_blank" rel="noopener noreferrer" title="点击前往菜鸟教程官网">菜鸟教程</a>教会我代码<br>
        </small>
        </h6>
    
    </div>
    
    
    
    <script>
        $(function(){
            $(window).scroll(function(){
            var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
            if( scrollt >200 ){
                $("#back_top").fadeIn(400);
            }else{
                $("#back_top").stop().fadeOut(400); 
            }
        });
        $("#back_top").click(function(){
            $("html,body").animate({scrollTop:"0px"},200);
        }); 
    });
    </script>
    </body>
    </html>

    `;
  return {
    statusCode: 200,
    headers: {
      "content-type": "text/html",
    },
    body: body,
  };
};
