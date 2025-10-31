'use client'


import SecondaryButton from "../common/SecondaryButton";
import PrimaryButton from "../common/PrimaryButton";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";

export default function CallToAction() {
  return (
    <section className="bg-linear-to-b from-white to-gray-50 py-8">
      <div className="px-6 sm:px-10 lg:px-20">
        <FadeInWhenVisible>
          <div className="rounded-2xl bg-white shadow-lg p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border border-gray-100">
            {/* Text Content */}
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                Let’s build something amazing together
              </h3>
              <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed">
                I’m open to collaborations, freelance projects, and full-time opportunities.
                Let’s bring your ideas to life.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <PrimaryButton href="/contact" label="Contact Me" />
              <SecondaryButton href="/resume" label="View Resume" />
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
