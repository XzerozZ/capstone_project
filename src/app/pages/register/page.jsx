import Navbar from "@/components/Navbar";

export default function Register(){
    return(
        <div>
            <Navbar/>
                <div className="flex items-center justify-center h-screen flex-wrap flex-col">
                    <h1 className="text-5xl font-bold">Welcome to</h1>
                    <form className="flex w-[50%] flex-wrap flex-col">
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <label>Name</label>
                                <input type="text" className="border-solid border-black border-2"/>
                            </div>
                            <div className="flex flex-col">
                                <label>Last name</label>
                                <input type="text" className="border-solid border-black border-2"/>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <label>Display name</label>
                                <input type="text" className="border-solid border-black border-2"/>
                            </div>
                            <div className="flex flex-col">
                                <label>Email</label>
                                <input type="email" className="border-solid border-black border-2"/>
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col">
                                <label>Password</label>
                                <input type="password" name="password" id="password" className="border-solid border-black border-2"/>
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col">
                                <label>Confirmed password</label>
                                <input type="password" name="confirmedPassword" id="confirmedPassword" className="border-solid border-black border-2"/>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col">
                                <label>Role</label>
                                <select name="role" id="role" className="border-solid border-black border-2">
                                    <option value="freelancer">Freelancer</option>
                                    <option value="company">Company</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col">
                                <div>
                                    <input type="checkbox" name="agreementBox" id="agreementBox" required/>
                                    <label>I have read agreements and policies</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="agreementBox" id="agreementBox" required/>
                                    <label>I agree to share my data information</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>

                            </div>
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>
        </div>
    );
}