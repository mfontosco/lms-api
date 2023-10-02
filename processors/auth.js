const Processor = {};
const database = require("../models/user");



Processor.user = async (data) => {
 try {
            const result = await database.oauthUser
                .findOne(data.email, {
                    attributes: {
                        exclude: ['password'],
                    },
                });
           return result
        } catch (error) {
          return error.message
        }
    
   
};