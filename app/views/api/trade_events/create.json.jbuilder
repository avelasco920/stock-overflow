json.set! :company do
  json.partial! 'api/companies/company', company: @company, user: @user
end

json.set! :user do
  json.partial! "api/users/user", user: @user
end
