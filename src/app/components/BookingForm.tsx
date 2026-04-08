import { useState } from "react";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface BookingFormProps {
  serviceType?: "shuttle" | "tour";
}

export function BookingForm({ serviceType = "shuttle" }: BookingFormProps) {
  const [formData, setFormData] = useState({
    serviceType: serviceType,
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    dropoffLocation: "",
    date: "",
    time: "",
    passengers: "1",
    additionalRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send the form data to a backend or email service
    alert(
      "Thank you for your quote request! We will contact you shortly with pricing details. Check your email or WhatsApp for our response."
    );
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">Request a Quote</h2>
        <p className="text-gray-600 text-sm">Fill in your details and we'll get back to you with a customized quote</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+27 XX XXX XXXX"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="serviceType">Service Type *</Label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          required
        >
          <option value="shuttle">Airport Shuttle</option>
          <option value="tour">Tour Service</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="pickupLocation">
          <MapPin className="h-4 w-4 inline mr-1" />
          Pickup Location *
        </Label>
        <Input
          id="pickupLocation"
          name="pickupLocation"
          value={formData.pickupLocation}
          onChange={handleChange}
          required
          placeholder="e.g., OR Tambo Airport, Johannesburg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dropoffLocation">
          <MapPin className="h-4 w-4 inline mr-1" />
          Drop-off Location *
        </Label>
        <Input
          id="dropoffLocation"
          name="dropoffLocation"
          value={formData.dropoffLocation}
          onChange={handleChange}
          required
          placeholder="e.g., Sandton, Johannesburg"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date">
            <Calendar className="h-4 w-4 inline mr-1" />
            Date *
          </Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Time *</Label>
          <Input id="time" name="time" type="time" value={formData.time} onChange={handleChange} required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="passengers">
          <Users className="h-4 w-4 inline mr-1" />
          Number of Passengers *
        </Label>
        <select
          id="passengers"
          name="passengers"
          value={formData.passengers}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          required
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? "passenger" : "passengers"}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalRequests">Additional Requests (Optional)</Label>
        <Textarea
          id="additionalRequests"
          name="additionalRequests"
          value={formData.additionalRequests}
          onChange={handleChange}
          placeholder="Any special requirements, luggage details, or specific needs..."
          rows={4}
        />
      </div>

      <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6">
        Get Instant Quote
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to receive quotes and communication from JH TRANSFERS
      </p>
    </form>
  );
}
