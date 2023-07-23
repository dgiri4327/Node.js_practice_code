// export let x = 10;
// export let y = 20;   //not export bcz it gives error bcz it will not work on nodejs only work on js

module.exports={    //it will work and export
    x:10,
    y:20,
    z:function(){
        return 30;
    }
}
