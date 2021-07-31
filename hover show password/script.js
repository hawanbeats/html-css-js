var v = "";
        for(var i=0;i<$(".password").attr("content").length;i++)
        v+="*";
        $(".password").html(v);
        $(".eye").hover(function(e){
          $(".overlay").addClass("overhover");
          $(".password").addClass("passhover");
          $(".password").html($(".password").attr("content"));
        });
        $(".eye").mouseleave(function(e){
            $(".overlay").removeClass("overhover");
            $(".password").removeClass("passhover");
            $(".password").html(v);
        });