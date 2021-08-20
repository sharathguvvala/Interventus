const Post = require('../models/post')
const User = require('../models/user')

module.exports.home = async function(req, res){
    /* Post.find({},function(err,posts){
        return res.render('home.ejs', {
            title: "Interventus | Home",
            posts:posts
        })
    }) */

    /* Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err,posts){
        User.find({},function(err,users){
            return res.render('home.ejs', {
                title: "Interventus | Home",
                posts:posts,
                users:users
            })
        })
    }) */

    try{
        let posts = await Post.find({})
        .sort('-createdAt')
        .populate('user')
        .populate({
            path:'comments',
            populate:{
                path:'user'
            }
        })

    let users = await User.find({})

    return res.render('home.ejs', {
        title: "Interventus | Home",
        posts:posts,
        users:users
    })
    }
    catch(err){
        console.log('Error',err)
        return
    }
}