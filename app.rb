require 'sinatra'
require 'sinatra'
require 'sendgrid-ruby'
include SendGrid


get '/' do
	@message = "Hello, this is a variable created in the default route."
	erb :index
end

# get '/contact' do
# erb :contact
# end
#
# post '/contact' do
# 	@name = params[:email]
# 	@subject = params[:subject]
# 	@text = params[:text]
#
#
# 	from = Email.new(email: @name)
# 	to = Email.new(email: 'scrumboc@yahoo.com')
# 	subject = @subject
# 	content = Content.new(type: 'text/plain', value: @text)
# 	mail = Mail.new(from, subject, to, content)
#
# 	sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
# 	response = sg.client.mail._('send').post(request_body: mail.to_json)
# 	puts response.status_code
# 	puts response.body
# 	puts response.headers
# 	p @name
# 	redirect '/'
# end

get '/layout' do
	erb :layout
end

get '/about' do
	erb :about
end

get '/gallery' do
	erb :gallery
end

get '/contact' do
  erb :contact
end
