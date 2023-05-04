//sem alterar o nome
import { inline } from "./inline.js"; 

// para alterar nome coloque "as".
//import { inline as i} from "./inline.js" 

// o default vc pode passar tanto o mesmo nome da variavel/function.
import defaultInline from "./inline.js";

//quanto também pode mudar o nome.
//import d from "./inline.js"

import { grup } from "./non-inline.js";

import exportDefault from "./non-inline.js";

// também consigo usar todos de uma vez.
//import exportDefault, { grup } from "./non-inline.js";

inline();
defaultInline();

grup();
exportDefault();
