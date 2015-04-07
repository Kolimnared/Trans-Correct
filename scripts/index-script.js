/**
 * Created by user on 28.3.2015 г..
 */
var make_button_active = function()
{
    //Get item siblings
    var siblings =($(this).siblings());

    //Remove active class on all buttons
    siblings.each(function (index)
        {
            $(this).removeClass('selected');
        }
    );


    //Add the clicked button class
    $(this).addClass('selected');
};

//Attach events to menu
$(document).ready(
    function()
    {
        $("nav>ul>li").click(make_button_active);
    }
);