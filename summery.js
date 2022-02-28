const pen = {
    brand:'econo',
    price:10,
    writePoem: function(food) {
        console.log(food)
    }
}
const keys = Object.keys(pen);
const values = Object.values(pen);
for(const key in pen){
    console.log(pen[key]);
}
// learning next 
const a = {a:1};
const b = {a:1};
const c = a;
if(a===b){

}
// learning bind 
const aBounded = pen.writePoem.bind(a);
// fn calling
aBounded();
// direct not bind 
const Bbounded = pen.writePoem.call(b)
const BboundedApply = pen.writePoem.apply([b])
