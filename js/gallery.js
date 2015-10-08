    function gallery(){
            $('#p1').click(function() { bootbox.alert('<img src="prakriti/1.jpg">'); });
            $('#w1').click(function() { bootbox.alert('<img src="world/21.jpg">'); });
            $('#e1').click(function() { bootbox.alert('<img src="expert/6.JPG">'); });
            $('#s1').click(function() { bootbox.alert('<img src="science/16.jpg">'); });
            $('#l1').click(function() { bootbox.alert('<img src="latex/11.JPG">'); });
            $('#p2').click(function() { bootbox.alert('<img src="prakriti/2.jpg">'); });
            $('#w2').click(function() { bootbox.alert('<img src="world/22.jpg">'); });
            $('#e2').click(function() { bootbox.alert('<img src="expert/7.JPG">'); });
            $('#s2').click(function() { bootbox.alert('<img src="science/17.jpg">'); });
            $('#l2').click(function() { bootbox.alert('<img src="latex/12.JPG">'); });
            $('#p3').click(function() { bootbox.alert('<img src="prakriti/3.jpg">'); });
            $('#w3').click(function() { bootbox.alert('<img src="world/23.jpg">'); });
            $('#e3').click(function() { bootbox.alert('<img src="expert/8.JPG">'); });
            $('#s3').click(function() { bootbox.alert('<img src="science/18.jpg">'); });
            $('#l3').click(function() { bootbox.alert('<img src="latex/13.JPG">'); });
            $('#p4').click(function() { bootbox.alert('<img src="prakriti/4.jpg">'); });
            $('#w4').click(function() { bootbox.alert('<img src="world/24.jpg">'); });
            $('#e4').click(function() { bootbox.alert('<img src="expert/9.JPG">'); });
            $('#s4').click(function() { bootbox.alert('<img src="science/19.jpg">'); });
            $('#l4').click(function() { bootbox.alert('<img src="latex/14.JPG">'); });
            $('#p5').click(function() { bootbox.alert('<img src="prakriti/5.jpg">'); });
            $('#w5').click(function() { bootbox.alert('<img src="world/25.jpg">'); });
            $('#e5').click(function() { bootbox.alert('<img src="expert/10.JPG">'); });
            $('#s5').click(function() { bootbox.alert('<img src="science/20.jpg">'); });
            $('#l5').click(function() { bootbox.alert('<img src="latex/15.JPG">'); });
           
        }
    var $itemsHolder = $('ul.thumbnails');
    var $itemsClone = $itemsHolder.clone(); 
    var $filterClass = "";
    $('ul.filter li').click(function(e) {
    e.preventDefault();
    $filterClass = $(this).attr('data-value');
        if($filterClass == 'all'){ var $filters = $itemsClone.find('li'); }
        else { var $filters = $itemsClone.find('li[data-type='+ $filterClass +']'); }
        $itemsHolder.quicksand(
          $filters,
          { duration: 1000 },
          gallery
          );
    });
    $(document).ready(gallery);