const client = require('../RedisClient')
module.exports = { 
    GetOperation: async function(JSONBody)
        {
            if(await client.HGET(`${JSONBody.TenantId}_${JSONBody.OMSId}`, `${JSONBody.ClientId}`)==null)
            {
                return "Account Doesn't Exist";
            }
            else
            {
                const HashName = `${JSONBody.TenantId}_${JSONBody.OMSId}`;
                const tmp = await client.HGET(HashName, `${JSONBody.ClientId}`);

                return tmp;
            }
        }
}
