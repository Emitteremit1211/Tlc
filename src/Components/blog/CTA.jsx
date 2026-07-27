import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className="py-20 px-6">

            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-5xl font-bold text-slate-900">

                    Looking for Healthcare Professionals?

                </h2>

                <p className="mt-6 text-slate-600 max-w-2xl mx-auto">

                    TLC Assist Living provides trusted healthcare staffing and compassionate home care services tailored to your needs.

                </p>

                <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 mt-10 bg-teal-600 hover:bg-teal-700 transition px-8 py-4 rounded-xl text-white font-semibold"
                >
                    Contact Us

                    <ArrowRight />

                </Link>

            </div>

        </section>
    );
};

export default CTA;