import conf from "../conf/conf";
import {Client,Account,ID} from "appwrite"
//service creation and it is future grade code full optimized
export class AuthService{
    client=new Client();
    account;
//02//but here we want to create an account when object is called so we used constructor 
//which is called when object is created and then we create an account using endpoint and project
//jab bhi uska object banega tab account create hoga means constructor call hoga
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client)
    }
//now we can change the constructor as per our need like if we want to use the firebase or any other
//backend sysetem then only by changing constructor changes 
//and we dont need to touch the creatAccount method we get our arguments email,pass,name



//03//now account creation we are using async await 
    async creatAccount({email,password,name}){
        try{
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            //here we want if account is successfully cretaed then it should login by usign a method
            if(userAccount){
                //call another method
                return this.login({email,password})
            }
            else{
                return userAccount;
            }
        }
        catch(error){
            throw error;
        }
    }

//04//now login method using same async await
    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        }
        catch(error){
            throw error;
        }
    }

//05//this method is for to check if user is logged in or not
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service::: getCurrentuser:: error ", error);
        }
        return null
    }

//06// logout funtion
    async logout(){
        try{
            await this.account.deleteSessions();
        }
        catch(error){
            console.log("Appwrite service :: logout::error",error);
        }
    }
}

//01//here we have created object from class Authservice and exoprted it so we can access its methods 

const authService =new AuthService()
export default authService