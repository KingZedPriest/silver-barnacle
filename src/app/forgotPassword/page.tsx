import Image from "next/image";
import getUsers from "@/actions/getAllUsers";


//Import Needed Images
import logo from "../../../public/Images/Big whiz Walletassets logo badge.svg";

//Import Needed Components
import FirstForm from "@/components/ForgotPasswordComponents/FirstForm";



const page = async () => {

    const users = await getUsers()
    const emailAddresses = users.map(user => user.email);
    //console.log({emailAddresses})

    return ( 
        <main className="createBackground h-screen flex items-center justify-center">
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-white shadow py-8 px-4 md:px-6 xl:px-8">
                <div className="flex gap-x-1 items-center">
                    <Image src={logo} alt="Capital Sphere Bank Logo" priority={true} className="size-8 md:size-10 xl:size-12"/>
                    <div className="text-[#1C1F33] font-semibold text-xs sm:text-sm xl:text-base">
                        <p>Wealth</p>
                        <p className="-mt-1">Assets</p>
                    </div>
                </div>
                <div className="text-[#161618] mt-10">
                    <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">Recovery Mode</p>
                    <p className="text-xs sm:text-sm xl:text-base font-semibold mt-2">Forgot Password</p>
                </div>
                <FirstForm emails={emailAddresses}/>
            </div>
        </main>
     );
}
 
export default page;