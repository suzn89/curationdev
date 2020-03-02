$(document).ready(function(){  
	$('.nav').hover(
		function(){
			$(this).animate({
				width:'230px'
			}, 500);
		}, function(){
			$(this).animate({
				width:'80px'
			},500);
		}
	);

	$('.category > .slidedown').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
				$this.parent().parent().find('.category .sub').removeClass('show');				
        $this.parent().parent().find('.category .sub').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
	});

	panelOpen = true;
  $('.leftSlide').click(function (e) { 
    e.preventDefault();
    if (panelOpen) {
			$(this).addClass('arrow');
			$('.mainWrap').addClass('leftnone_center');
				panelOpen=false;  
			$('.pushLeft').addClass('hiddenleft');
			$('.pushRight').addClass('hiddenleft');	
    } else {      
      $(this).removeClass('arrow');
			$('.mainWrap').removeClass('leftnone_center');
			$('.pushLeft').removeClass('hiddenleft');
				panelOpen=true;
			$('.pushRight').removeClass('hiddenleft');	
    }
  });
  rpanelOpen = true;
  $('.rightSlide').click(function (e) { 
    e.preventDefault();
    if (rpanelOpen) {
			$(this).addClass('arrow');			
      $('.mainWrap').addClass('rightnone_center');
				rpanelOpen=false;       
			$('.pushRight').addClass('hiddenright');
    } else {      
      $(this).removeClass('arrow');
      $('.mainWrap').removeClass('rightnone_center');
				rpanelOpen=true;
			$('.pushRight').removeClass('hiddenright');
    }
  });



	var modalLayer = $('.popupWrap');
  var viewModal = $('.view_more');
  var closeModal = $('.popup__close');
  modalLayer.hide();
  viewModal.on('click', function(e){
    e.preventDefault();
    modalLayer.show();
  });
  closeModal.on('click', function(){
		modalLayer.hide();
		e.preventDefault();
	});
	// document 클릭시 닫힘
  // $('.mask').on('click', function(){
  //   modalLayer.hide(500);
  // });
});
