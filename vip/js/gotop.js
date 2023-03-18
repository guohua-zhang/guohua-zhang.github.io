function b(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('#gotop').show();
	}else{
		$('#gotop').show();
	}
}
$(document).ready(function(e) {
	b();
	$('#gotop').click(function(){
		$("html,body").animate({ scrollTop: 0 },300);
	})
	$('#code').hover(function(){
			$(this).attr('id','code_hover');
			$('#code_img').show();
		},function(){
			$(this).attr('id','code');
			$('#code_img').hide();
	})
	
});
$(window).scroll(function(e){
	b();		
});