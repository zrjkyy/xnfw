var _indexpage = {
	init: function(){
		var self = this;

		this.bind();
		this.inPhone();
	},
	inPhone: function(){
		//暂时这么做
		var windowWidth = $(window).width();
		if (windowWidth > 500) { //是PC
			
		} else { //是移动端
			$('a').attr('href','javascript:;');

			var d1 = $('.btn-dh').attr('data');
			$('.btn-dh').attr('href',d1);
			var d2 = $('.btn-zx').attr('data');
			$('.btn-zx').attr('href',d2);

			$('.box-cpfw .box-cont .tabcont .tabcontlist ul').css({
				width: '100%',
				overflow: 'hidden'
			});

			$('.box-cpfw .box-cont .tabcont .tabcontlist ul li dl').remove();
			$('.box-cgal .box-cont .ul-anlilist li .limask').remove();
		}
	},
	bind: function(){
		var self = this;

		//手风琴
		this.accordion();
		//首页banner图轮播
		// this.slider();
		//合作伙伴效果
		this.partner();
		//产品服务
		this.product();
		//精准高效的解决方案
		this.gaode();
		//成功案例
		this.successdemo();
	},
	accordion: function(){
		var stylearr = [
			[{width:'430px',height:'350px'},{width:'150px',height:'320px'},{width:'150px',height:'320px'},{width:'150px',height:'320px'},{width:'150px',height:'320px'},{width:'150px',height:'320px'}],
			[{width:'150px',height:'320px'},{width:'430px',height:'350px'},{width:'150px',height:'320px'},{width:'150px',height:'320px'},{width:'150px',height:'320px'},{width:'150px',height:'320px'}],
			[{width:'150px',height:'320px'},{width:'150px',height:'320px'},{width:'430px',height:'350px'},{width:'150px',height:'320px'},{width:'150px',height:'320px'},{width:'150px',height:'320px'}],
			[{width:'150px',height:'320px'},{width:'150px',height:'320px'},{width:'150px',height:'320px'},{width:'430px',height:'350px'},{width:'150px',height:'320px'},{width:'150px',height:'320px'}],
			[{width:'150px',height:'320px'},{width:'150px',height:'320px'},{width:'150px',height:'320px'},{width:'150px',height:'320px'},{width:'430px',height:'350px'},{width:'150px',height:'320px'}]
		];
		$('.box-jjfa .box-cont .ul-accordion li').hover(function(){
			var i = $(this).index();
			var s = stylearr[i];
			$('.box-jjfa .box-cont .ul-accordion li').each(function(k,v){
				$(v).stop(true, false).animate(s[k],200);
			});

			$(this).find('.limx').fadeIn(200);
			$(this).siblings('li').find('.limx').fadeOut(200);
		},function(){

		});
	},
	slider: function(){
		var self = this;
		var bannertimer = null;
		var bannercount = 0;

		$('.bannerwrap').hover(function(){
			clearInterval(bannertimer);
		},function(){
			bannertimer = setInterval(function(){
				bannercount ++;
				if(bannercount >= 4){
					bannercount = 0;
				}
				self.showLi(bannercount);
			},5000);
		}).trigger("mouseleave");

		$('.bannerwrap .slidernum li').click(function(){
			var _i = $(this).index();
			bannercount = _i;
			self.showLi(bannercount);
		});
	},
	showLi: function(num){
		$('.bannerwrap .slideritem li').fadeOut(400);
		$('.bannerwrap .slideritem li').eq(num).fadeIn(400);

		$('.bannerwrap .slidernum li').eq(num).addClass('on').siblings().removeClass('on');
	},
	partner: function(){
		var self = this;
		var num = 0;
		if($('.partnerlistwrap .partner-num li').length <= 1){
			$('.partnerlistwrap .partner-num li ,.btn-left , .btn-right').hide();
		}
		$('.partnerlistwrap .partner-num li').click(function(){
			var i = $(this).index();
			num = i;
			self.showPartnerList(num);
		});
		$('.btn-left').click(function(){
			var len = $('.partnerlistwrap .partner-num li').length - 1;
			if(num == 0){
				num = len;
			}else{
				-- num;
			}
			self.showPartnerList(num);
		});
		$('.btn-right').click(function(){
			var len = $('.partnerlistwrap .partner-num li').length - 1;
			if(num >= len){
				num = 0;
			}else{
				++ num;
			}
			self.showPartnerList(num);
		});
	},
	showPartnerList: function(num){
		$('.partnerlistwrap .partnerlist').fadeOut(300);
		$('.partnerlistwrap .partnerlist').eq(num).fadeIn(300);

		$('.partnerlistwrap .partner-num li').eq(num).addClass('on').siblings('li').removeClass('on');
	},
	product: function(){
		//切换
		$('.box-cpfw .box-cont .tabul li').click(function(){
			var i = $(this).index();
			$(this).addClass('on').siblings('li').removeClass('on');
			$('.box-cpfw .box-cont .tabcont .tabcontlist').eq(i).show().siblings('.tabcontlist').hide();
		});
		//hover
		$('.box-cpfw .box-cont .tabcont .tabcontlist ul li').hover(function(){
			// $(this).find('.innerli').stop(true,false).fadeIn(300);
			$(this).find('dl').stop(true,false).fadeIn(100);
			$(this).addClass('on').siblings('li').removeClass('on');
			$(this).stop(true,false).animate({marginTop:'-10px'},300);
		},function(){
			// $(this).find('.innerli').stop(true,false).fadeOut(300);
			$(this).find('dl').stop(true,false).fadeOut(100);
			$(this).removeClass('on');
			$(this).stop(true,false).animate({marginTop:'0px'},300);
		});
	},
	gaode: function(){
		$('.box-jjfa .box-cont .ul-gaode li').hover(function(){
			//设置index
			var arr = [6,5,4,3,2,1];
			var _index = $(this).index();
			for(var i=_index; i>=0; i--){
				$('.box-jjfa .box-cont .ul-gaode li').eq(i).css({'zIndex':i});
			}
			for(var i=_index; i<6; i++){
				$('.box-jjfa .box-cont .ul-gaode li').eq(i).css({'zIndex':arr[i]});
			}
			$(this).css({'zIndex':99});
			//控制样式
			$('../error.html'/*tpa=http://www.twterminal.com/js/.box-jjfa .box-cont .ul-gaode li .limx*/).hide();
			$('.box-jjfa .box-cont .ul-gaode li').stop(true,false).animate({height:'320px'},200);
			$(this).find('.limx').show();
			$(this).stop(true,false).animate({height:'350px'},200);
		},function(){
			
		});
	},
	successdemo: function(){
		$('.box-cgal .box-cont .ul-anlilist li').hover(function(){
			$(this).find('.limask').fadeIn(200);
		}, function(){
			$(this).find('.limask').fadeOut(200);
		});
	}
};

$(function(){

	_indexpage.init();

});