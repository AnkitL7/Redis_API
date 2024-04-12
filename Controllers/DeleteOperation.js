const client = require('../RedisClient')
module.exports = { 
    RemoveOperation: async function(JSONBody)
        {
            if(await client.HGET(`${JSONBody.TenantId}_${JSONBody.OMSId}`, `${JSONBody.ClientId}`)==null)
            {
                return "Account Doesn't Exist";
            }
            else
            {
                const HashName = `${JSONBody.TenantId}_${JSONBody.OMSId}`;
                await client.HDEL(HashName, `${JSONBody.ClientId}`);

                return "Account Exist";
            }
        }
}
