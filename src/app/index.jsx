window.React = require('react');
window.Fluxxor = require('fluxxor');
window.FluxMixin = Fluxxor.FluxMixin(React);
window.StoreWatchMixin = Fluxxor.StoreWatchMixin;
var flux = require("../component/astore.js");
var Container = require("../component/components.jsx");
console.log('holi');
React.render(<Container flux={flux} />, document.getElementById('container'));
