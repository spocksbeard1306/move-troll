var ImagePos=React.createClass({
    render: function(){
        var sty={
            position:"absolute",
            left:(this.props.pos.pX+"px"),
            top:(this.props.pos.pY+"px")
        };
        return(
                <img src="/static/media/trollface.png" style={sty} />
        )
    }
});
module.exports=ImagePos;
