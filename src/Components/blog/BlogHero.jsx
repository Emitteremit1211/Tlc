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
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0D2B3E] via-[#123F59] to-[#081C29] py-32">

            <div className="tlc-blob -left-28 top-12 h-72 w-72 bg-[#1B8C86]" />
            <div className="tlc-blob right-0 bottom-0 h-96 w-96 bg-[#7FDCD2]" />

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="max-w-3xl">

                    <span className="tlc-glass-dark inline-flex rounded-full px-4 py-2 text-sm text-[#7FDCD2] font-semibold">
                        TLC Knowledge Center
                    </span>

                    <h1 className="tlc-display mt-8 text-4xl md:text-6xl font-semibold text-white leading-tight">
                        Healthcare Insights,{" "}
                        <span className="text-[#7FDCD2]">Staffing News</span>{" "}
                        & Caregiver Resources
                    </h1>

                    <p className="mt-6 text-lg text-white/60 leading-8 max-w-xl">
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
                                className="tlc-glass-dark rounded-3xl p-7"
                            >

                                <div className="w-14 h-14 rounded-2xl bg-[#1B8C86] flex items-center justify-center">
                                    <Icon className="text-white w-7 h-7" />
                                </div>

                                <h3 className="tlc-display mt-6 text-4xl font-semibold text-white">
                                    {item.value}
                                </h3>

                                <p className="text-white/60 mt-2 text-sm">
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