function VodController($scope, $http, $filter ) {
	$scope.categories = [];
	$scope.vodNews = {};
	$scope.channelPrograms ={};
	$scope.mostViewed ={};
	$scope.currentIndex = 0;

	$scope.init = function() {
		$scope.vodNews =  {
			photos:[{imageUrl: 'img/tmp/1.jpg',title: 'הכנה ליום הכיפורים',rav: 'הרבה עמנואל מזרחי', description: 'בראיון שהעניק לאחרונה איבתר בנאי לאחרונה, התייחס האמן האהוב לא מעט לנושא האמונה זכרונותיי מפליגים לימים שבהם נהגתי להגיע...', url: '#'},
			{imageUrl: 'img/tmp/2.jpg',title: '2הכנה ליום הכיפורים',rav: 'הרבה עמנואל מזרחי', description: 'בראיון שהעניק לאחרונה איבתר בנאי לאחרונה', url: 'https://www.google.co.il'},
			{imageUrl: 'img/tmp/3.jpg',title: '3הכנה ליום הכיפורים',rav: 'הרבה עמנואל מזרחי', description: 'בראיון שהעניק ', url: 'https://www.google.co.il'},
			{imageUrl: 'img/tmp/4.jpg',title: '4הכנה ליום הכיפורים',rav: 'הרבה עמנואל מזרחי', description: 'בראיון שהעניק לאחרונה איבתר בנאי לאחרונה, התייחס האמן האהוב לא מעט לנושא האמונה זכרונותיי מפליגים לימים שבהם נהגתי להגיע...', url: '#'},
			{imageUrl: 'img/tmp/5.jpg',title: '5הכנה',rav: 'הרבה עמנוי', description: 'בראיון שה  שבהם נהגתי להגיע...', url: 'https://www.google.co.il'},
			{imageUrl: 'img/tmp/6.jpg',title: '5הכנה',rav: 'הרבה עמנוי', description: 'בראיון שה  שבהם נהגתי להגיע...', url: 'https://www.google.co.il'},
			{imageUrl: 'img/tmp/9.jpg',title: '!!!2שני',rav: 'תוכניות הערוץ', description: 'בראיון שהעניק לאחרונ זכרונותיי מפליגים לימים שבהם נהגתי להגיע...', url: '#'}]
		};
		$scope.channelPrograms = {
			photos:[{imageUrl: 'img/tmp/5.jpg',title: '!!!!ראשון',rav: 'תוכניות הערוץ', description: 'בראיון שהעניק לאחרונה איבתר בנאי לאחרוונה זכרונותיי מפליגים לימים שבהם נהגתי להגיע...', url: '#'},
			{imageUrl: 'img/tmp/9.jpg',title: '!!!2שני',rav: 'תוכניות הערוץ', description: 'בראיון שהעניק לאחרונ זכרונותיי מפליגים לימים שבהם נהגתי להגיע...', url: '#'},
			{imageUrl: 'img/tmp/3.jpg',title: '!!3שלישי',rav: 'תוכניות הערוץי', description: 'בראיון שהעניק לאחרונה איבת זכרונותיי מפליגים לימים שבהם נהגתי להגיע...', url: '#'},
			{imageUrl: 'img/tmp/1.jpg',title: '!4רביעי',rav: 'תוכניות הערוץ', description: 'בראיון שהעניק לאשבהם נהגתי להגיע...'},
			{imageUrl: 'img/tmp/8.jpg',title: '!5חמישי',rav: 'תוכניות הערוץ', description: 'בראיון שהעניק לאחרונה איבתר בנאי לאם לימים שבהם נהגתי להגיע...', url: '#'}]
		};
		$scope.mostViewed = {
			photos:[{imageUrl: 'img/tmp/9.jpg',title: 'הנצפים ביותר',rav: 'הרבה עמנואל מזרחי', description: 'בראיון שהעניק לאחרונה איבתר בנאי לאחרונה, התייחס האמן האהוב לא מעט לנושא האמונה זכרונותיי מפליגים לימים שבהם נהגתי להגיע...', url: '#'},
			{imageUrl: 'img/tmp/3.jpg',title: '2הכנה ליום הכיפורים',rav: 'הרבה עמנואל מזרחי', description: 'בראיון שהעניק לאחרונה איבתר בנאי לאחרונה', url: 'https://www.google.co.il'},
			{imageUrl: 'img/tmp/2.jpg',title: '3הכנה ליום הכיפורים',rav: 'הרבה עמנואל מזרחי', description: 'בראיון שהעניק ', url: 'https://www.google.co.il'},
			{imageUrl: 'img/tmp/7.jpg',title: '4הכנה ליום הכיפורים',rav: 'הרבה עמנואל מזרחי', description: 'בראיון שהעניק לאחרונה איבתר בנאי לאחרונה, התייחס האמן האהוב לא מעט לנושא האמונה זכרונותיי מפליגים לימים שבהם נהגתי להגיע...', url: '#'},
			{imageUrl: 'img/tmp/8.jpg',title: '5הכנה',rav: 'הרבה עמנוי', description: 'בראיון שה  שבהם נהגתי להגיע...', url: 'https://www.google.co.il'},
			{imageUrl: 'img/tmp/1.jpg',title: '5הכנה',rav: 'הרבה עמנוי', description: 'בראיון שה  שבהם נהגתי להגיע...', url: 'https://www.google.co.il'}]
		};
		$scope.categories = [
		{
			url: 'https://www.google.co.il'
		},{
			categoryName: $scope.vodNews,
			name: 'VOD -חדש ב'
		},{
			categoryName: $scope.channelPrograms,
			name: 'תוכניות הערוץ'
		},{
			url: 'https://www.google.co.il',
			name: 'שידור חי'
		}, {
			url: 'https://www.google.co.il',
			name: 'המרצים'
		}, {
			url: 'https://www.google.co.il',
			name: 'נושאים'
		}, {
			categoryName: $scope.mostViewed,
			name: 'הנצפים ביותר'
		}, {
			url: 'https://www.google.co.il',
			name: 'לוח השידורים'
		}];
		$scope.currentCategory = $scope.vodNews;
		// $('.carousel-control').click(function(){
			
		// });
		

	};

	$scope.setCurrentCategory = function(categoryName) {
		categoryName.photos[0].active = true;
		$scope.currentCategory = categoryName;

	};

	$scope.nextVod = function() {

	};	

	$scope.prevVod = function() {

	};

	$scope.$on('$routeChangeSuccess', function() {
		/*alert("sss")*/
	});


}

 //cropped-images homepage carousel
 //     $count=$('.cropped-carousel-item').length;
 //     $width=parseInt($('.cropped-carousel-item').css("width"),10);
 
 //     $length=$count*$width*-1;
 //     $start=($width-(($(window).width()-980)/2));
 // if($start>0)
 //            $start*=-1;
  
 // $('.cropped-carousel-list').css("left",$start+'px');
        
 //      //prev*/
 //      $('.cropped-carousel-next').click(function(){
    

 //     $left= parseInt($('.cropped-carousel-list').css("left"),10);
 //    if($left < $length+$(window).width()+$start*-1){
 //        $('.cropped-carousel-item:first-child').insertAfter($('..cropped-carousel-item:last-child'));
 //        $('.cropped-carousel-list').css("left",$left+$width+'px');
       
 //        $('.cropped-carousel-list').animate({left: '-='+$width});
 //      }
 //    else
 //       $('.cropped-carousel-list').animate({left: '-='+$width});
 //       });
 //      //------------------------------------------------
 //     $('.cropped-carousel-prev').click(function(){
       
 //           $left= parseInt($('.cropped-carousel-list').css("left"),10);
 //           if($left<$start)
 //               {
 //                 $('.cropped-carousel-list').animate({left: '+='+$width});
 //               }
 //           else
 //               {
 //                   $('.cropped-carousel-item:last-child').insertBefore($('.cropped-carousel-item:first-child'));
 //           $('.cropped-carousel-list').css("left",$left-$width + 'px');
     
 //        $('.cropped-carousel-list').animate({left: '+='+$width});    
 //         }
 //        });
        
 //      /*-------------------------------------------------------------*/


