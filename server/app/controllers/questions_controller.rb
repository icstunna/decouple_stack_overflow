class QuestionsController < ApplicationController
  before_filter :allow_cross_domain

  def index
    @questionz = Question.all
    render :json => {questions: @questionz}
  end

  def create
    @question= Question.new(question_params)
    @question.save
    render :json => {id: @question.id, title: @question.title, content: @question.content, vote_count: @question.vote_count}
  end

  private

  def allow_cross_domain
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, PATCH, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
  end

  def question_params
    params.require(:question).permit(:title, :content)
  end
end
