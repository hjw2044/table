
$(function(){

    //封装一个修改函数
    function changeFunction(a){
        var tr=$(a).parent().parent();
        if ($(a).val()==='修改'){

            for(var i=1;i<4;i++){
                //定义str为
                var str=tr.children().eq(i).text();
                tr.children().eq(i).html("<input type='text' value="+str+">")
            }
            $(a).val("确认")
        }
        else{
            $(a).val("修改");
            for(var u=1;u<4;u++){
                var value=tr.children().eq(u).children().val();
                tr.children().eq(u).html(value);
            }

        }



    }


    $("#choose").change(function(){
        if($(this).is(':checked')){
            $('[name="a"]').prop('checked',true)
        }
        else{
            $('[name="a"]').prop('checked',false)
        }
    });
//点击删除按钮
    $('.delete').click(function(){
        //删除所有属性为a的被选中的父级父级
        $('[name="a"]:checked').parent().parent().remove();
    });
    //点击class为change的修改按钮
    $('.change').click(function(){
        changeFunction(this);
        //定义tr
 /*       var tr=$(this).parent().parent();
        if ($(this).val()==='修改'){

            for(var i=1;i<4;i++){
                //定义str为
                var str=tr.children().eq(i).text();
                tr.children().eq(i).html("<input type='text' value="+str+">")
            }
            $(this).val("确认")
        }
        else{
            $(this).val("修改");
            for(var u=1;u<4;u++){
                var value=tr.children().eq(u).children().val();
                tr.children().eq(u).html(value);
            }

        }*/
    });


    $('.add').click(function(){
        var a=$('#tex1').val();
        var b=$('#tex2').val();
        var c=$('#tex3').val();
        if(a===""||b===""||c===""){
            alert("请输入正确的内容")
        }
        else{
            var tr=$('<tr></tr>');
            //添加第一个td
            var td1=$('<td></td>');
            var input1=$('<input type="checkbox"/>');
            input1.attr('name','a');
            input1.appendTo(td1);
            td1.appendTo(tr);


            //添加第二个td
            var td2=$('<td></td>');
            td2.text(a);
            td2.appendTo(tr);

            //添加第三个td
            var td3=$('<td></td>');
            td3.text(b);
            td3.appendTo(tr);

            //添加第四个td
            var td4=$('<td></td>');
            td4.text(c);
            td4.appendTo(tr);

            //添加第五个td
            var td5=$('<td></td>');
            var input2=$('<input type="button" value="修改"/>');
            input2.addClass("change");
            //点击运行changeFunction变量为this的函数
            input2.click(function(){
                changeFunction(this)
            });
            input2.appendTo(td5);
            td5.appendTo(tr);

            //把tr放入tbody
            tr.appendTo('#addtr');
        }

    });

});















/*

$('#btn').click(function(){
    for(var i=0;i<100;i++){
        var li=$('<li></li>');
        li.addClass('id1');
        li.text(i);
        li.appendTo('#list');
    }


});
*/

















