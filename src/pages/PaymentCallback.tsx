import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { apiService } from "@/services/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [status, setStatus] = useState<"loading" | "success" | "failed">(
    "loading"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyPayment = async () => {
      const gateway = searchParams.get("gateway");
      const reference =
        searchParams.get("reference") || searchParams.get("trxref");
      const success = searchParams.get("success");
      const paymentId = searchParams.get("paymentId");
      const payerId = searchParams.get("PayerID");

      if (!gateway) {
        setStatus("failed");
        setMessage("Invalid payment gateway");
        return;
      }

      try {
        let verification;

        if (gateway === "paystack" && reference) {
          verification = await apiService.verifyPaystackPayment(reference);
        } else if (gateway === "paypal" && paymentId && payerId) {
          verification = await apiService.verifyPayPalPayment(
            paymentId,
            payerId
          );
        } else if (success === "true" && reference) {
          // Handle redirect from PayPal
          verification = await apiService.verifyPaystackPayment(reference);
        } else {
          setStatus("failed");
          setMessage("Payment verification failed: Missing parameters");
          return;
        }

        if (verification.success && verification.status === "success") {
          setStatus("success");
          setMessage(verification.message || "Payment successful!");

          toast({
            title: "Payment Successful",
            description: "Your payment has been processed successfully.",
          });

          // Redirect to dashboard after 3 seconds
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
        } else {
          setStatus("failed");
          setMessage(verification.message || "Payment verification failed");
        }
      } catch (error) {
        console.error("Payment verification error:", error);
        setStatus("failed");
        setMessage("An error occurred during payment verification");
      }
    };

    verifyPayment();
  }, [searchParams, navigate, toast]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <div className="container mx-auto px-4 py-32">
        <div className="max-w-md mx-auto text-center">
          {status === "loading" && (
            <div className="space-y-6">
              <div className="w-24 h-24 mx-auto flex items-center justify-center">
                <Loader className="w-full h-full text-[#9902f7] animate-spin" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                Verifying Payment
              </h1>
              <p className="text-gray-600">
                Please wait while we verify your payment...
              </p>
            </div>
          )}

          {status === "success" && (
            <div className="space-y-6">
              <div className="w-24 h-24 mx-auto flex items-center justify-center bg-green-100 rounded-full">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                Payment Successful!
              </h1>
              <p className="text-gray-600">{message}</p>
              <p className="text-sm text-gray-500">
                Redirecting to dashboard...
              </p>
              <Button
                onClick={() => navigate("/dashboard")}
                className="bg-gradient-to-r from-[#9902f7] to-[#667eea]"
              >
                Go to Dashboard
              </Button>
            </div>
          )}

          {status === "failed" && (
            <div className="space-y-6">
              <div className="w-24 h-24 mx-auto flex items-center justify-center bg-red-100 rounded-full">
                <XCircle className="w-16 h-16 text-red-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                Payment Failed
              </h1>
              <p className="text-gray-600">{message}</p>
              <div className="space-y-3">
                <Button
                  onClick={() => navigate("/checkout")}
                  className="bg-gradient-to-r from-[#9902f7] to-[#667eea] w-full"
                >
                  Try Again
                </Button>
                <Button
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="w-full"
                >
                  Back to Home
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentCallback;
