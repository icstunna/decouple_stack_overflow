$(document).on('page:change', function() {
      var question_request = $.ajax({
        url: 'http://localhost:3000/questions',
        type: 'GET',
      }).done(function(data){
        for (var i=0; i < data.questions.length; i++) {
          $('.all_questions').append('<li><a class="question_link" data-id="'+data.questions[i].id+'" href="/questions/'+data.questions[i].id +'">'+data.questions[i].title+'</a></li>')
        }
      });

      $('body').on('click', '.question_link', function(event){
        event.preventDefault();
        var request = $.ajax ({
          url: 'http://localhost:3000/questions/'+$(this).data("id"),
          type: 'GET',
          dataType: 'JSON',
          data: {id: $(this).data("id")}
        }).done(function(data){
          $('.question').append('<h2><a href="/">'+data.title+'</a></h2><br><p>'+data.content+'</p>')
          $('.question').show();
          $('.container').hide();
          });
        });

      $('.new_question_form').on('submit', function(event) {
        event.preventDefault();
        var request = $.ajax ({
          url: 'http://localhost:3000/questions',
          type: 'POST',
          dataType: 'JSON',
          data: {question: { title: $('input.questions_title').val(), content: $('input.questions_content').val()}}
        }).done(function(data){
          $('.all_questions').append('<li><a href="/questions/'+data.id +'">'+data.title+'</a></li>')
        }).fail(function(data){
          console.log("epic fail")
        });
      });
});
