import React from "react";
import { BookOpen, Users, HeartHandshake } from "lucide-react";

const stats = [
    {
        icon: BookOpen,
        title: "Healthcare Insights",
        value: "100+",
    },
    {
        icon: Users,
        title: "Families Helped",
        value: "500+",
    },
    {
        icon: HeartHandshake,
        title: "Care Professionals",
        value: "150+",
    },
];

const BlogHero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0B2C40] via-[#123F59] to-[#0B2C40] py-32">

            <div className="absolute -left-28 top-12 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="max-w-3xl">

                    <span className="inline-flex rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm text-teal-300 backdrop-blur-xl">

                        TLC Knowledge Center

                    </span>

                    <h1 className="mt-8 text-5xl md:text-6xl font-bold text-white leading-tight">

                        Healthcare Insights,

                        <span className="text-teal-400">

                            Staffing News

                        </span>

                        & Caregiver Resources

                    </h1>

                    <p className="mt-6 text-lg text-slate-300 leading-8">

                        Stay informed with expert advice on home care,
                        healthcare staffing, senior wellness and professional caregiving.

                    </p>

                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-20">

                    {stats.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-7"
                            >

                                <div className="w-14 h-14 rounded-2xl bg-teal-500 flex items-center justify-center">

                                    <Icon className="text-white w-7 h-7" />

                                </div>

                                <h3 className="mt-6 text-4xl font-bold text-white">

                                    {item.value}

                                </h3>

                                <p className="text-slate-300 mt-2">

                                    {item.title}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default BlogHero;