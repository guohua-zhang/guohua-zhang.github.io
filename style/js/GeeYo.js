//返回顶部
var sc = $(".to-top");
sc.bind("click", function() {
	$('html,body').animate({
		'scrollTop': 0
	}, 400);
});
$(window).scroll(function() {
	var scrtop = document.body.scrollTop;
	if(scrtop >= 100) {
		sc.show();
	} else {
		sc.fadeOut();
	}
});
//搜索
$(".sobtn").click(function() {
	$(".so").fadeIn();
});
$(".so .iconfont").click(function() {
	$(".so").fadeOut();
});
$(".so .form-control").click(function() {
	$(this).val('');
});
console.log("%c GeeYo %c Copyright \xa9 %s", 'font-family: "微软雅黑", Helvetica, Arial, sans-serif;font-size:64px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;', "font-size:12px;color:#999999;", (new Date).getFullYear());
