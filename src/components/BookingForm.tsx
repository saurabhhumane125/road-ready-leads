import { useState } from "react";
import { toast } from "sonner";

const BookingForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: "",
    time: "",
    area: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.course) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    const now = new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
    const courseLabels: Record<string, string> = {
      lmv: "LMV (Car Training)",
      "two-wheeler": "Two-Wheeler Training",
      refresher: "Refresher Course",
      defensive: "Defensive Driving",
    };
    const message = `New Booking Request\n\nName: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nCourse: ${courseLabels[form.course] || form.course}\nTime: ${now}`;
    const url = `https://wa.me/918779663354?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Redirecting to WhatsApp...");
    setForm({ name: "", phone: "", course: "", time: "", area: "" });
  };

  const inputClasses =
    "w-full bg-background border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

  return (
    <section id="booking" className="section-spacing bg-background">
      <div className="container max-w-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Book Your Class</h2>
        <p className="text-sm text-muted-foreground mb-6">Fill in your details and we'll get back to you</p>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl border p-5 sm:p-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClasses}
            maxLength={100}
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
            className={inputClasses}
          />
          <select
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            className={inputClasses}
          >
            <option value="">Select Course *</option>
            <option value="lmv">LMV (Car Training)</option>
            <option value="two-wheeler">Two-Wheeler Training</option>
            <option value="refresher">Refresher Course</option>
            <option value="defensive">Defensive Driving</option>
          </select>
          <select
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className={inputClasses}
          >
            <option value="">Preferred Time</option>
            <option value="morning">Morning (8 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="evening">Evening (4 PM - 7 PM)</option>
          </select>
          <input
            type="text"
            placeholder="Your Area / Location"
            value={form.area}
            onChange={(e) => setForm({ ...form, area: e.target.value })}
            className={inputClasses}
            maxLength={100}
          />
          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground font-semibold py-3.5 rounded-xl text-base hover:opacity-90 transition-opacity"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
