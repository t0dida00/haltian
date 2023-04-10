
const formidable = require('formidable');
const fs = require("fs")
const path = require('path');
const { prgMqtt } = require("../services/mqtt");

const uploadFile = (oldPath, newPath) => {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error(err)
      return "Upload file Error"
    }
  })
  return 'File uploaded successfully';

}
module.exports = {

  getData: async (req, res, next) => {
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      const cert_oldPath = `${files.cert.filepath}`;
     // const cert_newPath = 'certificates/' + files.cert.originalFilename;
      const key_oldPath = `${files.key.filepath}`;
      //const key_newPath = 'certificates/' + files.key.originalFilename;
      //const uploadCertificate = uploadFile(cert_oldPath, cert_newPath)
     // const uploadKey = uploadFile(key_oldPath, key_newPath)
      //const filePath = path.join(__dirname, "../certificates", 'MQTT_OPTION.txt');
      //console.log(filePath)

      //       var MQTT_OPTION_2 = `${fields.host},
      // ${fields.port},
      // ${fields.protocol},
      // ${cert_newPath},
      // ${key_newPath},
      // ${fields.topic}`

      //       fs.writeFile(filePath, MQTT_OPTION_2, (err) => {
      //         if (err) throw err;
      //         console.log('Data written to file!');
      //       });
      //
   

      setTimeout(() => {    
         var MQTT_OPTION = {
          host: fields.host,
          port: fields.port,
          protocol: fields.protocol,
          rejectUnauthorized: false,
          cert: fs.readFileSync(cert_oldPath),
          key: fs.readFileSync(key_oldPath)}
        try {
          prgMqtt(MQTT_OPTION, fields.topic,(CALLBACK => {return res.json(CALLBACK)}))
        }
        catch (error) {
          return error
        }
      }, "2000");

      //req.session.MQTT_OPTION = MQTT_OPTION

    });


  },
  disConnection: (req,res,next)=>{
    if(global.client)
    {
      global.client.end()
      global.client = null
      console.log("ended")
    }
    res.send("Disconnected")
    next()
  }

}


