import {createTagRepeat, optimizeTemplateHTML} from '../../lib/utils.js';

export default optimizeTemplateHTML(`<div class="days">
  <div class="days-of-week">${createTagRepeat('button', 7, {class: 'dow'})}</div>
  <div class="datepicker-grid">${createTagRepeat('button', 42)}</div>
</div>`);
