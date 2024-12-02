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
import { useState } from "react"

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

    const handleChange=(e,type)=>{
        if(type==="signup"){
            setSignupInput({...signupInput,[e.target.name]:e.target.value})
        } else{
            setLoginInput({...loginInput,[e.target.name]:e.target.value})
        }
    }

    function handleSubmit(type){
        if (type === "signup") {
            console.log(signupInput); // Log signup values
          } else {
            console.log(loginInput); // Log login values
          }

    }
    
    return (
  <div className="flex justify-center w-full">
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
            <Button onClick={()=>handleSubmit("signup")}>Signup</Button>
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
            <Button onClick={()=>handleSubmit("login")}>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
  )
}
