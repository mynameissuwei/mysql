const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const method = req.method; // GET POST

    // Get blog list
    if(method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listData = getList(author, keyword);
        return new SuccessModel(listData);
    }

    // Get blog detail
    if(method === 'GET' && req.path === '/api/blog/detail') {
        return {
            msg: 'This is a blog detail interface'
        }
    }

    // Create a new blog
    if(method === 'POST' && req.path === '/api/blog/new') {
        return {
            msg: 'This is a blog new interface'
        }
    }

    if(method === 'POST' && req.path === '/api/blog/update') {
        return {
            msg: 'This is a blog update interface'
        }
    }

    if(method === 'Delete' && path === '/api/blog/delete') {
        return {
            msg: 'This is a blog delete interface'
        }
    }

}


module.exports = handleBlogRouter;