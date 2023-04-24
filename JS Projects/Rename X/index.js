const fs = require('fs');
const path = require('path');
const replacethis = "vicky"
const replacewith = "Basant"
const preview = false
const folder = __dirname //gives the current folder
try {
    fs.readdir(folder, (err, data) => {

        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let oldfile = path.join(folder,item)
            let newfile =path.join(folder , item.replaceAll(replacethis, replacewith))
            if (!preview) {

                fs.rename(oldfile,newfile, () => {
                    console.log("Rename sucess",item,newfile)
                })
            }
            else {
                if ("data/" + item !== newfile) {
                    console.log("" + item + " will be rename to " + newfile)
                }
            }

        }
    })
} catch (err) {
    console.error(err);
}
