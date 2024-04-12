const add = require('./AddingOperation');
const update = require('./UpdatingOperation');
const remove = require('./DeleteOperation');
const getOne = require('./GetOperation');
const getAll = require('./GetAllOperation');

module.exports = {
    FindOutOperation: async function(JSONBody)
    {

        switch(JSONBody.OperationType)
        {
            case 100:
                const first = await add.AddingOperation(JSONBody);
                return first;
            case 101:
                const second = await update.UpdatingOperation(JSONBody);
                return second;
            case 102:
                const third = await remove.RemoveOperation(JSONBody);
                return third;
            case 103:
                const fourth = await getOne.GetOperation(JSONBody);
                return fourth;
            case 104:
                const fifth = await getAll.GetAllOperation(JSONBody);
                return fifth;
            default:
                return "Wrong Choice";
        }
    }
}
