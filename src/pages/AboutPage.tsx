import React from 'react';
import { Breadcrumbs } from '../components/Common/Breadcrumbs';
import { Sparkles, ShieldCheck, Heart, Leaf, Award, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FAF9F8] min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
        <Breadcrumbs
          items={[{ label: 'Home', link: '/' }, { label: 'Our Story & Philosophy' }]}
        />

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#FFF0F4] via-[#FFE4EC] to-[#FCE7F0] rounded-3xl p-8 sm:p-14 border border-[#FDE2E8] text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9F1239]">
            The Maison Philosophy
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Artisanal French Parfumerie Meets Clean Ayurvedic Botanicals
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            VÉLORA was born from a singular obsession: merging the intoxicating complexity of French fine fragrances with the clinically proven bio-actives of ancient Indian botanicals.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#F0E9E6] shadow-xs space-y-6 leading-relaxed text-xs sm:text-sm text-slate-700">
          <h2 className="font-serif text-2xl font-bold text-slate-900">
            Our Proven Standards
          </h2>
          <p>
            Every fragrance extract is distilled in collaboration with historic family perfumers in Grasse, France, using cold enfleurage and artisanal copper steam vessels. Our skincare line utilizes 100% stable active molecules (24K Gold flakes, ethyl ascorbic acid, 5 molecular weights of hyaluronic acid, and pure cica) formulated strictly at skin-neutral pH 5.5.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-[#FFF5F7] border border-[#FDE2E8] space-y-2">
              <Leaf className="w-6 h-6 text-[#9F1239]" />
              <h3 className="font-serif text-base font-bold text-slate-900">100% Clean Formulations</h3>
              <p className="text-xs text-slate-600">
                0% parabens, phthalates, synthetic sulfates, or micro-plastics.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFF5F7] border border-[#FDE2E8] space-y-2">
              <Award className="w-6 h-6 text-[#9F1239]" />
              <h3 className="font-serif text-base font-bold text-slate-900">IFRA & Dermat Certified</h3>
              <p className="text-xs text-slate-600">
                Extensively patch-tested on sensitive and reactive skin types.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFF5F7] border border-[#FDE2E8] space-y-2">
              <Heart className="w-6 h-6 text-[#9F1239]" />
              <h3 className="font-serif text-base font-bold text-slate-900">Ethical & Cruelty Free</h3>
              <p className="text-xs text-slate-600">
                Never tested on animals. 100% recyclable heavy glass flacons.
              </p>
            </div>
          </div>
        </div>

        {/* Sustainability Promise */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#F0E9E6] shadow-xs space-y-4 text-xs sm:text-sm text-slate-700">
          <h2 className="font-serif text-2xl font-bold text-slate-900">
            Our Sustainable Packaging Promise
          </h2>
          <p>
            We believe true luxury does not cost the Earth. 94% of our packaging is made from recycled fluted cardboard and endlessly recyclable heavy flint glass. All shipping boxes are printed using soy-based vegetable inks.
          </p>
        </div>
      </div>
    </div>
  );
};
