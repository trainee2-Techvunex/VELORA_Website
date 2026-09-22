import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useAuth } from '../context/AuthContext';
import { formatPrice } from '../utils/formatters';
import { SafeImage } from '../components/Common/SafeImage';
import {
  CheckCircle2,
  Package,
  Truck,
  MapPin,
  Sparkles,
  ArrowRight,
  Printer,
  ShoppingBag,
  ShieldCheck,
} from 'lucide-react';

export const OrderConfirmationPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { orders } = useAuth();

  const order = orders.find((o) => o.id === orderId) || orders[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#9F1239', '#FBA6BC', '#D4AF37', '#E11D48'],
      });
    } catch (e) {
      console.error(e);
    }
  }, [orderId]);

  if (!order) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#FAF9F8]">
        <div className="text-center space-y-4">
          <h2 className="font-serif text-2xl font-bold text-slate-800">Order not found</h2>
          <Link to="/" className="px-6 py-2.5 bg-[#9F1239] text-white text-xs font-bold rounded-xl">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F8] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Success Hero Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#F0E9E6] shadow-sm text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9F1239]">
              Thank you for shopping with VÉLORA
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Your Luxury Order is Confirmed!
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Order ID: <strong className="text-slate-800 font-mono">{order.orderNumber}</strong> • Placed on {order.date}
            </p>
          </div>

          <div className="p-4 bg-[#FFF5F7] rounded-2xl border border-[#FDE2E8] max-w-lg mx-auto text-xs text-slate-700 space-y-1">
            <p className="font-semibold text-[#9F1239]">
              Estimated Delivery: <strong>{order.estimatedDelivery}</strong>
            </p>
            <p className="text-slate-500 text-[11px]">
              We have sent full tracking and dispatch updates to your registered phone & email.
            </p>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E9E6] shadow-xs space-y-6">
          <h3 className="font-serif text-lg font-bold text-slate-900">
            Order Fulfillment Progress
          </h3>

          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            {[
              { label: 'Confirmed', icon: CheckCircle2, active: true },
              { label: 'Formulating & Packing', icon: Package, active: true },
              { label: 'Dispatched', icon: Truck, active: false },
              { label: 'Delivered', icon: Sparkles, active: false },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center space-y-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      step.active
                        ? 'bg-[#9F1239] text-white ring-4 ring-[#FDE2E8]'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[9.5px] sm:text-xs font-bold leading-tight ${
                      step.active ? 'text-slate-900' : 'text-slate-400'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Items & Shipping Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Items Purchased */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 border border-[#F0E9E6] shadow-xs space-y-4">
            <h3 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
              Items in this Shipment ({order.items.length})
            </h3>

            <div className="space-y-3 divide-y divide-slate-100">
              {order.items.map((item, idx) => (
                <div key={idx} className="pt-3 first:pt-0 flex items-center gap-3">
                  <div className="w-16 h-20 rounded-xl overflow-hidden border border-[#F0E9E6] shrink-0">
                    <SafeImage
                      src={item.image}
                      alt={item.name}
                      fallbackCategory="skincare"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0 text-xs">
                    <p className="font-bold text-slate-800 line-clamp-2">{item.name}</p>
                    <p className="text-slate-400 text-[11px]">Size: {item.variantSize} • Qty: {item.quantity}</p>
                    <p className="font-bold text-slate-900 mt-1">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bill Recap */}
            <div className="pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(order.subtotal)}</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-emerald-600">
                  <span>Savings & Discounts</span>
                  <span>-{formatPrice(order.discount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>{order.shipping === 0 ? 'FREE' : formatPrice(order.shipping)}</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-slate-900 pt-2 border-t border-slate-100">
                <span>Total Paid</span>
                <span>{formatPrice(order.total)}</span>
              </div>
            </div>
          </div>

          {/* Delivery & Payment Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-[#F0E9E6] shadow-xs space-y-3 text-xs">
              <h4 className="font-serif text-base font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#9F1239]" />
                <span>Shipping Address</span>
              </h4>
              <div className="text-slate-600 leading-relaxed">
                <p className="font-bold text-slate-800">{order.shippingAddress.fullName}</p>
                <p>{order.shippingAddress.addressLine}</p>
                <p>{order.shippingAddress.locality}, {order.shippingAddress.city}</p>
                <p>{order.shippingAddress.state} – {order.shippingAddress.pincode}</p>
                <p className="mt-1 text-slate-500">Phone: {order.shippingAddress.phone}</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#F0E9E6] shadow-xs space-y-3 text-xs">
              <h4 className="font-serif text-base font-bold text-slate-900">
                Payment Info
              </h4>
              <p className="text-slate-600">
                Method: <strong>{order.paymentMethod}</strong>
              </p>
              <p className="text-emerald-700 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Payment Verified Successfully</span>
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => window.print()}
                className="w-full py-3 bg-white border border-[#F0E9E6] hover:border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Invoice</span>
              </button>

              <Link
                to="/collection/all"
                className="w-full py-3.5 bg-[#9F1239] hover:bg-[#801836] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-center"
              >
                <span>Continue Shopping</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
