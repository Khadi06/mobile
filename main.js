let user={
    name:"kdj",
    age:20,
    sizes:{
        height:200,
        width: 100
    }
};
let clone=Object.assign({}, user);
  clone.sizes.width===user.sizes.width;

  console.log(clone.name);
    
