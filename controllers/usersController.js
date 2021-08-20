const User = require('../models/user')

module.exports.profile = function(req, res){
    User.findById(req.params.id,function(err,user){
        return res.render('userProfile', {title: "Profile",profileUser:user})
    })
}

module.exports.update = function(req,res){
    if(req.user.id==req.params.id){
        User.findByIdAndUpdate(req.params.id,req.body,function(err,user){
            return res.redirect('back')
        })
    }
    else{
        return res.status(401).send('Unauthorized')
    }
}

module.exports.SignUp = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile')
    }
    return res.render('userSignUp', {title: "Sign Up"})
}

module.exports.SignIn = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile')
    }
    return res.render('userSignIn', {title: "Sign In"})
}

module.exports.create = function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('Error in finding user in db');
            return
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('Error in creating user in db');
                    return
                }
                return res.redirect('/users/signin')
            })
        }
        else{
            return res.redirect('/users/signup')
        }
    })
}

module.exports.createSession = function(req,res){
    return res.redirect('/')
}

module.exports.Signout = function(req,res){
    req.logout()
    return res.redirect('/')
}