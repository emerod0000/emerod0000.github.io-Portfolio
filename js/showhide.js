    
            $(document).ready(function(){
                var readMoreHtml = $(".read-more").html();
                var lessText = readMoreHtml.substr(0, 100);
                if(readMoreHtml.length > 100){
                    $(".read-more").html(lessText);
                else{
                    $(".read-more").html(readMoreHtml);
                }
                
                $("body").on("click", ".read-more-link", function(event){
                     event.preventDefault();
                   $(this).parent.(".read-more").html(readMoreHtml).append("<a href='' class='show-less-link'> Read Less</a>")
                });
                $("body").on("click", ".show-less-link", function(event){
                    event.preventDefault();
                   $(this).parent.(".read-more").html(readMoreHtml.substr(0, 100)).append("<a href='' class='read-more-link'> Read More</a>")
                });
            });
            
