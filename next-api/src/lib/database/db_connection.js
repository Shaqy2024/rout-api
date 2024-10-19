const username =  process.env.myusername
const password = process.env.mypassword

if (!username || !password){
      throw new Error("missing MongoDB Credentials")
}

export const connectionString = `mongodb+srv://${username}:${password}@cluster0.nubbi.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0`