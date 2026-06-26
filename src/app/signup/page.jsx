"use client";
import { GoogleIcon } from "@dev.icons/react";
import Image from "next/image";
import { useState } from "react";
import RegistrationImage from "@/assets/undraw_content-team_1p7b.png"
import { ArrowRight, Check, Eye, EyeSlash, Persons, Thunderbolt } from "@gravity-ui/icons";
import { Button, Input, InputGroup, Label, Radio, RadioGroup, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import axios from "axios";


export default function SignUpPage() {

  const [showPassword, setShowPassword] = useState(false);
  console.log(process.env.IMAGE_BB_API_KEY);

  const imageUpload = async (e) => {
    // let formFields = new FormData()

    let file = e.target.files[0]
    // formFields.append("image", file)
    console.log(file);

  //   let fetchImage = await axios.post(`https://api.imgbb.com/1/upload?key=3400c5b9c87c9fadca80817ae1c398a6`, formFields)

  //   let imageData = await fetchImage.data
  //   console.log(file);
  //   console.log(imageData);

  //   return imageData;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = e.currentTarget;
    let formFields = new FormData(form)
    let formData = Object.fromEntries(formFields.entries())
    console.log(formData);
    

    let file = formFields.get("image")
    console.log(file)
    formFields.append("image", file)
    console.log(formFields);
    
    // console.log(formFields);
    // let fetchImage = await axios.post(`https://api.imgbb.com/1/upload?key=3400c5b9c87c9fadca80817ae1c398a6`, formFields)
    // let imageData = await fetchImage.data;
    // console.log(file);
    // console.log(imageData.data.uri);
    // return imageData;

    // let { data, error } = await authClient.signUp.email({
    //   name: formData.fullName,
    //   email: formData.email,
    //   password: formData.password,
    //   // userType: formData.userType,
    //   callbackURL: "/"

    // })
    // console.log(data, error);

    // Handle form submission logic here
  };
  const continueWithGoogle = async () => {
    let { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/"
    })
    console.log(data, error);

  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl">

        {/* Left Side: Branding Panel */}
        <div className="relative hidden w-1/2 flex-col justify-between bg-[#0e172c] p-12 text-white lg:flex">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold leading-tight tracking-tight">
              Build the future with us.
            </h1>
            <p className="text-sm font-medium text-slate-400">
              Join a curated ecosystem of visionaries and high-performance builders. Your next big leap starts here.
            </p>

            <div className="mt-12 space-y-4">

              <div  >
                <Image src={RegistrationImage} alt="registration" className="rounded-3xl" />

              </div>

              <p className="italic text-xs text-slate-400 tracking-wide">"Forge your legacy."</p>
            </div>

            <div className="space-y-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800/80 border border-slate-700/50">

                  <Thunderbolt className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">Launch faster</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Verified founders get access to exclusive resource pools.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800/80 border border-slate-700/50">

                  <Persons className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">Global Network</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Connect with expert collaborators across 40+ industries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="w-full p-8 sm:p-12 lg:w-1/2 bg-white">

          {/* Stepper Header */}
          <div className="mb-8 flex items-center justify-between text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0e172c] text-[10px] text-white">1</span>
              <span className="text-slate-900">Identity</span>
            </div>
            <div className="h-[1px] flex-1 bg-slate-200 mx-4"></div>
            <div className="flex items-center gap-2 opacity-60">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-400 text-[10px]">2</span>
              <span>Role</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Create Account</h2>
            <p className="text-xs text-slate-500 mt-1">Step 1: The essentials</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            <TextField name="fullName" type="text" isRequired>
              <Label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name</Label>
              <Input

                placeholder="John Doe"
                className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white"
              />
            </TextField>

            <TextField type="email" name="email" isRequired>
              <Label className="block text-xs font-semibold text-slate-700 mb-1.5">Work Email</Label>
              <Input

                placeholder="john@startup.com"
                className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white"
              />
            </TextField>
            <input type="file" name="image"/>
            <br/>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Select your Type</label>
              <RadioGroup defaultValue={"founder"} name="userType" aria-label="type" isRequired>
                <Radio value="founder"  >
                  <Radio.Content >
                    <Radio.Control>
                      <Radio.Indicator />
                    </Radio.Control>
                    Founder
                  </Radio.Content>
                </Radio>

                <Radio value="collaborator"  >
                  <Radio.Content>
                    <Radio.Control>
                      <Radio.Indicator />
                    </Radio.Control>
                    Collaborator
                  </Radio.Content>
                </Radio>
              </RadioGroup>
            </div>

            <div>
              {/* <Label className="block text-xs font-semibold text-slate-700 mb-1.5">Password</Label> */}
              <TextField isRequired className="relative" name="password" type={showPassword ? "text" : "password"}>
                <Label>
                  Password
                </Label>
                <InputGroup>

                  <InputGroup.Input placeholder="••••••••••••" />
                  <InputGroup.Suffix>
                    <Button
                      variant="outline"
                      onClick={() => setShowPassword(!showPassword)}
                      className="translate-x-2 ms-2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <Eye /> : <EyeSlash />}
                    </Button>
                  </InputGroup.Suffix>
                </InputGroup>
              </TextField>

              {/* Password Requirements UI */}
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Check />
                  8+ characters
                </span>
                <span className="flex items-center gap-1">
                  <Check />
                  Upper & Lower case
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0e172c] py-3 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.99]"
            >
              Continue to Role
              <ArrowRight />
            </Button>
          </form>

          {/* Google OAuth Button */}
          <div>
            <div className="my-6 flex items-center justify-center">
              <div className="h-[1px] flex-1 bg-slate-200"></div>
              <span className="px-3 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                Or Email
              </span>
              <div className="h-[1px] flex-1 bg-slate-200"></div>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => continueWithGoogle()}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 active:scale-[0.99]"
          >
            <GoogleIcon size={20} />
            Continue with Google
          </Button>
          <br />
          
        </div>
      </div>
    </div>
  );
}