var _indexpage = {
	init: function(){
		var self = this;

		this.initHtml();
		this.bind();
	},
	initHtml: function(){
		var _hash = window.location.hash;
		
		// var _hash = _hash ? _hash : '#page1-1';
		var _hash = _hash ? _hash : '#page2';
		
		var page = _hash.split('#')[1];
		api.getHtml({
			url: './html/'+ page +'.html',
			callback: function (html) {
				$('.col_main').html(html);
				$('.dllistwrap img').zoomify();
				prettyPrint();
			},
			errorcallback: function(){
				$('.col_main').html('出错啦!');
			}
		});
		//添加菜单选中样式
		$('.col_side dl dd a').each(function(k,v){
			var h = $(v).attr('href');
			var otherh = _hash.split('-')[0];

			if( h == _hash || h == otherh ){
				$(v).parent().show().addClass('on').siblings().show();
				$(v).parents('dl').addClass('on');
			}
		});
	},
	bind: function(){
		var self = this;		

		//点击菜单
		$('#col_side').on('click','dt', function(){
			var $dl = $(this).parent('dl');
			var $alldd = $(this).siblings('dd');
			// console.log($alldd)
			if($alldd.length > 0){
				if($dl.hasClass('on')){
					$dl.removeClass('on');
					$alldd.hide();
				}else{
					$dl.addClass('on');
					$alldd.show();
				}
			} else {
				
				var _hrefHash = $(this).children('a').attr('href');
				var page = _hrefHash.split('#')[1];

				api.getHtml({
					url: './html/'+ page +'.html',
					callback: function (html) {
						$('.col_main').html(html);
						$('.dllistwrap img').zoomify();
						prettyPrint();
						$("body , html").animate({"scrollTop":0});
					},
					errorcallback: function(){
						$('.col_main').html('出错啦!');
					}
				});
			}
		}).on('click','dd>a', function(e){
			$('.col_side dl dd').removeClass('on');
			$(this).parent('dd').addClass('on');

			var _hrefHash = $(this).attr('href');
			var page = _hrefHash.split('#')[1];
			
			api.getHtml({
				url: './html/'+ page +'.html',
                callback: function (html) {
					$('.col_main').html(html);
					$('.dllistwrap img').zoomify();
					prettyPrint();
					$("body , html").animate({"scrollTop":0});
				},
				errorcallback: function(){
					$('.col_main').html('出错啦!');
				}
			});
		});

		//内容区域 a 链接跳转
		$('.col_main').on('click', '.markdown table a, .linklist dd a', function(){
			var _hrefHash = $(this).attr('href');
			var page = _hrefHash.split('#')[1];
			api.getHtml({
				url: './html/'+ page +'.html',
                callback: function (html) {
					$('.col_main').html(html);
					$('.dllistwrap img').zoomify();
					prettyPrint();
				},
				errorcallback: function(){
					$('.col_main').html('出错啦!');
				}
			});
			//改变左侧导航选中样式
			$('.col_side dl dd').removeClass('on');
			$('.col_side dl dd a').each(function(k,v){
				var h = $(v).attr('href');
				var otherh = _hrefHash.split('-')[0];

				if( h == _hrefHash || h == otherh ){
					$(v).parent().show().addClass('on').siblings().show();
					$(v).parents('dl').addClass('on');
				}
			});
		});

		//Q 展开 收起
		$('.col_main').on('click', '.dllistwrap dl dt', function(){
			var $dl = $(this).parent();
			if($dl.hasClass('on')){
				$dl.removeClass('on').find('dd').slideUp();
			}else{
				$dl.addClass('on').find('dd').slideDown();
			}
		});

		//面包屑 a 链接跳转
		$('.col_main').on('click', '../error.html'/*tpa=http://www.twterminal.com/js/.crumbswrap .link*/, function(){
			var _hrefHash = $(this).attr('href');
			var page = _hrefHash.split('#')[1];
			api.getHtml({
				url: './html/'+ page +'.html',
                callback: function (html) {
					$('.col_main').html(html);
					$('.dllistwrap img').zoomify();
					prettyPrint();
				},
				errorcallback: function(){
					$('.col_main').html('出错啦!');
				}
			});
			//改变左侧导航选中样式
			$('.col_side dl dd').removeClass('on');
			$('.col_side dl dd a').each(function(k,v){
				var h = $(v).attr('href');
				var otherh = _hrefHash.split('-')[0];

				if( h == _hrefHash || h == otherh ){
					$(v).parent().show().addClass('on').siblings().show();
					$(v).parents('dl').addClass('on');
				}
			});
		});

		// 页脚技术支持
		$('.fl-footer').on('click', '.supportlink a', function(){
			$("html,body").animate({"scrollTop":0})
			var _hrefHash = $(this).attr('href');
			var page = _hrefHash.split('#')[1];
			api.getHtml({
				url: './html/'+ page +'.html',
                callback: function (html) {
					$('.col_main').html(html);
					$('.dllistwrap img').zoomify();
					prettyPrint();
				},
				errorcallback: function(){
					$('.col_main').html('出错啦!');
				}
			});
			//改变左侧导航选中样式
			$('.col_side dl dd').removeClass('on');
			$('.col_side dl dd a').each(function(k,v){
				var h = $(v).attr('href');
				var otherh = _hrefHash.split('-')[0];

				if( h == _hrefHash || h == otherh ){
					$(v).parent().show().addClass('on').siblings().show();
					$(v).parents('dl').addClass('on');
				}
			});
		});
	}
};

$(function(){

	_indexpage.init();

});