let settings = {
    
    db: {
      url: process.env.MONGODB_URL || 'mongodb://localhost:27017/crm_prj' 
    }
}

export default settings;