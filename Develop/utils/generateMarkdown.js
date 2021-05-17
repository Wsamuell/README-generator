// README template

const readMeTemplate = data => {
const {name, github, email, repository, title, description, installation, usage, license, programs} = data
return `
# ${title}
-----------

## Repository link
-------------------
${repository}

### Description
-------------------
${description}
### Purpose and Usage
---------------------
${usage}
### Programs Used
-----------------
${programs}

### Installation Required
------------------------
${installation}
### License
------------
![${license}](https://img.shields.io/badge/license-${license}-blue)


### Contact Information
------------------------
### Github: [${name}](https://github.com/${github})
#### Email: ${email}
    `};

module.exports = readMeTemplate;
