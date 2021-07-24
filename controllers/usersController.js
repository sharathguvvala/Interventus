const User = require('../models/user')

module.exports.profile = function(req, res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(user){
                return res.render('userProfile', {title: "User Profile", user:user})
            }
            else{
                return res.redirect('/users/signin')
            }
        })
    }
    else{
        return res.redirect('/users/signin')
    }
}

module.exports.SignUp = function(req, res){
    return res.render('userSignUp', {title: "Sign Up"})
}

module.exports.SignIn = function(req, res){
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
            return res.redirect
        }
    })
}

module.exports.createSession = function(req,res){
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('Error in finding user in db');
            return
        }
        if(user){
            if(user.password!=req.body.password){
                return res.redirect('back')
            }
            res.cookie('user_id',user.id)
            return res.redirect('/users/profile')
        }
        else{
            return res.redirect('back')
        }
    })
}

module.exports.Signout = function(req,res){
    if(req.cookies.user_id){
        res.cookie('user_id','',{maxage:1})
        return res.redirect('/')
    }
    else{
        return res.redirect('/users/signin')
    }
}