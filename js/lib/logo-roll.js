/**
 * logo Scroll
 * data:2017/6/29
 * auth:vivi
 **/
/*获取id节点的函数*/
$(function () {
    function getId(id) {
        return $('#' + id);
    }
    /*创建图片滚动对象(前四个参数是标签的id)*/
    function marquee(divElem, imgElem, lBut, rBut, imgWidth, speed, autoSpeed) {//参数含义(包含两组图片的div，包含一组图片的ul，左侧按钮，右侧按钮,图片宽度，单张图片滚动时间，图片滚动间隔时间)
        this.box = getId(divElem);
        this.img = getId(imgElem);
        this.lBut = getId(lBut);
        this.rBut = getId(rBut);//获取各个节点
        this.imgWidth = imgWidth;
        this.speed = speed;
        this.autoSpeed = autoSpeed;
        this.num = 0;//全局变量,用来进行条件控制
        var that = this;
        /*图片自动滚动函数*/
        this.autoGo = function () {
            that.num += that.imgWidth;
            that.box.animate({ right: "+=" + that.imgWidth + "px" }, that.speed);
            if (that.num >= that.img.width()) {
                that.num = 0;
                that.box.animate({ right: "0px" }, 0);
            }
        }
    }
    /*对象方法*/
    marquee.prototype = {
        /*图片的自动滚动*/
        autoScroll: function () {
            var that = this;
            auto = setInterval(this.autoGo, this.autoSpeed);
            this.box.mouseover(function () {
                clearInterval(auto);
            });
            this.box.mouseout(function () {
                auto = setInterval(that.autoGo, that.autoSpeed);
            })
            this.lBut.mouseover(function () {
                clearInterval(auto);
                if (that.num == that.img.width()) {
                    that.num = 0;
                    that.box.animate({ right: "0px" }, 0);
                }
            });
            this.lBut.mouseout(function () {
                auto = setInterval(that.autoGo, that.autoSpeed);
            });
            this.rBut.mouseover(function () {
                clearInterval(auto);
                if (that.num == 0) {
                    that.num = that.img.width();
                    that.box.animate({ right: that.img.width() + "px" }, 0);
                }
            });
            this.rBut.mouseout(function () {
                auto = setInterval(that.autoGo, that.autoSpeed);
                if (that.num == that.img.width()) {
                    that.num = 0;
                    that.box.animate({ right: "0px" }, 0);
                }
            });
        },
        /*单击左侧按钮,图片向右滚动*/
        leftScroll: function () {
            var that = this;
            this.lBut.click(function () {
                that.num += that.imgWidth;
                that.box.animate({ right: "+=" + that.imgWidth + "px" }, that.speed);
                if (that.num >= that.img.width()) {
                    that.num = 0;
                    that.box.animate({ right: "0px" }, 0);
                }
            });
        },
        /*单击右侧按钮,图片向坐滚动*/
        rightScroll: function () {
            var that = this;
            this.rBut.click(function () {
                that.num -= that.imgWidth;
                that.box.animate({ right: "-=" + that.imgWidth + "px" }, that.speed);
                if (that.num <= 0) {
                    that.num = that.img.width();
                    that.box.animate({ right: that.img.width() + "px" }, 0);
                }
            });
        }
    }
    var a = new marquee("div", "img", "but2", "but1", 170, 300, 5000);//初始化对象
    a.autoScroll();
    a.leftScroll();
    a.rightScroll();
});