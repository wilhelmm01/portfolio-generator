const profileDataArgs = process.argv.slice(2,process.argv.length);
const[name, github] = profileDataArgs;
const FileSystem = require('fs')
const generatePage = require("./src/page-template")



  FileSystem.writeFile('index.html', generatePage(name,github), err =>{
      if (err) throw err;
      console.log('Portfolio Complete! Check out index.html to see output!')
  })














// const printProfileData = profileDataArr => {
//     for (let i=0; i<profileDataArr.length; i++){
//         console.log(profileDataArr[i])
//     }

//     console.log("===================");
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem)
//     });
// };

// printProfileData(profileDataArgs);