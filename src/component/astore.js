var constants={
    MOVE_LEFT: "MOVE_LEFT",
    MOVE_RIGHT: "MOVE_RIGHT",
    MOVE_UP: "MOVE_UP",
    MOVE_DOWN: "MOVE_DOWN"
};

var PosStore = Fluxxor.createStore({
    initialize: function(){
        this.data = {
            position:{
                pX: 200,
                pY: 200
            },
            offset:{
                dX: 10,
                dY: 10
            }
        }
        this.bindActions(
            constants.MOVE_LEFT,this.onMoveLeft,
            constants.MOVE_RIGHT,this.onMoveRight,
            constants.MOVE_UP,this.onMoveUp,
            constants.MOVE_DOWN,this.onMoveDown
        );
    }
    ,
    onMoveLeft: function(){
        this.data.position.pX -= this.data.offset.dX;
        this.emit("change");
    }
    ,
    onMoveRight: function(){
        this.data.position.pX += this.data.offset.dX;
        this.emit("change");
    },
    onMoveUp: function(){
        this.data.position.pY -= this.data.offset.dY;
        this.emit("change");
    },
    onMoveDown: function(){
        this.data.position.pY += this.data.offset.dY;
        this.emit("change");
    },
    getState: function(){
        return{
            posxy: this.data.position
        };
    }
});
var actions = {
    moveLeft: function(){
        this.dispatch(constants.MOVE_LEFT);
    },
    moveRight: function(){
        this.dispatch(constants.MOVE_RIGHT);
    },
    moveUp: function(){
        this.dispatch(constants.MOVE_UP);
    },
    moveDown: function(){
        this.dispatch(constants.MOVE_DOWN);
    }
};
var stores = {
    PosStore: new PosStore()
};                              // 

var flux = new Fluxxor.Flux(stores,actions);

module.exports = flux;
/*
flux.on("dispatch",function(type,payload){
    if(console && console.log){
        console.log("[Dispatch]",type);
    }
});
*/
