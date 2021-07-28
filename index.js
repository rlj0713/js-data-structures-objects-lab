// Write your solution in this file!

const driver = {
    name: "John",
    address: "111 Front St"
};

function updateDriverWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, { [key]: value });
};


function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromDriverByKey(object, key) {
    let newObject = Object.assign({}, object);
    delete newObject[key]
    return newObject;
}

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key]
    return object
}