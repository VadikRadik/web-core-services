import '../scss/style.scss';

import {initializeBrandsSection} from './brands.js';
import {initializeKindsSection} from './kinds.js';
import {initializePricesSection} from './prices.js';
import {createHandlers} from './menu-buttons-handlers.js';

initializeBrandsSection();
initializeKindsSection();
initializePricesSection();
createHandlers();


