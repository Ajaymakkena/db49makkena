var Ant = require('../models/ant');
// List of all ants
exports.ant_list = function (req, res) {
    res.send('NOT IMPLEMENTED: ant list');
};
// for a specific ant.
// for a specific ant.
exports.ant_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Ant.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle ant create on POST.
exports.ant_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Ant();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"count":"regular", "type":13, "size":43.56}
    document.count = req.body.count;
    document.type = req.body.type;
    document.size = req.body.size;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle ant delete on DELETE.
exports.ant_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Ant.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle ant update form on PUT.
exports.ant_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Ant.findById( req.params.id)
 // Do updates of properties
 if(req.body.count)
 toUpdate.count = req.body.count;
 if(req.body.type) toUpdate.type = req.body.type;
 if(req.body.size) toUpdate.size = req.body.size;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// List of all ants
exports.ant_list = async function (req, res) {
    try {
        theAnt = await Ant.find();
        res.send(theAnt);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.ant_view_all_Page = async function (req, res) {
    try {
        theAnt = await Ant.find();
        res.render('ant', {
            title: 'ant Search Results',
            results: theAnt
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.ant_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Ant.findById( req.query.id)
    res.render('antdetail',
   { title: 'ant Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for creating a ant.
// No body, no in path parameter, no query.
// Does not need to be async
exports.ant_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('antcreate', { title: 'ant Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for updating a ant.
// query provides the id
exports.ant_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Ant.findById(req.query.id)
    res.render('antupdate', { title: 'ant Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle a delete one view with id from query
exports.ant_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Ant.findById(req.query.id)
    res.render('antdelete', { title: 'ant Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };