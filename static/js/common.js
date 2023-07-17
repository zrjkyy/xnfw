'use strict';

$(function () {
	yll.init();
});

var yll = function ($) {
	var FZ = function FZ() {
		var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '20';
		var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '360';

		function getFZ() {
			var width = document.documentElement.clientWidth || document.body.clientWidth;
			var fontSize = a / b * width;
			return fontSize;
		};
		document.documentElement.style.fontSize = getFZ() + "px";
		window.onresize = function () {
			setTimeout(function () {
				document.documentElement.style.fontSize = getFZ() + "px";
			}, 100);
		};
	};
	var loading = {
		show: function show() {
			if ($('.preloader-overlay').length == 0) {
				$('body').append('<div class="preloader-overlay">' + '<div class="preloader-indicator-modal">' + '<span class="preloader"></span>' + '</div>' + '</div>');
			}
		},
		hide: function hide() {
			setTimeout(function () {
				$('body').find('.preloader-overlay').remove();
			}, 100);
		}
	};

	//全国本地切换
	//同时改变头部和内容的样式，当前选择的绑定class active
	var tabInit = function tabInit() {
		$('.m-tab-1,.m-tab-2').on('click', function () {
			if ($(this).hasClass('active')) {
				return;
			}
			$('.m-tab').find('.active').removeClass('active');;
			$(this).addClass('active');
			$('.m-tab-ct').find('.m-tab-ct-ele.active').removeClass('active');
			$('.m-tab-ct').find('.m-tab-ct-ele').eq($(this).index()).addClass('active');

			//选择不同tab 改变充值按钮的样式和可点击状态
			if ($(this).hasClass('m-tab-2')) {
				$('.m-button').attr('disabled', 'disabled');
				$('.m-button').parent('label').removeClass('j-btn-active');
			} else {
				if ($('.m-tab-ct-1 input[name="size"]:checked').length > 0) {
					$('.m-button').removeAttr('disabled');
					$('.m-button').parent('label').addClass('j-btn-active');
				}
			}
		});
	};

	var inputInit = function inputInit() {
		$('.m-tab-ct-1 input[name="size"]').attr('disabled', 'disabled');
		$('.m-button').attr('disabled', 'disabled');

		//模拟，输入11位时显示归属地，并出现价格且可选择
		$('#j-tel').on('input', function () {
			if ($(this).val().length == 11) {
				loading.show(); //出现loading图标

				//模拟loading一秒
				setTimeout(function () {
					$('.m-location').show(); //出现归属地
					$('.m-tab-ct-1').addClass('j-prize'); //出现价格
					$('.m-tab-ct-1 input[name="size"]').removeAttr('disabled'); //允许选择

					loading.hide(); //隐藏loading图标
				}, 1000);
			} else {
				$('.m-location').hide();
				$('.m-tab-ct-1').removeClass('j-prize');
				$('.m-tab-ct-1 input[name="size"]:checked').attr('checked', false);
				$('.m-tab-ct-1 input[name="size"]').attr('disabled', 'disabled');
				$('.m-button').attr('disabled', 'disabled');
				$('.m-button').parent('label').removeClass('j-btn-active');
			}
		});
		$('.m-tab-ct-1').find('label').on('click', function () {
			if ($('.m-tab-ct-1 input[name="size"]:checked').length > 0) {
				//选定的充值金额样式变化
				$('.m-tab-ct-1').find('.j-choose-active').removeClass('j-choose-active');
				$(this).addClass('j-choose-active');

				//充值按钮可点且样式变化
				$('.m-button').removeAttr('disabled');
				$('.m-button').parent('label').addClass('j-btn-active');
			}
		});
	};

	var init = function init() {
		FZ(20, 375);
		tabInit();
		inputInit();
	};
	return {
		init: init
	};
}(jQuery);