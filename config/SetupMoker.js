const getFiles = require('node-recursive-directory');
var path = require('path');


/** 
 * 
 * @returns {newArray} all addresses in file mocks
*/
 const setupMocker = async() => {

        const files = await getFiles('mocks');
        const newArray = [];
        files.forEach(element => {
            const array = element.split('/');
            const arrayToDelete = '/' + array[array.length - 1];

            newArray.push(element.replace(arrayToDelete, '').replace('C:/Proyectos/starting-react/setup-proxy', ''));
        });
        return newArray;
    };

   module.exports = setupMocker;