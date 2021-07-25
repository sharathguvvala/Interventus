const Post = require('../models/post')
const { post } = require('../routes')

module.exports.home = function(req, res){
    /* Post.find({},function(err,posts){
        return res.render('home.ejs', {
            title: "Interventus | Home",
            posts:posts
        })
    }) */

    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home.ejs', {
            title: "Interventus | Home",
            posts:posts
        })
    })
}