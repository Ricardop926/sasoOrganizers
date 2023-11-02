
const { connection, Factory } = require('../factory/query_factory')


async function getInicializarionData (req, res) {
    console.log("getInicializarionData")
    let sql_personData = `select * from tbl_personaldata limit 4`
    const res_personData = await Factory(sql_personData )

    let sql_projects = `select * from tbl_projects limit 4`
    const res_projects = await Factory(sql_projects )

    let sql_services = `select * from  tbl_services limit 4`
    const res_services = await Factory(sql_services)

    let sql_blog = `select * from  tbl_blog limit 4`
    const res_blog = await Factory(sql_blog)

    res.json({personData : res_personData, services: res_services, projects:res_projects, blog:res_blog})
}

async function getOneProject (req, res) {
    const { id_personalData } = req.params
    let sql = `select * from tbl_projects where id_personalData =  ${parseInt(id_personalData)}`
    const result = await Factory(sql)
    res.json(result)
}

async function getOneService (req, res) {
    const { id_services } = req.params
    let sql = `select * from tbl_services where id_services = ${parseInt( id_services)}`
    const result = await Factory(sql)
    res.json(result)
}

async function getOnePData (req, res) {
    const { id_projects } = req.params
    let sql = `select * from tbl_personaldata where id_projects = ${parseInt(id_projects)}`
    const result = await Factory(sql)
    res.json(result)
}

async function getOneBlog (req, res) {
    const { id_blog } = req.params
    let sql = `select * from tbl_blog where id_blog = ${parseInt(id_blog)}`
    const result = await Factory(sql)
    res.json(result)
}

async function getProjects (req, res) {
    let sql = `select * from tbl_projects`
    const result = await Factory(sql)
    res.json(result)
}

async function getServices (req, res) {
    let sql = `select * from tbl_services`
    const result = await Factory(sql)
    res.json(result)
}
async function getpData (req, res) {
    let sql = `select * from tbl_personaldata`
    const result = await Factory(sql)
    res.json(result)
}
async function getBlog (req, res) {
    let sql = `select * from tbl_blog`
    const result = await Factory(sql)
    res.json(result)
}
async function newProjects (req, res) {
    const { body, file } = req

    if(file) {

        let url = `http://localhost:8080/image/${file.filename}`
        let sql = `insert into tbl_projects (name_projects, image_url, descrip) values 
                    (${connection.escape(body.name_projects)}, ${connection.escape(url)}, ${connection.escape(body.descrip)})`

        const result = await Factory(sql)
        res.json(result)
    }
}

async function newService (req, res) {
    const { body, file } = req

    if(file) {
        
        let url = `http://localhost:8080/image/${file.filename}`
        let sql = `insert into tbl_services(name_services,icon_services, descrip_services) values 
                    (${connection.escape(body.name_services)}, ${connection.escape(url)}, ${connection.escape(body.descrip_services)})`

        const result = await Factory(sql)
        res.json(result)
    }
}

async function newPData (req, res) {
    const { body, } = req

    
        let sql = `insert into tbl_personaldata(name_personalData, descrip_personalData) values 
                    (${connection.escape(body.name_personalData,)}, ${connection.escape(body.descrip_personalData)})`

        const result = await Factory(sql)
        res.json(result)
   
}

async function newBlog (req, res) {
    const { body, file } = req

    if(file) {
        
        let url = `http://localhost:8080/image/${file.filename}`
        let sql = `insert into tbl_blog(blog_title,blog_img,blog_parrafo) values 
                    (${connection.escape(body.blog_title)}, ${connection.escape(url)}, ${connection.escape(body.blog_parrafo)})`

        const result = await Factory(sql)
        res.json(result)
    }
}







module.exports = {
    getInicializarionData,
    getOneProject, 
    getOneService,
    getOnePData,
    getOneBlog,
    getProjects, 
    getServices,
    getpData,
    getBlog, 
    newProjects,
    newService,
    newPData,
    newBlog
}
    