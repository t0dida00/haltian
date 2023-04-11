const messageModel = require("../models/messageModel")

module.exports = {
    getData: async (req,res) => {
        // await messageModel.find((err, docs) => {
        //     if (!err) {
        //         res.render("list", {
        //             data: docs
        //         });
        //     } else {
        //         console.log('Failed to retrieve the Course List: ' + err);
        //     }
        // })

        messageModel.find()
            .then(function (docs) {
                
                res.send({
                    "list": docs,
                    "length": docs.length
                });

            })
            .catch(function (err) {
                console.log(err);
            });
    }
}