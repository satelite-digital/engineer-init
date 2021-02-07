const examplePlugin = require("./.instantcode/plugins/example.plugin");

const main = async ()=>{

  let config = {
    "data" : require('./.instantcode/data.json'),
    "fileTemplates" : [
      {
        "src" : "./.instantcode/files/code.js",
        "dest" : "./src/index.js"
      },
      // You can use an additional "if" key and provide a function that will return either true or false.
      // Returning false will prevent a file for being generated. Your function will receive the data input for the template.
      // {
      //   "src" : "./.instantcode/files/module.js",
      //   "dest" : "./src/[id]/[id].module.js",
      //   "key" : "model",
      //   "if" : (model)=>{
      //     return model.code
      //   }
      // }
    ]
  }

  config = await examplePlugin(config)
  return config

}

module.exports = main()