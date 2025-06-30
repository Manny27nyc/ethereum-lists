// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
function validateObject(whiteList, objToValidate, filePath) {
  const objKeys = Object.keys(objToValidate);
  objKeys.forEach(key => {
    if (!whiteList.hasOwnProperty(key)) {
      console.log(`Remove ${key} from ${filePath}`);
      process.exit(1);
    }
  });
}

module.exports = validateObject;
