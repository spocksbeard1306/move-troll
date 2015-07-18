var Control=React.createClass({
    mixins: [FluxMixin],
    handleUp:function(){
        var flux=this.getFlux();
        flux.actions.moveUp();
    },
    handleDown: function(){
        var flux=this.getFlux();
        flux.actions.moveDown();
    },
    handleLeft:function(){
        var flux=this.getFlux();
        flux.actions.moveLeft();
    },
    handleRight:function(){
        var flux=this.getFlux();
        flux.actions.moveRight();
    },
    render: function(){
        return(
            <div>
                <button onClick={this.handleUp}>Up</button>
                <button onClick={this.handleDown}>Down</button>
                <button onClick={this.handleLeft}>Left</button>
                <button onClick={this.handleRight}>Right</button>
            </div>
        );
    }
});

module.exports=Control;
