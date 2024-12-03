import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useLoginUserMutation, useRegisterUserMutation } from "@/feature/api/authApi"
import { Loader2 } from "lucide-react"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner";

export default function Login() {
    const [signupInput,setSignupInput]=useState({
        name:"",
        email:"",
        password:""
    })

    const [loginInput,setLoginInput]=useState({
        email:"",
        password:""
    })

    const [registerUser,{ data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,}]=useRegisterUserMutation();
    const [loginUser,{ data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,}]=useLoginUserMutation();

      const navigate = useNavigate();

    const handleChange=(e,type)=>{
        if(type==="signup"){
            setSignupInput({...signupInput,[e.target.name]:e.target.value})
        } else{
            setLoginInput({...loginInput,[e.target.name]:e.target.value})
        }
    }

    async function handleSubmit(type){
      const inputData = type === "signup" ? signupInput : loginInput;
      const action = type === "signup" ? registerUser : loginUser;
      await action(inputData);

    }

    useEffect(() => {
      if(registerIsSuccess && registerData){
        toast.success(registerData.message || "Signup successful.")
      }
      if(registerError){
        toast.error(registerError.data.message || "Signup Failed");
      }
      if(loginIsSuccess && loginData){
        toast.success(loginData.message || "Login successful.");
        navigate("/");
      }
      if(loginError){ 
        toast.error(loginError.data.message || "login Failed");
      }
    }, [
      loginIsLoading,
      registerIsLoading,
      loginData,
      registerData,
      loginError,
      registerError,
    ]); 
    
    return (
  <div className="flex justify-center w-full mt-24">
      <Tabs defaultValue="signup" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signup">Signup</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Create account to check course.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="your name" required type="text" value={signupInput.name} onChange={(e)=>handleChange(e,"signup")}  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" required id="email" placeholder="youremail@gmail.com" value={signupInput.email} onChange={(e)=>handleChange(e,"signup")}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" required id="password" placeholder="xyz123@" value={signupInput.password} onChange={(e)=>handleChange(e,"signup")}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled={registerIsLoading} onClick={()=>handleSubmit("signup")}>{registerIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Signup"
                )}</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Login Here by entering your details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <div className="space-y-1">
              <Label htmlFor="name">Email</Label>
              <Input id="email" name="email" placeholder="abc@gmail.com" required type="email" value={loginInput.email} onChange={(e)=>handleChange(e,"login")}/>
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" required id="password" placeholder="xyz123@" value={loginInput.password} onChange={(e)=>handleChange(e,"login")}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button  disabled={loginIsLoading} onClick={()=>handleSubmit("login")}> {loginIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Login"
                )}</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
  )
}
