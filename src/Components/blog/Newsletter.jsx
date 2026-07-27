import { Send } from "lucide-react";

const Newsletter = () => {
    return (
        <section className="py-24 px-6">

            <div className="max-w-6xl mx-auto rounded-[35px] overflow-hidden bg-gradient-to-r from-[#0B2C40] via-[#144663] to-[#0B2C40] p-12 relative">

                <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-teal-500/20 blur-3xl"></div>

                <div className="relative text-center">

                    <h2 className="text-4xl font-bold text-white">

                        Stay Updated

                    </h2>

                    <p className="text-slate-300 mt-4 max-w-xl mx-auto">

                        Subscribe to receive healthcare insights, caregiver tips and staffing updates.

                    </p>

                    <div className="mt-10 flex flex-col md:flex-row gap-4 max-w-xl mx-auto">

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 rounded-xl px-5 py-4 outline-none"
                        />

                        <button className="bg-teal-500 hover:bg-teal-600 transition px-8 rounded-xl text-white font-semibold flex items-center justify-center gap-2">

                            <Send size={18} />

                            Subscribe

                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Newsletter;