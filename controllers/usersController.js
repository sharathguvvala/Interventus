module.exports.profile = function(req, res){
    res.render('userProfile', {title: "Profile"})
}

module.exports.SignUp = function(req, res){
    return res.render('userSignUp', {title: "Sign Up"})
}

module.exports.SignIn = function(req, res){
    return res.render('userSignIn', {title: "Sign In"})
}