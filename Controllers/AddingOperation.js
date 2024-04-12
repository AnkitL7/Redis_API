const client = require('../RedisClient')
module.exports = { 
    AddingOperation: async function(JSONBody)
        {
            const HashName = `${JSONBody.TenantId}_${JSONBody.OMSId}`;
            //const ClientId = `${JSONBody.ClientId}`;
            
            await client.hSet(HashName,JSONBody.ClientId,JSON.stringify(JSONBody));
            return "Success";
        }
}
