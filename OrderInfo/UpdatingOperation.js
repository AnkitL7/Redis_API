const client = require('../RedisClient')
module.exports = { 
    UpdatingOperation: async function(JSONBody)
        {
            if(await client.HGET(`${JSONBody.TenantId}_${JSONBody.OMSId}`, `${JSONBody.ClientId}`)==null)
            {
                return "Client Doesn't Exist";
            }

            if(await client.HGET(`${JSONBody.TenantId}_${JSONBody.OMSId}_${JSONBody.ClientId}_${JSONBody.Token}`, `${JSONBody.OrderId}`)==null)
            {
                return "Account Doesn't Exist";
            }
            const HashName = `${JSONBody.TenantId}_${JSONBody.OMSId}_${JSONBody.ClientId}_${JSONBody.Token}`;
            await client.HSET(HashName, `${JSONBody.OrderId}`, JSON.stringify(JSONBody));
            return "Successfully Updated";
        }
}
