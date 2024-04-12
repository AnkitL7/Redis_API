const client = require('../RedisClient')
module.exports = { 
    UpdatingOperation: async function(JSONBody)
        {
            if(await client.HGET(`${JSONBody.TenantId}_${JSONBody.OMSId}`, `${JSONBody.ClientId}`)==null)
            {
                return "Account Doesn't Exist";
            }
            else
            {
                const HashName = `${JSONBody.TenantId}_${JSONBody.OMSId}`;
                await client.HSET(HashName, `${JSONBody.ClientId}`, JSON.stringify(JSONBody));

                return "Account Exist";
            }
        }
}
