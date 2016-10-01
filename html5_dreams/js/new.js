/**
 * Created by pwwpche on 2016/7/31.
 */
define(
    function (require, exports, module) {
        if (window.seaJS_index) {
            require("caroufredsel");
            require("AntLine");
            require("mCustomScrollbar");
            require("fullPage");
            require("easing");
            require("fancybox");
            require("caroufredsel");
            var adaptation = require("adaptation");
            var makeMap = require("makeMap");
            var markerArr = [{
                title: "K2VC（险峰华兴）",
                content: "北京 朝阳区东三环北路38号院1号楼泰康金融大厦",
                point: "116.469841|39.926145",
                isOpen: 0,
                icon: {w: 21, h: 21, l: 0, t: 0, x: 6, lb: 5}
            }];
            makeMap(markerArr);
            $(".memb .scro").each(function () {
                $(this).find("ul").carouFredSel({
                    items: {visible: 6, width: 126, height: 165},
                    scroll: {items: 1, duration: 300, timeoutDuration: 3500, pauseOnHover: true},
                    prev: $(this).find(".sbtnsL"),
                    next: $(this).find(".sbtnsR")
                })
            });
            $(".team .imgBtn").each(function (index) {
                $(this).click(function () {
                    $(".team .scro").eq(index).show().siblings(".scro").hide();
                    $(this).addClass("z-hov").siblings(".imgBtn").removeClass("z-hov");
                    $(".memb .scro").eq(index).find("ul").carouFredSel({
                        items: {visible: 6, width: 126, height: 165},
                        scroll: {items: 1, duration: 300, timeoutDuration: 3500, pauseOnHover: true},
                        prev: $(this).find(".sbtnsL"),
                        next: $(this).find(".sbtnsR")
                    })
                })
            });
            $("#popMap").fancybox();
            var fixes = $(".fixed .ins"), ws = $(".fixed .ws"), fixeds = $(".fixed");

            function reCla() {
                fixes.removeClass("z-hov");
                ws.removeClass("z-hov")
            }

            function toCla(This) {
                fixeds.show();
                This.addClass("z-hov").siblings(".ins").removeClass("z-hov");
                ws.eq(This.index()).addClass("z-hov").siblings(".ws").removeClass("z-hov")
            }

            fixes.each(function () {
                $(this).click(function () {
                    toCla($(this))
                })
            });
            $("#fullpage").fullpage({
                easing: "easeOutCubic",
                scrollingSpeed: 700,
                anchors: ["headers", "ideas", "teams", "joins", "desks"],
                menu: false,
                loopBottom: false,
                scrollBar: true,
                scrollOverflow: true,
                afterLoad: function (anchorLink, index) {
                    if (index == 1) {
                        fixeds.hide()
                    } else {
                        if (index == 2) {
                            toCla(fixes.eq(1));
                            $(".idea h5").stop().animate({opacity: 1}, 800);
                            $(".idea .p1").stop().delay(200).animate({marginTop: 0, opacity: 1}, 800);
                            $(".idea .instro").stop().delay(500).animate({marginTop: 0, opacity: 1}, 800);
                            $(".idea .scrol").stop().delay(700).animate({marginTop: 0, opacity: 1}, 800);
                            $(".idea .tabs").stop().delay(900).animate({marginTop: 0, opacity: 1}, 800)
                        } else {
                            if (index == 3) {
                                toCla(fixes.eq(2));
                                $(".team h5").stop().delay(200).animate({opacity: 1}, 1000);
                                $(".team .leader").stop().delay(600).animate({opacity: 1}, 1000);
                                $(".team .memb").stop().delay(1000).animate({opacity: 1}, 1000)
                            } else {
                                if (index == 4) {
                                    toCla(fixes.eq(3));
                                    $(".join .job").stop().animate({opacity: 1, left: 0}, 1200);
                                    $(".join .cont").stop().animate({opacity: 1, left: 540}, 1200)
                                } else {
                                    if (index == 5) {
                                        toCla(fixes.eq(4));
                                        $(".desk .de").stop().animate({opacity: 1, marginLeft: 0}, 1000);
                                        $(".desk p").stop().animate({opacity: 1, marginTop: 0}, 1000);
                                        $(".desk .bts").stop().delay(1000).animate({opacity: 1}, 1000)
                                    }
                                }
                            }
                        }
                    }
                }
            });
            $(".logo_1").css("display", "block");
            $(".footer").css("display", "block");
            $(".jTab").each(function () {
                $(this).mCustomScrollbar({
                    scrollInertia: 600,
                    theme: "minimal",
                    mouseWheel: {scrollAmount: 150},
                    advanced: {updateOnContentResize: true},
                    keyboard: {scrollAmount: 60}
                })
            });
            $(".idea .tabs .imgbox").adaptation();
            $(".idea .onsrc li").adaptation();
            $(".members .items .imgbox").adaptation();
            var imgs = $(".idea .onsrc li img");
            imgs.each(function () {
                $(this).css({left: (168 - $(this).width()) / 2, top: (168 - $(this).height()) / 2})
            });
            $(".idea .onsrc").carouFredSel({
                auto: false,
                items: {visible: 5, width: 190, height: 168},
                scroll: {items: 1, duration: 300, timeoutDuration: 3500, pauseOnHover: true},
                prev: ".idea .scrol .ibtn_1",
                next: ".idea .scrol .ibtn_2"
            });
            $(".idea .onsrc li").each(function (i) {
                var index = i;
                $(this).mouseenter(function () {
                    $(this).addClass("z-hov").siblings("li").removeClass("z-hov");
                    $(".idea .tabs").eq(index).show().siblings(".tabs").hide()
                })
            });
            $(".join .cont .mail").AntLine();
            $(".scTab").carouFredSel({
                circular: false,
                items: 1,
                width: 402,
                auto: false,
                pagination: {
                    container: "#pager", anchorBuilder: function (nr) {
                        return "<h6>" + $(this).find("b").text() + "</h6>"
                    }
                }
            });
            $(".team .staff .title").click(function () {
                var This = $(this);
                $(this).parent().siblings().find(".members").stop().animate({width: 0, opacity: 0}, 400, function () {
                    This.parent().siblings().find(".members").hide();
                    This.siblings(".members").show().stop().animate({width: 750, opacity: 1}, 400)
                })
            });
            var bigTabTit = $(".inserAfter .bigTit h6"), bigTabCnt = $(".tabCnts");
            bigTabTit.each(function (index, elements) {
                $(elements).click(function () {
                    $(elements).addClass("z-hov").siblings("h6").removeClass("z-hov");
                    bigTabCnt.eq(index).show().siblings(".tabCnts").hide()
                })
            });
            bigTabCnt.each(function (index, elements) {
                $(elements).find(".pointLst li").each(funct\[ion (index2, elements2) {
                    $(elements2).click(function () {
                        $(elements2).addClass("z-hov").siblings("li").removeClass("z-hov");
                        $(elements2).parent().siblings(".intabc").eq(index2).show().siblings(".intabc").hide()
                    })
                })
            })
        }
    }
);