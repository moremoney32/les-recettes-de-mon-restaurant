/** 
   * Point d'entree de l'application
   * @param {array} arrayOfElements
   * @return {array} 
 */
import {mocked} from "./mocked.mjs";

import {displayMock} from "./displayMock.mjs";

document.addEventListener("DOMContentLoaded",()=>{
    displayMock(mocked)
   
});