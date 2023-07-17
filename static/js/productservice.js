var winHeight = window.innerHeight;
var st,rt;
var _productservicepage = {
	init: function(){
		var self = this;

		//this.scrollShow();

		this.bind();

	},
	bind: function(){
		var self = this;
		// $(window).scroll(function () {
		// 	self.scrollShow();
		// });
	},
	// scrollShow:function(){
	// 	st = $(window).scrollTop();
	// 	rt = st + winHeight;
	// 	if (rt > 750) {
	// 		$(".fl-productservice-view01 .fl-productservice-picbox").addClass('fadeInRight');
	// 		$(".fl-productservice-view01 .fl-productservice-descbox").addClass('fadeInLeft');
	// 	}
	// 	if (rt > 1350) {
	// 		$(".fl-productservice-view02 .fl-productservice-picbox").addClass('fadeInLeft');
	// 		$(".fl-productservice-view02 .fl-productservice-descbox").addClass('fadeInRight');
	// 	}
	// 	if (rt > 1950) {
	// 		$(".fl-productservice-view03 .fl-productservice-picbox").addClass('fadeInRight');
	// 		$(".fl-productservice-view03 .fl-productservice-descbox").addClass('fadeInLeft');
	// 	}
	// }
};

$(function(){
	_productservicepage.init();
});