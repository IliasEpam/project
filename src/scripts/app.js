import _ from 'lodash';
import $ from 'jquery';
import * as header from './components/header';
import * as content from './components/content';
import * as footer from './components/footer';
import * as menu from './components/menu';

header.init();
menu.init();
footer.init();
content.init();

console.log(_.VERSION, $.fn.jquery);