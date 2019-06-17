module.exports = {
    repair
}

// enhancer.repair should make durability 100
function repair(item){
    return item = {...item, durability: 100}
}

//when to commit: 
    // red, green, refactor - COMMIT;