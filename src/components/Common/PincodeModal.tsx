import React, { useState } from 'react';
import { Modal } from './Modal';
import { usePincode } from '../../context/PincodeContext';
import { MapPin, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const PincodeModal: React.FC = () => {
  const {
    pincode,
    city,
    state,
    isPincodeModalOpen,
    closePincodeModal,
    updatePincode,
    popularPincodes,
  } = usePincode();

  const [inputVal, setInputVal] = useState(pincode);
  const [error, setError] = useState('');
  const { showToast } = useToast();

  const handleApply = (codeToApply?: string) => {
    const code = codeToApply || inputVal;
    const res = updatePincode(code);
    if (res.success) {
      setError('');
      showToast(res.message, 'success', 'Delivery Updated');
      closePincodeModal();
    } else {
      setError(res.message);
    }
  };

  return (
    <Modal isOpen={isPincodeModalOpen} onClose={closePincodeModal} title="Select Delivery Location">
      <div className="space-y-5">
        <div>
          <p className="text-xs text-slate-500 mb-2">
            Enter your 6-digit Indian pincode to check accurate delivery speed, express shipping & cash on delivery availability.
          </p>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                maxLength={6}
                value={inputVal}
                onChange={(e) => {
                  setInputVal(e.target.value.replace(/\D/g, ''));
                  setError('');
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleApply()}
                placeholder="Enter 6-digit Pincode"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-[#F0E9E6] rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E11D48] focus:bg-white transition-all"
              />
            </div>
            <button
              onClick={() => handleApply()}
              className="px-5 py-2.5 bg-[#9F1239] hover:bg-[#801836] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-xs flex items-center gap-1.5"
            >
              <span>Update</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          {error && <p className="text-xs text-rose-500 mt-1.5 font-medium">{error}</p>}
        </div>

        {/* Current Location Badge */}
        <div className="flex items-center gap-3 p-3.5 bg-[#FFF5F7] border border-[#FDE2E8] rounded-xl">
          <CheckCircle2 className="w-5 h-5 text-[#E11D48] shrink-0" />
          <div className="text-xs">
            <p className="font-semibold text-slate-800">
              Currently delivering to: <span className="text-[#9F1239]">{city}, {state} ({pincode})</span>
            </p>
            <p className="text-slate-500 text-[11px] mt-0.5">Express Dispatch available within 24 hours</p>
          </div>
        </div>

        {/* Popular Cities */}
        <div>
          <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5">
            Popular Metro Cities
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {popularPincodes.map((item) => (
              <button
                key={item.code}
                onClick={() => {
                  setInputVal(item.code);
                  handleApply(item.code);
                }}
                className={`flex flex-col items-start p-2.5 rounded-lg border text-left transition-all ${
                  pincode === item.code
                    ? 'border-[#E11D48] bg-[#FFF0F3] text-[#9F1239]'
                    : 'border-[#F0E9E6] hover:border-slate-300 bg-white text-slate-700'
                }`}
              >
                <span className="text-xs font-semibold">{item.city}</span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5">{item.code}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Trust Note */}
        <div className="pt-2 border-t border-[#F0E9E6] flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Insured Delivery</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Discreet Luxury Packaging</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};
