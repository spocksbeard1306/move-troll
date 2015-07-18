var ImagePos=require('./imagepos.jsx');
var Control=require('./control.jsx');

var Container=React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("PosStore")],
    getStateFromFlux: function(){
        var flux = this.getFlux();
        return flux.store("PosStore").getState();
    },
    render: function(){
        return(
            <div>
                <Control />
                <ImagePos pos={this.state.posxy} />
            </div>
        );
    }
});

module.exports=Container;
