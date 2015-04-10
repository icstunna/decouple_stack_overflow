$(document).ready(function() {
  $(document).on('page:change', function() {
      var request = $.ajax({
        url: 'http://localhost:3000/questions',
        type: 'GET',
      });
      request.done(function(data){
        for (var i=0; i < data.questions.length; i++) {
          $('.all_questions').append('<li><a href="/questions/'+data.questions[i].id +'">'+data.questions[i].title+'</a></li>')
        }
      })

      $('.new_question_form').on('submit', function(event) {
        event.preventDefault();
        var request = $.ajax ({
          url: 'http://localhost:3000/questions',
          type: 'POST',
          dataType: 'JSON',
          data: {question: { title: $('input.questions_title').val(), content: $('input.questions_content').val()}}
        }).done(function(data){
          console.log("success")
        }).fail(function(data){
          console.log("epic fail")
        });
      });
  });
});
