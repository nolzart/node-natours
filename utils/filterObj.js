module.exports = (obj, ...fields) => {
    const newObj = {};

    Object.keys(obj).forEach(el => {
        if (fields.includes(el)) newObj[el] = obj[el];
    });

    return newObj;
};
