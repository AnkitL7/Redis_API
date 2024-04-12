const client = require('../RedisClient')
module.exports = { 
    AddingOperation: async function(JSONBody)
        {
            if(await client.HGET(`${JSONBody.TenantId}_${JSONBody.OMSId}`, `${JSONBody.ClientId}`)==null)
            {
                return "Client Doesn't Exist";
            }
            else{
                const HashName = `${JSONBody.TenantId}_${JSONBody.OMSId}_${JSONBody.ClientId}_${JSONBody.Token}`;
                //const ClientId = `${JSONBody.ClientId}`;
                
                await client.hSet(HashName,JSONBody.OrderId,JSON.stringify(JSONBody));
                return "Info Added";
            }
        }
}
