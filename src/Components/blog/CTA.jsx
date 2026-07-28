import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className="py-20 px-6">

            <div className="tlc-glass max-w-4xl mx-auto rounded-3xl p-10 md:p-14 text-center">

                <h2 className="tlc-display text-2xl md:text-4xl font-semibold text-[#0D2B3E]">
                    Looking for Healthcare Professionals?
                </h2>

                <p className="mt-4 text-[#4A5D6B] max-w-xl mx-auto leading-relaxed">
                    TLC Assist Living provides trusted healthcare staffing and
                    compassionate home care services tailored to your needs.
                </p>

                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 mt-8 bg-[#0D2B3E] hover:bg-[#1B8C86] transition px-8 py-3 rounded-2xl text-white font-semibold"
                >
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                </Link>

            </div>

        </section>
    );
};

export default CTA;