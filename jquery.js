$(function() {
    $('.answer-btn1').click(function() {
        $('.answer-btn1').addClass('correct');
        $('.answer-btn1').html("Correct, It's Yellow!");
    });

    $('.answer-btn2').click(function() {
        $('.answer-btn2').addClass('incorrect');
        $('.answer-btn2').html("That's incorrect..");
    });

    $('.answer-btn3').click(function() {
        $('.answer-btn3').addClass('incorrect');
        $('.answer-btn3').html("That's incorrect..");
    });

    $('.answer-btn4').click(function() {
        $('.answer-btn4').addClass('incorrect');
        $('.answer-btn4').html("That's incorrect..");
    });

    $('.on-reset').click(function() {
        $('.answer-btn1, .answer-btn2, .answer-btn3, .answer-btn4').prop('disabled', true);
        $('.reset').css('display', 'block');
    });
});

reset();

function reset() {
    $('.reset').click(function() {
        $('.reset').css('display', 'none');
        $('.answer-btn1').removeClass('correct').html('Yellow');
        $('.answer-btn2, .answer-btn3, .answer-btn4').removeClass('incorrect');
        $('.answer-btn2').removeClass('correct').html('Blue');
        $('.answer-btn3').removeClass('correct').html('Green');
        $('.answer-btn4').removeClass('correct').html('Pink');
        $('.answer-btn1, .answer-btn2, .answer-btn3, .answer-btn4').prop('disabled', false);

    });
};

